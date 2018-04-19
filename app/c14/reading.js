var app = document.querySelector('.reading-app');

var text = app.querySelector('.text');
var articleBody = app.querySelector('.article .body');


text.addEventListener('blur', function() {
  renderArticle();
  handleArticleEvent();
});


function renderArticle() {
  var body = text.value.trim();
  console.log(body);
  if (!body) {
    return;
  }

  var words = body.split(/\b/);
  console.log(words);

  var html = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (isWord(word)) {
      html = html + '<span>' + word + '</span>';
    } else {
      html = html + word;
    }
  }

  articleBody.innerHTML = html;
}


function handleArticleEvent() {
  var spans = articleBody.querySelectorAll('span');
  for (var i = 0; i < spans.length; i++) {
    addEvent(i);
  }
  function addEvent(index) {
    spans[index].addEventListener('dblclick', function() {
      console.log(spans[index]);
    });
  }
}


function isWord(work) {
  return (/^[-\w]+$/).test(work);
}