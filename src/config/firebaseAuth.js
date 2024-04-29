import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBIpfS0VpL2qyaLKx0JvjbelVLSRn_vJ2U",
  authDomain: "contact-list-app-fc733.firebaseapp.com",
  databaseURL: "https://contact-list-app-fc733-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-list-app-fc733",
  storageBucket: "contact-list-app-fc733.appspot.com",
  messagingSenderId: "993645271568",
  appId: "1:993645271568:web:52a444ee9545d1cbf90895",
  measurementId: "G-HFNX7VTGZW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth

