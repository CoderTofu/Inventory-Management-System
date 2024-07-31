import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9_biOgW3ze-Mb_Wud8PjtxFiaSHt1ZmI",
  authDomain: "inventory-management-d7a1d.firebaseapp.com",
  projectId: "inventory-management-d7a1d",
  storageBucket: "inventory-management-d7a1d.appspot.com",
  messagingSenderId: "293047449655",
  appId: "1:293047449655:web:9b00d22da47291c14827b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
