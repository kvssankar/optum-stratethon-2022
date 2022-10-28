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
      return "9:00 AM to 11:00 AM";
    case 1:
      return "12:00 AM to 2:00 PM";
    case 2:
      return "3:00 PM to 5:00 PM";
    case 3:
      return "6:00 PM to 8:00 PM";
    case 4:
      return "9:00 PM to 11:00 PM";
    case 5:
      return "12:00 PM to 6:00 AM";
    default:
      return "NONE";
  }
};
