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

console.log("Script loaded");
console.log("Edit Profile Modal:", editProfileModal);
console.log("New Post Modal:", newPostModal);
console.log("Edit Button:", editProfileModalButton);
console.log("New Post Button:", newPostModalButton);
console.log("Edit Form:", editProfileForm);
console.log("New Post Form:", newPostForm);

// Add error checking
if (
  !editProfileModal ||
  !newPostModal ||
  !editProfileModalButton ||
  !newPostModalButton
) {
  console.error("Required modal elements not found");
}

if (!editProfileForm || !newPostForm) {
  console.error("Required form elements not found");
}

editProfileModalButton.addEventListener("click", () => {
  handleOpenProfileModal(editProfileModal);
});

editProfileModalCloseButton.addEventListener("click", () => {
  handleCloseModal(editProfileModal);
});

editProfileForm.addEventListener("submit", (evt) => {
  handleSubmitProfileForm(evt);
});

newPostModalButton.addEventListener("click", () => {
  handleOpenNewPostModal(newPostModal);
});

newPostModalCloseButton.addEventListener("click", () => {
  handleCloseModal(newPostModal);
});

newPostForm.addEventListener("submit", (evt) => {
  handleSubmitNewPostForm(evt);
});

function handleOpenProfileModal(modal) {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  modal.classList.add("modal_is-opened");
}

function handleOpenNewPostModal(modal) {
  imageLinkInput.value = "Paste a link to the picture";
  imageDescriptionInput.value = "Type your caption";
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
