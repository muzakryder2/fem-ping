const inputEl = document.getElementById('email')
const errorMsg = document.getElementById('error-msg')
const button = document.getElementById('submit')

function checkInput() {
  reset()

  if (inputEl.value === '') {
    inputEl.classList.replace('ring-secondary-blue', 'ring-secondary-red')
    errorMsg.classList.remove('hidden')
    return
  }

  const isValid = inputEl.reportValidity()

  if (!isValid) {
    inputEl.classList.replace('ring-secondary-blue', 'ring-secondary-red')
    errorMsg.classList.remove('hidden')
  }
}

function reset() {
  inputEl.classList.replace('ring-secondary-red', 'ring-secondary-blue')
  errorMsg.classList.add('hidden')
}

button.addEventListener('click', checkInput)
