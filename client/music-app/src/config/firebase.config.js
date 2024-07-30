import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//   appId: process.env.REACT_APP_FIREBASE_APPI_ID,
// };
// console.log()
const firebaseConfig = {
  apiKey: "AIzaSyDYpJ4M-vEScOwyrSo0kx_jnDdcyT1NiaA",
  authDomain: "projectmusicapp-97a40.firebaseapp.com",
  projectId: "projectmusicapp-97a40",
  storageBucket: "projectmusicapp-97a40.appspot.com",
  messagingSenderId: "812118828739",
  appId: "1:812118828739:web:dfe8f20c3e7f39e2b7e476"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
// export {app};
