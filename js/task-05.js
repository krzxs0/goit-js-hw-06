const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');
function updateName() {
    const name = nameInput.value.trim();
        nameOutput.textContent = name === '' ? "Anonymous" : name;
}
nameInput.addEventListener('input', updateName);
updateName()