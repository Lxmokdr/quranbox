import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaWAZuriv4TwJMjjZ0HEn7WTvtbEOakJs",
  authDomain: "random-403e6.firebaseapp.com",
  projectId: "random-403e6",
  storageBucket: "random-403e6.firebasestorage.app",
  messagingSenderId: "510841007755",
  appId: "1:510841007755:web:7f7dea8f34c726015dee8e",
  measurementId: "G-1JYNS6KJ2R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;