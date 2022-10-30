from flask import Flask
from flask import request,jsonify
import json
import pickle
from helper import *
import pandas as pd
import numpy as np
import tensorflow as tf


app = Flask(__name__)

with open('../Model/encounter_data_scaler.pkl', 'rb') as f:
    encounter_data_scaler = pickle.load(f)

with open('../Model/encounter_model.pkl', 'rb') as f:
    encounter_model = pickle.load(f)

with open('../Model/price_medication_data_scaler.pkl', 'rb') as f:
    price_medication_data_scaler = pickle.load(f)

with open('../Model/price_medication_target_scaler.pkl', 'rb') as f:
    price_medication_target_scaler = pickle.load(f)

with open('../Model/price_medication_model.pkl', 'rb') as f:
    price_medication_model = pickle.load(f)

with open('../Model/price_procedure_data_scaler.pkl', 'rb') as f:
    price_procedure_data_scaler = pickle.load(f)

with open('../Model/price_procedure_model.pkl', 'rb') as f:
    price_procedure_model = pickle.load(f)

with open('../Model/price_procedure_target_scaler.pkl', 'rb') as f:
    price_procedure_target_scaler = pickle.load(f)


with open('../Model/rehospitalisation_data_scaler.pkl', 'rb') as f:
    rehospitalisation_data_scaler = pickle.load(f)

with open('../Model/rehospitalisation_model.pkl', 'rb') as f:
    rehospitalisation_model = pickle.load(f)

model = tf.keras.models.load_model('../Model/my_model')

## Data

encounter_data = pd.read_csv("../Data/ENCOUNTER_SAMPLE_DATA.csv")
encounter_data.drop(columns = ['Unnamed: 0','BASE_ENCOUNTER_COST'],inplace = True)

medicine_proc_data = pd.read_csv('../Data/medication_and_procedure.csv')
patient_history_data = pd.read_csv("../Data/sample_patient_history_feat_2.csv")

with open('../Data/ECG_data.npy', 'rb') as f:
    arr = np.load(f)
# Qquerying
@app.route('/feature1',methods=['POST'])
def procedure_costs():
    body = json.loads(request.data)
    enc_record = encounter_data[encounter_data['PATIENT'] == body['patient_id']]
    med_record = medicine_proc_data[medicine_proc_data['PATIENT'] == body['patient_id']]

    # encounter_price = encounter_inference(encounter_data.iloc[[0]],encounter_data_scaler,encounter_model)
    # proc_medi = calculate_medicine_and_procedure_cost(medicine_proc_data.iloc[[0]],price_procedure_data_scaler,
    #                                                   price_procedure_target_scaler,price_procedure_model,
    #                                                   price_medication_data_scaler,price_medication_target_scaler,
    #                                                   price_medication_model
    #             )

    encounter_price = encounter_inference(enc_record,encounter_data_scaler,encounter_model)
    proc_medi = calculate_medicine_and_procedure_cost(med_record,price_procedure_data_scaler,
                                                      price_procedure_target_scaler,price_procedure_model,
                                                      price_medication_data_scaler,price_medication_target_scaler,
                                                      price_medication_model
    )
    return jsonify(
        total_cost = int(encounter_price + proc_medi)
    )


@app.route('/feature2', methods=['POST'])
def patient_history():
    body = json.loads(request.data)
    record = patient_history_data[patient_history_data['PATIENT'] == body['patient_id']]
    # pred_1 = patient_history_inference(patient_history_data.iloc[[0]], rehospitalisation_data_scaler,
    #                                  rehospitalisation_model)[0]

    pred_1 = patient_history_inference(record, rehospitalisation_data_scaler,
                                     rehospitalisation_model)[0]

    pred_2 = ecg_inference(arr[0:50],model)
    output = (0.4 * pred_1) + (0.6 * pred_2)
    if output > 0.8:
        message = "Patient At Risk"
    else:
        message = "Patient Not At Risk"
    return jsonify(
        message=message
    )

if __name__ == '__main__':
    app.run()
