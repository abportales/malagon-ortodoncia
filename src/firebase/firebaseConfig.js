import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA78JXEdP_8TTe8FCjx0LMXzAMSpFcP97E",
  storageBucket: "malagon-ortodoncia.appspot.com",
};

const app = initializeApp(firebaseConfig);
const dbStorage = getStorage(app);

export default dbStorage;