//initialise zustand
import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useStore = create(
  persist(
    (set) => ({
      patient: null,
      particularRecords: null,
      datewiseRecords: null,
      estimatedPrice: null,
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
      logout: () => {
        set({
          patient: null,
          sessions: [],
          labTests: [],
          particularSession: null,
        });
        localStorage.setItem("auth-token", null);
      },
      createSession: (description, disease, category, date, time) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios
          .post(
            "/api/session/",
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
      getParticularSession: (session_id) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        const x = "/api/session/" + session_id;
        axios.get(x, config).then((res) => {
          set((state) => ({
            particularSession: res.data.data,
          }));
        });
      },
      getPatientSessions: (patient_id) => {
        const url = "/api/session/patient/" + patient_id;
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get(url, config).then((res) => {
          set((state) => ({ sessions: res.data.data }));
        });
      },
      getRecordsBySessionId: (sid) => {
        const uri = "/api/record/session/" + sid;
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get(uri, config).then((res) => {
          set({ particularRecords: res.data });
        });
      },
      getDatewiseRecords: (session_id) => {
        const uri = "/api/record/datewise/" + session_id;
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get(uri, config).then((res) => {
          set({ datewiseRecords: res.data });
        });
      },
      geEstimatedPrice: (patient_id, condition, disease) => {
        const uri =
          process.env.REACT_APP_FAST_API_ENDPOINT +
          patient_id +
          "/" +
          condition +
          "/" +
          disease;
        axios.get(uri).then((res) => {
          set({ estimatedPrice: res.data });
        });
      },
      // performLabTest: (patient_id, name, fileUrl) => {
      //   const String = "/api/session/labtest/perform";
      //   let config = {
      //     headers: {
      //       "auth-token": localStorage.getItem("auth-token"),
      //     },
      //   };
      //   axios
      //     .post(String, { patient_id, name, fileUrl }, config)
      //     .then((res) => {});
      // },
      // getLabTests: (patient_id) => {
      //   const String = "/api/session/labtests/get";
      //   let config = {
      //     headers: {
      //       "auth-token": localStorage.getItem("auth-token"),
      //     },
      //   };
      //   axios.post(String, { patient_id }, config).then((res) => {});
      // },
    }),
    {
      name: "patient-storage",
    }
  )
);

export const usePatientStore = useStore;
