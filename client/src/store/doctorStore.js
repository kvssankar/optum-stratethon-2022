//initialise zustand
import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useStore = create(
  persist(
    (set) => ({
      doctor: null,
      login: (email, otp) => {
        axios.post("/api/doctor/login", { email, otp }).then((res) => {
          set({ doctor: res.data });
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
            localStorage.setItem("auth-token", res.data.token);
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
      logout: () => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        set({ patient: null });
      },
    }),
    {
      name: "doctor-storage",
    }
  )
);

export const useDoctorStore = useStore;
