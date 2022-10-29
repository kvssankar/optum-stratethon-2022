export const doctor_categories = [
  "IMMUNOLOGIST",
  "CARDIOLOGIST",
  "NEUROLOGIST",
  "DERMATOLOGIST",
  "ENT",
  "GASTROENTEROLOGIST",
  "GENERAL PHYSICIAN",
  "GYNAECOLOGIST",
  "INFECTIOUS DISEASE SPECIALIST",
  "NEPHROLOGIST",
  "ORTHOPAEDIC SURGEON",
  "PAEDIATRICIAN",
  "PSYCHIATRIST",
];

export const lab_tests = [
  "CBC",
  "ESR",
  "BLOOD SUGAR",
  "LIPID PROFILE",
  "LIVER FUNCTION TEST",
  "THYROID PROFILE",
  "URINE ROUTINE",
  "URINE MICROSCOPY",
  "X-RAY CHEST",
];

const diseases = {
  CANCER: true,
  DIABETES: true,
  "HEART DISEASE": true,
  STROKE: true,
  OBESITY: true,
  DEPRESSION: false,
  "ALZHEIMER'S DISEASE": true,
  "PARKINSON'S DISEASE": true,
  ASTHMA: true,
  COPD: true,
  "CHRONIC KIDNEY DISEASE": true,
  "HIGH BLOOD PRESSURE": true,
  "HIGH CHOLESTEROL": true,
  OSTEOPOROSIS: true,
  ANXIETY: false,
  "BIPOLAR DISORDER": false,
  EPILEPSY: false,
  MIGRAINE: false,
  SCHIZOPHRENIA: false,
  "SLEEP DISORDERS": false,
  "SUBSTANCE ABUSE": false,
  TUBERCULOSIS: true,
  "HIV/AIDS": true,
  HYPERTENSION: true,
  MALARIA: false,
  TYPHOID: false,
  DIARRHOEA: false,
  CHOLERA: false,
  HEPATITIS: false,
  MENINGITIS: false,
  MUMPS: false,
  RABIES: false,
  FEVER: false,
  "COMMON COLD": false,
  "FLU (INFLUENZA)": false,
  "ALLERGIC RHINITIS": false,
  "ACUTE BRONCHITIS": false,
};

export const getTimeFromCalender = (num) => {
  switch (num) {
    case 0:
      return "9:00 AM to 9.30 AM";
    case 1:
      return "9:30 AM to 10.00 AM";
    case 2:
      return "10:00 AM to 10.30 AM";
    case 3:
      return "10:30 AM to 11.00 AM";
    case 4:
      return "11:00 AM to 11.30 AM";
    case 5:
      return "11:30 AM to 12.00 PM";
    case 6:
      return "12:00 PM to 12.30 PM";
    case 7:
      return "12:30 PM to 1.00 PM";
    case 8:
      return "1:00 PM to 1.30 PM";
    case 9:
      return "1:30 PM to 2.00 PM";
    case 10:
      return "2:00 PM to 2.30 PM";
    case 11:
      return "2:30 PM to 3.00 PM";
    case 12:
      return "3:00 PM to 3.30 PM";
    case 13:
      return "3:30 PM to 4.00 PM";
    case 14:
      return "4:00 PM to 4.30 PM";
    case 15:
      return "4:30 PM to 5.00 PM";
    case 16:
      return "5:00 PM to 5.30 PM";
    case 17:
      return "5:30 PM to 6.00 PM";
    case 18:
      return "6:00 PM to 6.30 PM";
    case 19:
      return "6:30 PM to 7.00 PM";
    case 20:
      return "7:00 PM to 7.30 PM";
    case 21:
      return "7:30 PM to 8.00 PM";
    case 22:
      return "8:00 PM to 8.30 PM";
    case 23:
      return "8:30 PM to 9.00 PM";
    default:
      return "NONE";
  }
};
