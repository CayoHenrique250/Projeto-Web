const dautchk = document.getElementById('dautchk');

document.addEventListener('DOMContentLoaded', () => {
  const isDautonicMode = localStorage.getItem('isDautonicMode') === 'true';
  setDautonicMode(isDautonicMode);

  const isBall2Checked = localStorage.getItem('isBall2Checked') === 'true';
  setBall2Checked(isBall2Checked);
});

dautchk.addEventListener('change', () => {
  const isDautonicMode = dautchk.checked;
  setDautonicMode(isDautonicMode);
  localStorage.setItem('isDautonicMode', isDautonicMode);
});

dautchk.addEventListener('change', () => {
  const isBall2Checked = dautchk.checked;
  setBall2Checked(isBall2Checked);
  localStorage.setItem('isBall2Checked', isBall2Checked);
});

function setDautonicMode(isDautonicMode) {
  if (isDautonicMode) {
    document.body.classList.add('dautonic');
  } else {
    document.body.classList.remove('dautonic');
  }
}

function setBall2Checked(isBall2Checked) {
  const ball2 = document.querySelector('.ball2');
  if (isBall2Checked) {
    ball2.style.transform = 'translateY(24px)';
  } else {
    ball2.style.transform = 'translateY(2px)';
  }
}