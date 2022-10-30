
def patient_history_inference(record,rehospitalisation_data_scaler,rehospitalisation_model):
    int_cols = record.dtypes[record.dtypes != object].keys()
    cat_cols = record.dtypes[record.dtypes == object].keys()

    record[int_cols] = rehospitalisation_data_scaler.transform(record[int_cols])
    record[cat_cols] = record[cat_cols].astype('category')
    prediction = rehospitalisation_model.predict(record)
    return prediction

def ecg_inference(arr,model):
    output = model.predict(arr) # [15:30]
    tot = 0
    for i in range(0,len(output)):
        for j in range(5):
            if output[i][j] == 1 :
                tot += 1
                break
    return (tot / len(output))
    # if (tot / len(output)) > 0.7:
    #     print("Patiet at risk")
    # else:
    #     print("Patient not at risk")


def calculate_medicine_and_procedure_cost(record,price_procedure_data_scaler,price_procedure_target_scaler,price_procedure_model,
price_medication_data_scaler,price_medication_target_scaler,price_medication_model):
    # Procedure
    proc = record[['COND_CODE0', 'COND_CODE1', 'COND_CODE2', 'COND_CODE3', 'COND_CODE4',
                   'COND_CODE5', 'COND_CODE6', 'COND_CODE7', 'COND_CODE8', 'COND_CODE9',
                   'COND_CODE10', 'COND_CODE11', 'COND_CODE12', 'COND_CODE13',
                   'COND_CODE14', 'GENDER', 'MARITAL', 'ETHNICITY', 'STATE', 'CITY',
                   'PROC_CODE0', 'PROC_CODE1', 'PROC_CODE2', 'PROC_CODE3',
                   'PROC_CODE4', 'PROC_CODE5', 'PROC_CODE6', 'PROC_CODE7', 'PROC_CODE8',
                   'PROC_CODE9', 'PROC_CODE10', 'PROC_CODE11']]
    int_cols = proc.dtypes[proc.dtypes != object].keys()
    cat_cols = proc.dtypes[proc.dtypes == object].keys()

    proc[int_cols] = price_procedure_data_scaler.transform(proc[int_cols])
    proc[cat_cols] = record[cat_cols].apply(lambda x: x.astype('category'))

    proc_pred = price_procedure_target_scaler.inverse_transform(price_procedure_model.predict(proc).reshape(-1, 1))

    record = record[['COND_CODE0', 'COND_CODE1', 'COND_CODE2', 'COND_CODE3', 'COND_CODE4',
                     'COND_CODE5', 'COND_CODE6', 'COND_CODE7', 'COND_CODE8', 'COND_CODE9',
                     'COND_CODE10', 'COND_CODE11', 'COND_CODE12', 'COND_CODE13',
                     'COND_CODE14', 'GENDER', 'MARITAL', 'ETHNICITY', 'STATE', 'CITY',
                     'BASE_COST', 'PROC_CODE0', 'PROC_CODE1', 'PROC_CODE2', 'PROC_CODE3',
                     'PROC_CODE4', 'PROC_CODE5', 'PROC_CODE6', 'PROC_CODE7', 'PROC_CODE8',
                     'PROC_CODE9', 'PROC_CODE10', 'PROC_CODE11', 'MED_CODE0',
                     'MED_CODE1', 'MED_CODE2', 'MED_CODE3', 'MED_CODE4', 'MED_CODE5',
                     'MED_CODE6', 'MED_CODE7', 'MED_CODE8', 'MED_CODE9', 'MED_CODE10',
                     'MED_CODE11', 'MED_CODE12', 'MED_CODE13', 'MED_CODE14', 'MED_CODE15',
                     'MED_CODE16']]

    int_cols = record.dtypes[record.dtypes != object].keys()
    cat_cols = record.dtypes[record.dtypes == object].keys()

    record[int_cols] = price_medication_data_scaler.transform(record[int_cols])
    record[cat_cols] = record[cat_cols].apply(lambda x: x.astype('category'))

    med_pred = price_medication_target_scaler.inverse_transform(price_medication_model.predict(record).reshape(-1, 1))

    return med_pred + proc_pred


def encounter_inference(record,encounter_data_scaler,encounter_model):
    result_mapping = {1: 129.16, 0: 77.49}

    cat_columns = ['ENCOUNTERCLASS', 'DESCRIPTION', 'GENDER', 'MARITAL', 'ETHNICITY',
                   'STATE', 'CITY', 'ENCOUNTER', 'PATIENT_y']
    num_columns = ['CODE', 'REASONCODE', 'COND_CODE0', 'COND_CODE1', 'COND_CODE2',
                   'COND_CODE3', 'COND_CODE4', 'COND_CODE5', 'COND_CODE6', 'COND_CODE7',
                   'COND_CODE8', 'COND_CODE9', 'COND_CODE10', 'COND_CODE11', 'COND_CODE12',
                   'COND_CODE13', 'COND_CODE14']
    record[num_columns] = encounter_data_scaler.transform(record[num_columns])
    record[cat_columns] = record[cat_columns].apply(lambda x: x.astype('category'))
    return result_mapping[encounter_model.predict(record)[0]]