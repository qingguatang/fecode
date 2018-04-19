var app = document.querySelector('.reading-app');

var text = app.querySelector('.text');
var articleBody = app.querySelector('.article .body');
var wordsList = app.querySelector('.words .list');


initList();
handleTextEvent();
handleUpButtonEvent();
handleDownButtonEvent();
handleDeleteButtonEvent();


function handleTextEvent() {
  text.addEventListener('blur', function() {
    renderArticle();
    handleArticleEvent();
  });
}


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
      addNewWord(spans[index].innerHTML);
    });
  }
}


function addNewWord(word) {
  console.log(word);
  var li = document.createElement('li');

  // li.style.background = '#f00'
  li.classList.add('list-group-item');
  li.innerHTML = word;
 
  wordsList.appendChild(li);

  handleNewWordEvent(li);
}


function handleNewWordEvent(li) {
  li.addEventListener('click', function() {
    var lis = wordsList.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].classList.remove('active');
    }
    li.classList.add('active');
  });
}


function initList() {
  var lis = wordsList.querySelectorAll('li');
  for (var i = 0; i < lis.length; i++) {
    handleNewWordEvent(lis[i]);
  }
}


function handleDeleteButtonEvent() {
  var deleteButton = app.querySelector('.remove');
  deleteButton.addEventListener('click', function() {
    var li = wordsList.querySelector('.active');
    li.parentNode.removeChild(li);
  });
}


function handleUpButtonEvent() {
  var upButton = app.querySelector('.up');
  upButton.addEventListener('click', function() {
    var li = wordsList.querySelector('.active');
    if (!li) {
      return;
    }
    
    var lis = wordsList.querySelectorAll('li');

    var index = indexOf(lis, li);
    var prev = lis[index - 1];
    console.log('prev', prev);
    if (!prev) {
      return;
    }
    li.parentNode.insertBefore(li, prev);
  });
}


function handleDownButtonEvent() {
  var downButton = app.querySelector('.down');
  downButton.addEventListener('click', function() {
    var li = wordsList.querySelector('.active');
    if (!li) {
      return;
    }
    
    var lis = wordsList.querySelectorAll('li');

    var index = indexOf(lis, li);
    var next = lis[index + 2];
    console.log('next', next);
    li.parentNode.insertBefore(li, next);
  });
}


function indexOf(lis, li) {
  for (var i = 0; i < lis.length; i++) {
    if (lis[i] == li) {
      return i;
    }
  }
  return -1;
}

function isWord(work) {
  return (/^[-\w]+$/).test(work);
}