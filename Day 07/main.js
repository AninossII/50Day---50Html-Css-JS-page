const hoverRight = document.querySelector('.right');
const hoverLeft = document.querySelector('.left');
const container = document.querySelector('.container');

hoverLeft.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
hoverLeft.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

hoverRight.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
hoverRight.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
