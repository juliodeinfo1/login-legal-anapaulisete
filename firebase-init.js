
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCP3KWUodUNeCU5SVeSz4sSxXRrYEzcGUE",
  authDomain: "carlos-6a7f5.firebaseapp.com",
  projectId: "carlos-6a7f5",
  storageBucket: "carlos-6a7f5.firebasestorage.app",
  messagingSenderId: "461879435011",
  appId: "1:461879435011:web:0e24ae33b2be0f1b81d336",
  measurementId: "G-DC5GY3H1HD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig); 
  