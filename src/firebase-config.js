import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhTf-Ct1eV2AW_n6rzkXwctej0cTIVITA",
  authDomain: "login-page-3cca4.firebaseapp.com",
  projectId: "login-page-3cca4",
  storageBucket: "login-page-3cca4.appspot.com",
  messagingSenderId: "3020825451",
  appId: "1:3020825451:web:04a79fee64acf3c9afe22e",
  measurementId: "G-GKLPCFZKPJ",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
