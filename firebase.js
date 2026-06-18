import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9LVJE8LTAb7ZOM8zuZ0ui5qToNJViMVo",
  authDomain: "gaura-housechat.firebaseapp.com",
  databaseURL: "https://gaura-housechat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gaura-housechat",
  storageBucket: "gaura-housechat.firebasestorage.app",
  messagingSenderId: "741845428146",
  appId: "1:741845428146:web:35a0afe0b0050b9772e6ab"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };