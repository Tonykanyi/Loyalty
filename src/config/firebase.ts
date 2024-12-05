import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCI2YUKeSCWH9d_T2KlsNaqEJvFrJXS7ZM",
  authDomain: "loyalty-41556.firebaseapp.com",
  projectId: "loyalty-41556",
  storageBucket: "loyalty-41556.appspot.com",
  messagingSenderId: "777001576462",
  appId: "1:777001576462:web:1b0a53ea86aa867badb45f",
  measurementId: "G-V2P5M3FN18"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;