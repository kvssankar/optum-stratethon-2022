//initialise zustand
import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useStore = create(
  persist(
    (set) => ({
      doctor: null,
<<<<<<< HEAD
      doctorSessions: [],
      patient: null,
      particularRecords: null,
      login: (email, otp) => {
        axios.post("/api/doctor/login", { email, otp }).then((res) => {
          localStorage.setItem("auth-token", res.data.token);
          set({ doctor: res.data.data });
=======
      login: (email, otp) => {
        axios.post("/api/doctor/login", { email, otp }).then((res) => {
          set({ doctor: res.data });
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
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
<<<<<<< HEAD
      getDoctorSessions: (doctor_id) => {
        const String = "/api/session/doctor/" + doctor_id;
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get(String, config).then((res) => {
          set((state) => ({ doctorSessions: res.data.data }));
        });
      },
      createRecord: (
        patient_id,
        session_id,
        description,
        filename,
        filelocation,
        doctor_id
      ) => {
        console.log(
          patient_id,
          session_id,
          description,
          filename,
          filelocation,
          doctor_id
        );
=======
      logout: () => {
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
<<<<<<< HEAD
        axios
          .post(
            "/api/record/create",
            {
              patient_id,
              session_id,
              description,
              filename,
              filelocation,
              doctor_id,
            },
            config
          )
          .then((res) => {
            console.log(res.data);
            console.log("record created");
          });
      },
      getPatient: (pid) => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get("/api/doctor/patient/" + pid, config).then((res) => {
          console.log("HI", res.data);
          set({ patient: res.data.data });
        });
      },
      getRecordsBySessionId: (sid) => {
        const uri = "/api/record/get-sessions/" + sid;
        console.log("Getting sid here", uri);
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        axios.get(uri, config).then((res) => {
          // console.log("HI here in getrecordsbysessionid", res.data);
          set({ particularRecords: res.data });
        });
      },
      logout: () => {
        let config = {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        };
        set({ doctor: null });
        localStorage.setItem("auth-token", null);
=======
        set({ patient: null });
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
      },
    }),
    {
      name: "doctor-storage",
    }
  )
);

export const useDoctorStore = useStore;
