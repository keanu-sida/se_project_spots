let initialCards = [
  {
    name: "Amsterdam, Netherlands",
    link: "https://unsplash.com/photos/canal-surrounded-by-buildings-hh2FXs9CgZA",
  },
  {
    name: "Côte d’Azur, France",
    link: "https://unsplash.com/photos/a-yellow-umbrella-sitting-on-top-of-a-sandy-beach-ilktO7vxirA",
  },
  {
    name: "Santorini, Greece",
    link: "https://unsplash.com/photos/a-vertical-high-angle-shot-of-the-white-buildings-in-santorini-greece-B52vbSTtK_A",
  },
  {
    name: "Vernazza, Italy",
    link: "https://unsplash.com/photos/an-aerial-view-of-a-village-on-a-cliff-edVQtVjyjRA",
  },
  {
    name: "Hvar, Croatia",
    link: "https://unsplash.com/photos/white-boats-near-the-port-at-daytime-4OtdDwqrlIA",
  },
  {
    name: "Mallorca, Spain",
    link: "https://unsplash.com/photos/red-flowers-on-the-street-UEa6SeTNKvM",
  },
];

// Selectors
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const editProfileModalButton = document.querySelector(".profile__edit-button");
const newPostModalButton = document.querySelector(".profile__post-button");
const editProfileModalCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const newPostModalCloseButton = newPostModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = document.querySelector("#profile-form");
const newPostForm = document.querySelector("#post-form");
const profileNameInput = editProfileModal.querySelector("#profile-title");
const profileDescriptionInput =
  editProfileModal.querySelector("#profile-subtitle");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const imageLinkInput = newPostModal.querySelector("#image-link");
const imageDescriptionInput = newPostModal.querySelector("#image-description");

// Event listeners
editProfileModalButton.addEventListener("click", () => {
  fillProfileForm();
  handleOpenModal(editProfileModal);
});

editProfileModalCloseButton.addEventListener("click", () => {
  handleCloseModal(editProfileModal);
});

editProfileForm.addEventListener("submit", (evt) => {
  handleSubmitProfileForm(evt);
});

newPostModalButton.addEventListener("click", () => {
  handleOpenModal(newPostModal);
});

newPostModalCloseButton.addEventListener("click", () => {
  handleCloseModal(newPostModal);
});

newPostForm.addEventListener("submit", (evt) => {
  handleSubmitNewPostForm(evt);
});

// Functions
function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenModal(modal) {
  modal.classList.add("modal_is-opened");
}

function handleCloseModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  handleCloseModal(editProfileModal);
}

function handleSubmitNewPostForm(evt) {
  evt.preventDefault();
  console.log(imageLinkInput.value);
  console.log(imageDescriptionInput.value);
  handleCloseModal(newPostModal);
}

initialCards.forEach((card) => {
  console.log(card.name);
});
