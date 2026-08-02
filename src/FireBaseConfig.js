
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQVbF-ndwjQflMgd0hN9XBnKIxRwzpDcQ",
  authDomain: "exclusive-e0b81.firebaseapp.com",
  projectId: "exclusive-e0b81",
  storageBucket: "exclusive-e0b81.firebasestorage.app",
  messagingSenderId: "130525591598",
  appId: "1:130525591598:web:05d64afbc7b29c693807bf",
  measurementId: "G-GFW5XQBP5H"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;