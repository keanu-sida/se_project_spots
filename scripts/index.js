editProfileModal = document.getElementById("edit-profile-modal");
newPostModal = document.getElementById("new-post-modal");
editProfileModalButton = document.querySelector(".profile__edit-button");
newPostModalButton = document.querySelector(".profile__post-button");
editProfileModalCloseButton = editProfileModal.querySelector(".modal__close-button");
newPostModalCloseButton = newPostModal.querySelector(".modal__close-button");

editProfileModalButton.addEventListener("click", () => {
  editProfileModal.classList.add("modal_is-opened");
});

newPostModalButton.addEventListener("click", () => {
  newPostModal.classList.add("modal_is-opened");
});

editProfileModalCloseButton.addEventListener("click", () => {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostModalCloseButton.addEventListener("click", () => {
    newPostModal.classList.remove("modal_is-opened");
});



