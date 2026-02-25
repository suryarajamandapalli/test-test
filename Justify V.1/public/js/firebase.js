// ===============================
// Justify - Firebase Init (FINAL)
// ===============================

import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 REPLACE with your real config
const firebaseConfig = {
  apiKey: "AIzaSyB0LmrfRkxMIq4xVkCFG7ph32TTNrNNQh8",
  authDomain: "legal-intelligence-engine.firebaseapp.com",
  projectId: "legal-intelligence-engine",
  storageBucket: "legal-intelligence-engine.firebasestorage.app",
  messagingSenderId: "497011952858",
  appId: "1:497011952858:web:bec752f70f8c1a4dd469e3",
  measurementId: "G-H0BT8BYHZY"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Auth & DB bound to SAME app
export const auth = getAuth(app);
export const db = getFirestore(app);