import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyApBrNdmU087U1Bfpv_2Yfq8oTmMALaeNc",
  authDomain: "pfa2022-15e05.firebaseapp.com",
  projectId: "pfa2022-15e05",
  storageBucket: "pfa2022-15e05.appspot.com",
  messagingSenderId: "147615495365",
  appId: "1:147615495365:web:237a9c863fc9255439ecac",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { auth, db };
