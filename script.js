const fotos = [
  {
    imagem: "assets/fotos/foto1.jpg",
    textoAlternativo: "Bianca e Chelton em um momento especial",
    mensagem: "Você transforma qualquer instante em lembrança bonita."
  },
  {
    imagem: "assets/fotos/foto2.jpg",
    textoAlternativo: "Sorriso de Bianca",
    mensagem: "Teu sorriso é o lugar onde meu dia descansa."
  },
  {
    imagem: "assets/fotos/foto3.jpg",
    textoAlternativo: "Recordação romântica do casal",
    mensagem: "Com você, até o simples fica inesquecível."
  },
  {
    imagem: "assets/fotos/foto4.jpg",
    textoAlternativo: "Bianca e Chelton juntos",
    mensagem: "Meu carinho por você cabe em todos os nossos detalhes."
  },
  {
    imagem: "assets/fotos/foto5.jpg",
    textoAlternativo: "Momento feliz de Bianca e Chelton",
    mensagem: "Eu escolheria você em todas as versões da vida."
  },
  {
    imagem: "assets/fotos/foto6.jpg",
    textoAlternativo: "Lembrança afetiva do casal",
    mensagem: "Que a gente nunca perca essa vontade bonita de ficar."
  }
];

const envelopeScreen = document.querySelector("#envelopeScreen");
const letterScreen = document.querySelector("#letterScreen");
const openLetter = document.querySelector("#openLetter");
const backToEnvelope = document.querySelector("#backToEnvelope");
const gallery = document.querySelector("#photoGallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxMessage = document.querySelector("#lightboxMessage");
const closeLightbox = document.querySelector("#closeLightbox");
const musicToggle = document.querySelector("#musicToggle");
const backgroundMusic = document.querySelector("#backgroundMusic");

let lastFocusedElement = null;

function showEnvelope() {
  letterScreen.classList.remove("is-visible");
  envelopeScreen.classList.add("is-visible");
  openLetter.classList.remove("is-opening");
  openLetter.focus();
}

function showLetter() {
  openLetter.classList.add("is-opening");

  window.setTimeout(() => {
    envelopeScreen.classList.remove("is-visible");
    letterScreen.classList.add("is-visible");
    backToEnvelope.focus();
  }, 650);
}

function createPhotoCard(photo, index) {
  const button = document.createElement("button");
  const image = document.createElement("img");

  button.className = "photo-card";
  button.type = "button";
  button.dataset.label = `Foto ${index + 1}`;
  button.setAttribute("aria-label", `Abrir ${photo.textoAlternativo}`);

  image.src = photo.imagem;
  image.alt = photo.textoAlternativo;
  image.loading = "lazy";

  image.addEventListener("error", () => {
    image.hidden = true;
    button.classList.add("is-placeholder");
  });

  button.addEventListener("click", () => openLightbox(photo));
  button.append(image);

  return button;
}

function renderGallery() {
  const fragment = document.createDocumentFragment();

  fotos.forEach((photo, index) => {
    fragment.append(createPhotoCard(photo, index));
  });

  gallery.append(fragment);
}

function openLightbox(photo) {
  lastFocusedElement = document.activeElement;
  lightboxImage.classList.remove("is-placeholder");
  lightboxImage.src = photo.imagem;
  lightboxImage.alt = photo.textoAlternativo;
  lightboxMessage.textContent = photo.mensagem;
  lightbox.classList.add("is-visible");
  lightbox.setAttribute("aria-hidden", "false");
  closeLightbox.focus();
}

function hideLightbox() {
  lightbox.classList.remove("is-visible");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play()
      .then(() => {
        musicToggle.textContent = "Pausar música";
      })
      .catch(() => {
        musicToggle.textContent = "Música indisponível";
      });
    return;
  }

  backgroundMusic.pause();
  musicToggle.textContent = "Tocar música";
}

lightboxImage.addEventListener("error", () => {
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "Espaço reservado para a foto escolhida";
  lightboxImage.classList.add("is-placeholder");
});

openLetter.addEventListener("click", showLetter);
backToEnvelope.addEventListener("click", showEnvelope);
musicToggle.addEventListener("click", toggleMusic);
closeLightbox.addEventListener("click", hideLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-visible")) {
    hideLightbox();
  }
});

renderGallery();
