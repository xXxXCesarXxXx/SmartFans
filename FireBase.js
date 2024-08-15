import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqLFpoL1-4fQpnkoCfUi56yg4Ma60RQbI",
  authDomain: "smartfans-dd2c1.firebaseapp.com",
  projectId: "smartfans-dd2c1",
  storageBucket: "smartfans-dd2c1.appspot.com",
  messagingSenderId: "787894996354",
  appId: "1:787894996354:web:64804dc2c4d103991b139b",
};

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
