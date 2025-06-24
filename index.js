
const images = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg", "Images/5.jpg", "Images/7.jpg", "Images/9.jpg"];
const captions = [
"Sunset serenity.",
"Captured in the moment.",
"Golden hour vibes.",
"Nature"s calm.",
"City lights, quiet nights.",
"Memories in pixels.",
"Frames of feeling."
];
let index = 0;
let captionInterval;
const phonkTracks = ["phonk1.mp3", "phonk2.mp3", "phonk3.mp3"];

function updateImage() {
  const img = document.getElementById("main-image");
  const caption = document.getElementById("caption");
  img.src = images[index];
  document.getElementById("download").href = images[index];
  updateCaption();
}

function nextImage() {
  index = (index + 1) % images.length;
  updateImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  updateImage();
}

function addThumbnails() {
  const container = document.getElementById("thumbnails");
  images.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.className = "thumbnail";
    thumb.onclick = () => { index = i; updateImage(); };
    container.appendChild(thumb);
    });
  }
  
  function updateTime() {
    const now = new Date();
    const dateStr = now.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    const timeStr = now.toLocaleTimeString();
    document.getElementById("date-time").textContent = `${dateStr} — ${timeStr}`;
  }
  setInterval(updateTime, 1000);
  updateTime();
  
  function changeTheme() {
    const theme = document.getElementById("theme-select").value;
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg", "#111");
      root.style.setProperty("--text", "#eee");
      } else if (theme === "yellow") {
        root.style.setProperty("--bg", "#fff8dc");
        root.style.setProperty("--text", "#222");
        } else if (theme === "blue") {
          root.style.setProperty("--bg", "#d0eaff");
          root.style.setProperty("--text", "#003366");
          } else {
            root.style.setProperty("--bg", "#fff");
            root.style.setProperty("--text", "#000");
          }
        }
        
        function addReaction(el) {
          alert("Thanks for your reaction!");
        }
        
        function acceptAge() {
          document.getElementById("age-modal").classList.add("hidden");
          document.body.classList.remove("hidden");
          addThumbnails();
          updateImage();
          playRandomPhonk();
          captionInterval = setInterval(updateCaption, 30000);
        }
        
        function playRandomPhonk() {
          const audio = document.getElementById("background-audio");
          const source = document.getElementById("audio-source");
          const track = phonkTracks[Math.floor(Math.random() * phonkTracks.length)];
          source.src = track;
          audio.load();
          audio.play();
        }
        
        function updateCaption() {
          const caption = document.getElementById("caption");
          caption.textContent = captions[Math.floor(Math.random() * captions.length)];
        }
        
        document.addEventListener("keydown", e => {
          if (e.key === "ArrowRight") nextImage();
          if (e.key === "ArrowLeft") prevImage();
          });