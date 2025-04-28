editProfileModal = document.querySelector("#edit-profile-modal");
newPostModal = document.querySelector("#new-post-modal");
editProfileModalButton = document.querySelector(".profile__edit-button");
newPostModalButton = document.querySelector(".profile__post-button");
editProfileModalCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
newPostModalCloseButton = newPostModal.querySelector(".modal__close-button");
editProfileForm = document.querySelector("#profile-form");
newPostForm = document.querySelector("#post-form");

console.log("Edit Modal Button:", editProfileModalButton);
console.log("New Post Modal Button:", newPostModalButton);
console.log("Edit Modal:", editProfileModal);
console.log("New Post Modal:", newPostModal);

editProfileModalButton.addEventListener("click", () => {
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

function handleOpenModal(modal) {
  modal.classList.add("modal_is-opened");
}

function handleCloseModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  let profileNameInput = editProfileModal.querySelector("#profile-title");
  let profileDescriptionInput =
    editProfileModal.querySelector("#profile-subtitle");
  let profileTitle = document.querySelector(".profile__title");
  let profileDescription = document.querySelector(".profile__subtitle");
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  handleCloseModal(editProfileModal);
}

function handleSubmitNewPostForm(evt) {
  evt.preventDefault();
  let imageLinkInput = newPostModal.querySelector("#image-link");
  let imageDescriptionInput = newPostModal.querySelector("#image-description");
  console.log(imageLinkInput.value);
  console.log(imageDescriptionInput.value);
  handleCloseModal(newPostModal);
}
