// ===============================
// Justify - Auth Logic (FINAL FIX)
// ===============================

// Firebase instances
import { auth, db } from "./firebase.js";

// Auth SDK
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firestore SDK
import {
  doc,
  getDoc
} from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ===============================
// ROUTE USER
// ===============================
async function routeUser(user) {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (snap.exists() && snap.data().profileCompleted === true) {
    window.location.href = "./dashboard.html";
  } else {
    window.location.href = "./profile.html";
  }
}

// ===============================
// EMAIL LOGIN
// ===============================
window.loginEmail = async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    await routeUser(result.user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// ===============================
// GOOGLE LOGIN
// ===============================
window.googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    const result = await signInWithPopup(auth, provider);
    await routeUser(result.user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};