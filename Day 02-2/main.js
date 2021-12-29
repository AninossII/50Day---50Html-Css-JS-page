const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let activeNum = 1;

next.addEventListener('click', () => {
  activeNum++;
  if (activeNum > circles.length) {
    activeNum = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  activeNum--;
  if (activeNum > circles.length) {
    activeNum = circles.length;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < activeNum) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progress.style.width = ((activeNum - 1) / (circles.length - 1)) * 100 + '%';

  if (activeNum === 1) {
    prev.disabled = true;
  } else if (activeNum === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
