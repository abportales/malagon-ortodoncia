import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA78JXEdP_8TTe8FCjx0LMXzAMSpFcP97E",
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: "malagon-ortodoncia.appspot.com",
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
const dbStorage = getStorage(app);

export default dbStorage;