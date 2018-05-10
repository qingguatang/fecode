// function isWord(word) {
//   return /^[-a-zA-Z]+$/.test(word);
// }

var list = ['a', 'b', 123, true];
for (var i = 0; i < list.length; i++) {
  // console.log(list[i]);
}


list.forEach(function(item, index) {
  // console.log(item, index); 
});


window.addEventListener('beforeunload', function() {
  var words = [];
  var lis = document.querySelectorAll('.list li');
  for (var i = 0; i < lis.length; i++) {
    words.push(lis[i].innerHTML);
  }
  console.log(words);
})

