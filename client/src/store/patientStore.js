//initialise zustand
import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import constants from "../constants/constants";

const useStore = create(
  persist(
    (set) => ({
      patient: null,
      sessions: [],
      labTests: [],
      particularSession: null,
      login: (email, otp) => {
        axios.post("/api/patient/login", { email, otp }).then((res) => {
          localStorage.setItem("auth-token", res.data.token);
          set({ patient: res.data.data });
        });
      },
      register: (name, email, address, age, gender, otp) => {
        axios
          .post("/api/patient/login", {
            name,
            email,
            address,
            age,
            gender,
            otp,
          })
          .then((res) => {
            set({ patient: res.data.data });
            localStorage.setItem("auth-token", res.data.token);
          });
      },
      getOtp: async (email) => {
        let flag = 0;
        await axios.post("/api/patient/sendloginotp", { email }).then((res) => {
          flag = res.data.data;
        });

        return flag;
      },
      createSession: (description, disease, category, date, time) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios
          .post(
            "/api/session/create",
            { description, disease, category, date, time },
            config
          )
          .then((res) => {
            set((state) => ({ sessions: [...state.sessions, res.data.data] }));
          });
      },
      getParticularSession: (session_id) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        const x = "/api/session/" + session_id;
        axios.get(x, config).then((res) => {
          console.log("patientstore check", res.data.data);
          set((state) => ({
            particularSession: res.data.data,
          }));
        });
      },
      logout: () => {
        set({ patient: null });
        localStorage.setItem("auth-token", null);
      },
      getPatientSessions: (patient_id) => {
        const url = "/api/session/patient/" + patient_id;
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get(url, config).then((res) => {
          // console.log("here is x", res.data.data);
          set((state) => ({ sessions: res.data.data }));
        });
      },
      performLabTest: (patient_id, name, fileUrl) => {
        console.log("CHEK AT STORE", patient_id, name, fileUrl);
        const String = "/api/session/labtest/perform";
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios
          .post(String, { patient_id, name, fileUrl }, config)
          .then((res) => {});
      },
      getLabTests: (patient_id) => {
        console.log("CHEK AT STORE", patient_id);
        const String = "/api/session/labtests/get";
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.post(String, { patient_id }, config).then((res) => {});
      },
    }),
    {
      name: "patient-storage",
    }
  )
);

export const usePatientStore = useStore;
