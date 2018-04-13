var title = document.querySelector('.user-center .title');
var panel = document.querySelector('.user-center .panel');


// function togglePanel() {
//   if (panel.style.display == 'none') {
//     panel.style.display = 'block';
//   } else  {
//     panel.style.display = 'none';
//   }
// }

var show = false;
function togglePanel() {
  if (show) {
    panel.style.display = 'none';
    // show = false;
  } else {
    panel.style.display = 'block';
    // show = true;
  }
  show = !show;
}

title.addEventListener('click', togglePanel);