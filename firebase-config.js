// ===========================================================
// PASTE YOUR OWN FIREBASE CONFIG HERE
// Get this from: Firebase Console > Project Settings > General
// > Your apps > Web app > SDK setup and configuration
// ===========================================================
const firebaseConfig = {
  apiKey: "AIzaSyApGcXM5w9j0jx5ZYNFrqbPDYu7tGcKCPs",
  authDomain: "wedding-game-tap.firebaseapp.com",
  databaseURL: "https://wedding-game-tap-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-game-tap",
  storageBucket: "wedding-game-tap.firebasestorage.app",
  messagingSenderId: "361247366339",
  appId: "1:361247366339:web:7ea17eb032ea113dcb5676",
  measurementId: "G-J30W1QZ5WE"
};

// Do not edit below this line
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
