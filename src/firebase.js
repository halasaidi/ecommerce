// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7-SEa5ALaf8D7lRTGJzY9ERvPlji0pIc",
  authDomain: "shopper-7aeee.firebaseapp.com",
  projectId: "shopper-7aeee",
  storageBucket: "shopper-7aeee.appspot.com",
  messagingSenderId: "9941573245",
  appId: "1:9941573245:web:5da2885676d44bc4ecdb14",
  measurementId: "G-VXXRFVCLZ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const handleSignup = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Get the currently authenticated user
const getAuthUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export { auth, handleSignup, handleLogin, handleLogout, getAuthUser };
