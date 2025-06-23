
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyQTC9BMD90v8EOS5ZJOOzLArqifp85Qk",
  authDomain: "cytra-a9b1d.firebaseapp.com",
  projectId: "cytra-a9b1d",
  storageBucket: "cytra-a9b1d.appspot.com",
  messagingSenderId: "60383087529",
  appId: "1:60383087529:web:4c4c792eba06a10f4412b8",
  measurementId: "G-LGJ250744Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDisplay = document.getElementById("loginError");

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    errorDisplay.textContent = error.message;
  }
});

onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("loginScreen").style.display = "none";
    document.querySelector("main").style.display = "block";
    document.querySelector("footer").style.display = "block";
  } else {
    document.getElementById("loginScreen").style.display = "block";
    document.querySelector("main").style.display = "none";
    document.querySelector("footer").style.display = "none";
  }
});

const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const downloadBtn = document.getElementById('downloadBtn');

images.forEach(img => {
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  img.parentNode.insertBefore(wrapper, img);
  wrapper.appendChild(img);

  const btn = document.createElement("a");
  btn.className = "download-btn";
  btn.textContent = "⬇️";
  btn.href = img.src;
  btn.download = "";
  wrapper.appendChild(btn);

  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    downloadBtn.href = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  }
});

// Clock + calendar
function updateClock() {
  const now = new Date();
  const clock = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  document.getElementById("clock").textContent = `Time: ${clock}`;
  document.getElementById("calendar").textContent = `Date: ${date}`;
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeModalBtn");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

const phonkTracks = ['phonk1.mp3', 'phonk2.mp3', 'phonk3.mp3'];
const bgAudio = document.getElementById("bgAudio");

function playRandomPhonk() {
  const randomTrack = phonkTracks[Math.floor(Math.random() * phonkTracks.length)];
  bgAudio.src = "audio/" + randomTrack;
  bgAudio.play().catch(() => {
    // Autoplay blocked, wait for interaction
    document.body.addEventListener('click', () => {
      bgAudio.play();
    }, { once: true });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.getElementById("closeModalBtn");
  modalBtn.addEventListener("click", playRandomPhonk);
});

const toggleBtn = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
