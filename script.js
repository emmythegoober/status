const dialog = document.getElementById("test");
const showButton = document.getElementById("actionButton");
const closeButton = document.getElementById("closeDialogButton");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
