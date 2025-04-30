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

editProfileModalButton.addEventListener("click", () => {
  fillProfileForm();
  handleOpenProfileModal(editProfileModal);
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
