let more1 = document.querySelector('.more1');
let more2 = document.querySelector('.more2');
let audioArr = document.getElementsByTagName('audio');
let imgSelect = document.getElementsByTagName('img')

// Chancer
audioArr[0].volume = 0.5
more1.addEventListener('mouseenter', () => {
  audioArr[0].play()
});
more1.addEventListener('mouseleave', () => {
  audioArr[0].pause()
});

// Silhouette
audioArr[1].volume = 0.5
more2.addEventListener('mouseenter', () => {
  audioArr[1].play()
});
more2.addEventListener('mouseleave', () => {
  audioArr[1].pause()
});

// Currently Playing Image
more1.addEventListener('mouseenter', () => {
  imgSelect[1].src = 'files/chancer.gif';
  imgSelect[1].style.visibility = 'visible';
  imgSelect[0].src = 'files/Record.gif';
});
more1.addEventListener('mouseout', () => {
  imgSelect[1].style.visibility = 'hidden';
  imgSelect[0].src = 'files/Green.png';
});
more2.addEventListener('mouseenter', () => {
  imgSelect[1].src = 'files/elusin.gif';
  imgSelect[1].style.visibility = 'visible';
  imgSelect[0].src = 'files/Record.gif';
});
more2.addEventListener('mouseout', () => {
  imgSelect[1].style.visibility = 'hidden';
  imgSelect[0].src = 'files/Green.png';
});
