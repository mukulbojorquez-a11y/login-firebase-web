// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjx_8DrjplXdnngg6H8yV5rhDdk0UNMMQ",
  authDomain: "login-web-896cb.firebaseapp.com",
  projectId: "login-web-896cb",
  storageBucket: "login-web-896cb.firebasestorage.app",
  messagingSenderId: "779266128198",
  appId: "1:779266128198:web:c1c063f11d49c9b92fcd47",
  measurementId: "G-TTRM60X141"
};

// Inicializar Firebase solo una vez
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Evento del formulario de login
const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "home.html";
      })
      .catch(err => {
        let mensaje = "";

        switch (err.code) {
          case "auth/invalid-email":
            mensaje = "El correo no es válido.";
            break;
          case "auth/user-not-found":
            mensaje = "El usuario no existe.";
            break;
          case "auth/wrong-password":
            mensaje = "La contraseña es incorrecta.";
            break;
          default:
            mensaje = "Correo o contraseña incorrectos.";
        }

        document.getElementById("mensaje").innerText = mensaje;
      });
  });
}

