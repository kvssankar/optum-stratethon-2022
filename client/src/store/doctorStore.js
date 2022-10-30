import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useStore = create(
  persist(
    (set) => ({
      doctor: null,
      doctorSessions: [],
      patient: null,
      particularRecords: null,
      login: (email, otp) => {
        axios.post("/api/doctor/login", { email, otp }).then((res) => {
          localStorage.setItem("auth-token", res.data.token);
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
            localStorage.setItem("auth-token", res.data.token);
          });
      },
      getOtp: async (email) => {
        let flag = 0;
        await axios.post("/api/doctor/sendloginotp", { email }).then((res) => {
          flag = res.data.data;
        });

        return flag;
      },
      logout: () => {
        set({ doctor: null });
        localStorage.setItem("auth-token", null);
      },
      getDoctorSessions: (doctor_id) => {
        const uri = "/api/session/doctor/" + doctor_id;
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get(uri, config).then((res) => {
          set((state) => ({ doctorSessions: res.data.data }));
        });
      },
      createRecord: (patient_id, session_id, doctor_id, description) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios
          .post(
            "/api/record/",
            {
              patient_id,
              session_id,
              description,
              doctor_id,
            },
            config
          )
          .then((res) => {});
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
      addFileToRecord: (rid, filename, filelocation) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios
          .post("/api/record/addfile", { rid, filename, filelocation }, config)
          .then((res) => {});
      },
      getPatient: (pid) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get("/api/doctor/patient/" + pid, config).then((res) => {
          set({ patient: res.data.data });
        });
      },
    }),
    {
      name: "doctor-storage",
    }
  )
);

export const useDoctorStore = useStore;
