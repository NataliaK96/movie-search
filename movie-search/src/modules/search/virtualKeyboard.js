const keyboardIcon = document.querySelector('.keyboard-button');
keyboardIcon.onclick = () => {
  const keyboardContent = document.querySelector('.keyboard-content');
  let keyboardDisplay = keyboardContent.style.display;
  if (keyboardDisplay === 'initial') {
    keyboardDisplay = 'none';
  } else { keyboardDisplay = 'initial'; }
  keyboardContent.style.display = keyboardDisplay;
};
