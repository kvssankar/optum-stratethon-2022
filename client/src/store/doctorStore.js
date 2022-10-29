import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useStore = create(
  persist(
    (set) => ({
      doctor: null,
      doctorSessions: [],
      login: (email, otp) => {
        axios.post("/api/doctor/login", { email, otp }).then((res) => {
          set({ doctor: res.data.data });
        });
      },
      register: (name, email, address, age, gender, otp, category) => {
        axios
          .post("/api/doctor/login", {
            name,
            email,
            address,
            age,
            gender,
            otp,
            category,
          })
          .then((res) => {
            set({ doctor: res.data.data });
            localStorage.setItem("auth-token-doctor", res.data.token);
          });
      },
      getOtp: async (email) => {
        console.log(email);
        let flag = 0;
        await axios.post("/api/doctor/sendloginotp", { email }).then((res) => {
          flag = res.data.data;
        });

        return flag;
      },
      getDoctorSessions: (doctor_id) => {
        const String = "/api/session/doctor/getSessions";
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token-doctor"),
          },
        };
        axios.post(String, { doctor_id }, config).then((res) => {
          set((state) => ({ doctorSessions: [res.data.data] }));
        });
      },
      createRecord: (patient_id, description, doctor_id) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios
          .post(
            "/api/record/create",
            { patient_id, description, doctor_id },
            config
          )
          .then((res) => {
            console.log("record created");
          });
      },
      logout: () => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token-doctor"),
          },
        };
        set({ doctor: null });
        localStorage.setItem("auth-token-doctor", null);
      },
    }),
    {
      name: "doctor-storage",
    }
  )
);

export const useDoctorStore = useStore;
