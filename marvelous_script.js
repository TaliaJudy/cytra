document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  // Fade-in animation
  images.forEach(img => {
    img.style.opacity = 0;
    img.onload = () => {
      img.style.transition = "opacity 1s";
      img.style.opacity = 1;
    };

    // Click to enlarge (lightbox)
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = 1000;

      const enlarged = document.createElement("img");
      enlarged.src = img.src;
      enlarged.style.maxWidth = "90%";
      enlarged.style.maxHeight = "90%";
      enlarged.style.boxShadow = "0 0 20px white";

      overlay.appendChild(enlarged);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => document.body.removeChild(overlay));
    });
  });

  // Styled welcome alert
  const alertBox = document.createElement("div");
  alertBox.textContent = "Thank you for visiting my pics!";
  alertBox.style.position = "fixed";
  alertBox.style.top = "20px";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.backgroundColor = "#333";
  alertBox.style.color = "white";
  alertBox.style.padding = "15px 30px";
  alertBox.style.borderRadius = "8px";
  alertBox.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  alertBox.style.fontSize = "18px";
  alertBox.style.zIndex = "1001";
  alertBox.style.opacity = "0";
  alertBox.style.transition = "opacity 1s ease";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.style.opacity = "1";
  }, 500);

  setTimeout(() => {
    alertBox.style.opacity = "0";
    setTimeout(() => alertBox.remove(), 1000);
  }, 3500);

  // Show date, time, and day
  const footer = document.createElement("div");
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const formatted = now.toLocaleTimeString() + " on " + days[now.getDay()] + ", " + now.toLocaleDateString();

  footer.textContent = "Current time: " + formatted;
  footer.style.marginTop = "40px";
  footer.style.fontSize = "16px";
  footer.style.color = "#fff";
  footer.style.background = "rgba(0,0,0,0.6)";
  footer.style.padding = "10px 20px";
  footer.style.borderRadius = "10px";
  footer.style.display = "inline-block";
  footer.style.boxShadow = "0 0 8px rgba(255,255,255,0.2)";
  footer.style.textAlign = "center";

  const wrapper = document.createElement("div");
  wrapper.style.textAlign = "center";
  wrapper.appendChild(footer);
  document.body.appendChild(wrapper);

  // Captions that rotate every 20 seconds
  const captions = [
    "The journey begins 🌄",
    "Moments captured forever 📸",
    "A smile in every frame 😊",
    "Beauty in simplicity 🌼",
    "Wander and wonder 🗺️",
    "Stillness speaks 🎑",
    "Unforgettable memories 💫",
    "Nature's charm 🌿",
    "Snapshots of joy 🥰",
    "Timeless treasures ⏳"
  ];

  const imgs = document.querySelectorAll(".gallery img");
  imgs.forEach((img, idx) => {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.overflow = "hidden";

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = captions[idx % captions.length];
    caption.style.position = "absolute";
    caption.style.bottom = "0";
    caption.style.left = "0";
    caption.style.width = "100%";
    caption.style.background = "rgba(0,0,0,0.5)";
    caption.style.color = "#fff";
    caption.style.padding = "8px 12px";
    caption.style.textAlign = "center";
    caption.style.fontSize = "14px";
    caption.style.transition = "opacity 0.5s ease";

    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.appendChild(caption);

    // Rotate captions
    let i = idx;
    setInterval(() => {
      i++;
      caption.textContent = captions[i % captions.length];
    }, 20000);
  });
});
