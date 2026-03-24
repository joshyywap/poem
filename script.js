/* ── Poem editor ── */
const defaultPoem =
  `I fell in love in the quiet moments,
in the way you laugh at my jokes,
in the way you say my name
like it means something special.

You are my best friend,
the one who knows my stories,
my fears, my broken parts—
and that's what makes this harder.

Because loving you isn't simple.
It's not just wanting your hand,
it's being afraid to lose it forever.

So I hide my feelings
behind smiles and teasing,
pretending my heart doesn't race
whenever you're near.

I laugh with you, support you,
and stand beside you— all 
while my heart quietly whispers your name.

I don't confess,
not because I don't feel enough,
but because I feel too much.
Because losing you
would hurt more than loving you in silence.

So I choose to love you quietly,
to care without asking for more,
hoping one day you might see
what my heart has been hiding all along.`;

const poemDisplay = document.getElementById("poemDisplay");
const poemEditor = document.getElementById("poemEditor");

function renderPoem(val) {
  poemDisplay.textContent = val;
}

// seed both on load
poemEditor.value = defaultPoem;
renderPoem(defaultPoem);

// live update on every keystroke
poemEditor.addEventListener("input", () => {
  renderPoem(poemEditor.value);
});
// Toggle editor on button click
const editBtn = document.getElementById("editPoemBtn");
const editorSection = document.getElementById("editorSection");

editBtn.addEventListener("click", () => {
  const isHidden = editorSection.classList.contains("hidden");
  editorSection.classList.toggle("hidden");
  editBtn.textContent = isHidden ? "Close Editor" : "Edit your own Poem?";
});


const text = "Every line is meant to be read gently, as these words carry something meaningful that the writer chose to express through poetry instead of voice.";
const el = document.getElementById("typing");
let i = 0, deleting = false;

function loop() {
  el.textContent = deleting ? text.slice(0, i--) : text.slice(0, i++);
  if (!deleting && i > text.length) { deleting = true; setTimeout(loop, 1200); return; }
  if (deleting && i === 0) { deleting = false; }
  setTimeout(loop, deleting ? 35 : 60);
}
loop();

/* ── Music player ── */
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playpause");
const progress = document.getElementById("progress");
const vinyl = document.querySelector(".vinyl");

playBtn.onclick = () => {
  if (audio.paused) { audio.play(); playBtn.textContent = "❚❚"; }
  else { audio.pause(); playBtn.textContent = "►"; }
};

audio.addEventListener("timeupdate", () => {
  progress.style.width = (audio.currentTime / audio.duration * 100) + "%";
});
audio.addEventListener("play", () => vinyl.style.animationPlayState = "running");
audio.addEventListener("pause", () => vinyl.style.animationPlayState = "paused");
audio.addEventListener("ended", () => vinyl.style.animationPlayState = "paused");
