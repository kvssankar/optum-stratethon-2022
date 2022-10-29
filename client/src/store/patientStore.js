//initialise zustand
import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useStore = create(
  persist(
    (set) => ({
      patient: null,
      sessions: [],
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
          })
          .catch((err) => {
            alert(err.response.data.msg);
          });
      },
      logout: () => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
<<<<<<< HEAD
        const x = "/api/session/" + session_id;
        axios.get(x, config).then((res) => {
          set((state) => ({
            particularSession: res.data.data,
          }));
        });
      },
      logout: () => {
        set({
          patient: null,
          sessions: [],
          labTests: [],
          particularSession: null,
        });
        localStorage.setItem("auth-token", null);
=======
        set({ patient: null });
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
      },
      getPatientSessions: (patient_id) => {
        const String = "/api/session/patient/getSessions";
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
<<<<<<< HEAD
        axios.get(url, config).then((res) => {
          set((state) => ({ sessions: res.data.data }));
        });
      },
      performLabTest: (patient_id, name, fileUrl) => {
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
        const String = "/api/session/labtests/get";
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.post(String, { patient_id }, config).then((res) => {});
      },
=======
        axios.post(String, { patient_id }, config).then((res) => {
          set((state) => ({ sessions: [res.data.data] }));
        });
      },
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
    }),
    {
      name: "patient-storage",
    }
  )
);

export const usePatientStore = useStore;
