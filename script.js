const leftEye = document.querySelector('.left-eye .pupil');
const rightEye = document.querySelector('.right-eye .pupil');
const face = document.querySelector('.face');
const mouthImg = document.getElementById('mouth-img');
const contract = document.getElementById('contract-address');

const mouthNeutralSrc = 'mouth-neutral.png';
const mouthHappySrc = 'mouth-happy.png';

// Track mouse position and move pupils
document.addEventListener('mousemove', (e) => {
  const rect = face.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Calculate relative mouse position
  let dx = e.clientX - centerX;
  let dy = e.clientY - centerY;

  // Limit pupil movement within 8px radius
  const maxDistance = 8;
  const distance = Math.min(Math.sqrt(dx * dx + dy * dy), maxDistance);
  const angle = Math.atan2(dy, dx);

  const pupilX = Math.cos(angle) * distance;
  const pupilY = Math.sin(angle) * distance;

  leftEye.style.left = 10 + pupilX + 'px';
  leftEye.style.top = 10 + pupilY + 'px';
  rightEye.style.left = 10 + pupilX + 'px';
  rightEye.style.top = 10 + pupilY + 'px';

  // Change mouth if mouse near contract address
  const contractRect = contract.getBoundingClientRect();
  const distToContract = Math.sqrt(
    (e.clientX - (contractRect.left + contractRect.width / 2)) ** 2 +
    (e.clientY - (contractRect.top + contractRect.height / 2)) ** 2
  );

  if (distToContract < 100) {
    mouthImg.src = mouthHappySrc;
  } else {
    mouthImg.src = mouthNeutralSrc;
  }
});
