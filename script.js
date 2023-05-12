const QuizGame = () => {
  
  // Set time
  let totalTime = 5;
  let gameTime = 0;

  // Set scores
  let correct = 0;
  let wrong = 0;
  const total = questions.length;

  const init = () => {
    $(document).ready(function () {
    console.log(questions);    
  $('.js').on('click', loadJsCards);   
    })
  }

  const startGame = (e) => {
  
    $('.quiz_cards').hide();
    $('.scores').show();
    $('.time').show();
    $('.quiz').show();
    $('.time').text(totalTime);
    stopWatch();
  }

  const loadJsCards = () => {
    const jsQuizzes = [
      { 
        title: 'Intro to Javascript',
        intro: 'JavaScript data types, built-in methods, and variables.',
        id: 'js_intro'
      },
    ];

    $('.outro').hide();
    $('.quiz_cards').show();

    jsQuizzes.forEach(quiz => {
      $('.quiz_cards .container').append(`<div class="card intro mt-3">
      <div class= "card-header">
          </div>
        <div class="card-body">
          <h4 class="card-title">${quiz.title}</h4>
          <p class="card-text">Practice ${quiz.intro}</p>
        </div>
        <div class="card-footer">
          </div>`);
      $('#' + quiz.id).on('click', startGame);
    })
  }

  const displayQuestion = () => {
    const question = questions.shift();
    // console.log(questions);
    const quiz = $(`<div class="card quiz_card text-white">
                      <div class= "card-header">
                        ${question.title}
                      </div>
                    </div >`);

    const choicesList = $('<ul class="list-group"></ul>');


    question['choices'].forEach(choice => {
      choicesList.append(`<li  class="list-group-item mt-3">${choice}</li>`);
    })
    quiz.append(choicesList);
    $('.quiz').append(quiz);
  }


    if ($(e.target).html() === answer) {
      e.target.style.backgroundColor = '#164032';
      correct++;
      totalTime++;
      setTimeout(() => {
        $('.quiz').empty();
        if (questions.length !== 0) 
      }
    }


QuizGame();
