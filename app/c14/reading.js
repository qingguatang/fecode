var app = document.querySelector('.reading-app');

var text = app.querySelector('.text');
var articleBody = app.querySelector('.article .body');
var wordsList = app.querySelector('.words .list');


initTextEvent();
initListEvent();
initUpButtonEvent();
initDownButtonEvent();
initDeleteButtonEvent();
initStorage();


function initTextEvent() {
  text.addEventListener('blur', function() {
    renderArticle();
    initArticleEvent();
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


function initArticleEvent() {
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

  initNewWordEvent(li);
}


function initNewWordEvent(li) {
  li.addEventListener('click', function() {
    var lis = wordsList.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].classList.remove('active');
    }
    li.classList.add('active');
  });
}


function initListEvent() {
  var lis = wordsList.querySelectorAll('li');
  for (var i = 0; i < lis.length; i++) {
    initNewWordEvent(lis[i]);
  }
}


function initUpButtonEvent() {
  var upButton = app.querySelector('.up');
  upButton.addEventListener('click', function() {
    moveItem('up');
  });
}


function initDownButtonEvent() {
  var downButton = app.querySelector('.down');
  downButton.addEventListener('click', function() {
    moveItem('down');
  });
}


function moveItem(type) {
  var li = wordsList.querySelector('.active');
  if (!li) {
    return;
  }
  
  var lis = wordsList.querySelectorAll('li');
  var index = indexOf(lis, li);

  // var refIndex;
  // if (type == 'up') {
  //   refIndex = index - 1;
  // } else {
  //   refIndex = index + 2;
  // }

  var refIndex = type == 'up' ? index - 1 : index + 2;
  if (refIndex == -1) {
    return;
  }
  li.parentNode.insertBefore(li, lis[refIndex]);
}


function initDeleteButtonEvent() {
  var deleteButton = app.querySelector('.remove');
  deleteButton.addEventListener('click', function() {
    var li = wordsList.querySelector('.active');
    if (li) {
      li.parentNode.removeChild(li);
    }
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


function initStorage() {
  window.addEventListener('beforeunload', function() {
    var lis = wordsList.querySelectorAll('li');
    var words = [];
    for (var i = 0; i < lis.length; i++) {
      words.push(lis[i].innerHTML);
    }
    console.log(words);

    // 把非字符串的东西变成字符串，方便存储
    var json = JSON.stringify(words);
    localStorage.setItem('mywords', json);
  });

  var json = localStorage.getItem('mywords');
  var words = JSON.parse(json);
  for (var i = 0; i < words.length; i++) {
    addNewWord(words[i]);
  }
}