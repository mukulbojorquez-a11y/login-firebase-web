const firebaseConfig = {
  apiKey: "AIzaSyBjx_8DrjplXdnngg6H8yV5rhDdk0UNMMQ",
  authDomain: "login-web-896cb.firebaseapp.com",
  projectId: "login-web-896cb",
  storageBucket: "login-web-896cb.firebasestorage.app",
  messagingSenderId: "779266128198",
  appId: "1:779266128198:web:c1c063f11d49c9b92fcd47",
  measurementId: "G-TTRM60X141"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html";
  }
});

document.getElementById("cerrar").addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
});

