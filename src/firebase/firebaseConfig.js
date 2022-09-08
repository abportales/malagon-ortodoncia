import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA78JXEdP_8TTe8FCjx0LMXzAMSpFcP97E",
  authDomain: "malagon-ortodoncia.firebaseapp.com",
  projectId: "malagon-ortodoncia",
  storageBucket: "malagon-ortodoncia.appspot.com",
  messagingSenderId: "928287992500",
  appId: "1:928287992500:web:2d5f6c32d00cd99822c5e1",
  measurementId: "G-1C34NWN1FR"
};

const app = initializeApp(firebaseConfig);
const dbStorage = getStorage(app);
const analytics = getAnalytics(app);

export default dbStorage;