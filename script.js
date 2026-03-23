  const text = "Every line is meant to be read gently, as these words carry something meaningful that the writer chose to express through poetry instead of voice.";
  const el   = document.getElementById("typing");
  let i = 0, deleting = false;

  function loop() {
    el.textContent = deleting ? text.slice(0, i--) : text.slice(0, i++);
    if (!deleting && i > text.length)  { deleting = true;  setTimeout(loop, 1200); return; }
    if (deleting  && i === 0)          { deleting = false; }
    setTimeout(loop, deleting ? 35 : 60);
  }
  loop();

  /* ── Music player ── */
  const audio   = document.getElementById("audio");
  const playBtn = document.getElementById("playpause");
  const progress = document.getElementById("progress");
  const vinyl   = document.querySelector(".vinyl");

  playBtn.onclick = () => {
    if (audio.paused) { audio.play();  playBtn.textContent = "❚❚"; }
    else              { audio.pause(); playBtn.textContent = "▶";  }
  };

  audio.addEventListener("timeupdate", () => {
    progress.style.width = (audio.currentTime / audio.duration * 100) + "%";
  });
  audio.addEventListener("play",  () => vinyl.style.animationPlayState = "running");
  audio.addEventListener("pause", () => vinyl.style.animationPlayState = "paused");
  audio.addEventListener("ended", () => vinyl.style.animationPlayState = "paused");
