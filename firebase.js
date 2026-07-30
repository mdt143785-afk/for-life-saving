import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDS4IxHkIZHoBI2NhX1-L-eSK2rX8LOjMU",
  authDomain: "for-life-saving-a5e6f.firebaseapp.com",
  projectId: "for-life-saving-a5e6f",
  storageBucket: "for-life-saving-a5e6f.firebasestorage.app",
  messagingSenderId: "479419647294",
  appId: "1:479419647294:web:7ce1c509881893c8cf186f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
