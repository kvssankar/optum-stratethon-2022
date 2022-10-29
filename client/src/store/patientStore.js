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
          });
      },
      logout: () => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        set({ patient: null });
      },
      getPatientSessions: (patient_id) => {
        const String = "/api/session/patient/getSessions";
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.post(String, { patient_id }, config).then((res) => {
          set((state) => ({ sessions: [res.data.data] }));
        });
      },
    }),
    {
      name: "patient-storage",
    }
  )
);

export const usePatientStore = useStore;
