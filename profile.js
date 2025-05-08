function toggleEditMode() {
  const inputs = document.querySelectorAll('.profile-form input');
  const saveBtn = document.querySelector('.save-btn');
  const editBtn = document.querySelector('.edit-btn');

  inputs.forEach(input => input.disabled = !input.disabled);
  saveBtn.classList.toggle('hidden');
  editBtn.classList.toggle('hidden');
}

function saveChanges() {
  alert('Өзгерістер сақталды!');
  toggleEditMode();
}

function updateAvatar(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('avatarImage').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
