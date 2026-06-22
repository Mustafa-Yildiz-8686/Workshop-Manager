import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtfqbdyZkSC8XrAR4JabrXymMha7QZtuA",
  authDomain: "workshop-manager-b1e10.firebaseapp.com",
  databaseURL: "https://workshop-manager-b1e10-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "workshop-manager-b1e10",
  storageBucket: "workshop-manager-b1e10.firebasestorage.app",
  messagingSenderId: "202799264327",
  appId: "1:202799264327:web:ced440ded2b6270e75f762"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
