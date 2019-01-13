var box = document.querySelector('.user-center');
var title = document.querySelector('.user-center .title');
var panel = document.querySelector('.user-center .panel');

// function onTitleClick() {
//   if (panel.style.display == 'block') {
//     panel.style.display = 'none';
//     title.style.background = '#fff';
//   } else {
//     panel.style.display = 'block';
//     title.style.background = '#eee';
//   }
// }

title.addEventListener('click', function() {
  if (panel.style.display == 'block') {
    panel.style.display = 'none';
    title.style.background = '#fff';
  } else {
    panel.style.display = 'block';
    title.style.background = '#eee';
  }
});

// title.addEventListener('click', function() {
//   if (panel.style.display == 'block') {
//     panel.style.display = 'none';
//     title.style.background = '#fff';
//   } else {
//     panel.style.display = 'block';
//     title.style.background = '#eee';
//   }
// });