const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentAcrive = 1;

//My Code
// next.addEventListener('click', () => {
//   if (currentAcrive === 3) {
//     next.disabled = true
//   } else {
//     prev.disabled = false
//   }
//   currentAcrive++
//   removeActiveClasses()
//   circles[currentAcrive - 1].classList.add('active')
// })

// prev.addEventListener('click', () => {
//   currentAcrive--
//   if (currentAcrive === 1) {
//     prev.disabled = true
//   } else {
//     next.disabled = false
//   }
//   removeActiveClasses()
//   circles[currentAcrive - 1].classList.add('active')
// })

// function removeActiveClasses() {
//   circles.forEach((circle) => {
//     circle.classList.remove('active')
//   })
// }

next.addEventListener('click', () => {
  currentAcrive++;
  if (currentAcrive > circles.length) 
    currentAcrive = circles.length;

  update();
});

prev.addEventListener('click', () => {
  currentAcrive--;
  if (currentAcrive < 1) 
    currentAcrive = 1;    
  
    update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentAcrive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if(currentAcrive === 1){
    prev.disabled = true;
  }else if (currentAcrive=== circles.length)
  {
    next.disabled= true;
  }else
  {
    next.disabled= false;
    prev.disabled = false;
  }
}
