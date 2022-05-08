import { snippets } from './data.js';

const addTodoItem = () => {
  const html = `
      <div class="todo--item-container" style="display: none;">
        <div class="todo--item card">
          <p class="todo--item__text">${$('.todo--add__input').val()}</p>
          <i class="bi bi-hourglass-split"></i>
          <i class="bi bi-check-lg"></i>
          <i class="bi bi-arrow-counterclockwise" style="display: none"></i>
          <i class="bi bi-trash3"></i>
        </div>
        <div class="todo--pomodoro card" style="display: none;">
          <p>30:30</p>
        </div>
      </div>
    `;
  $('.todo--items').append(html);
  $('.todo--item-container').last().fadeIn({ duration: 200 });
  $('.todo--add__input').val('');

  unbindIconEvents();
  bindIconEvents();
};

const unbindIconEvents = () => {
  $(
    '.bi-hourglass-split, .bi-check-lg, .bi-arrow-counterclockwise, .bi-trash3'
  ).off();
};

const bindIconEvents = () => {
  $('.bi-hourglass-split').on('click', function () {
    $(this)
      .parent('.todo--item')
      .first()
      .siblings('.todo--pomodoro')
      .first()
      .slideToggle();
  });

  $('.bi-check-lg').on('click', function () {
    $(this).siblings('.todo--item__text').addClass('done');
    $(this).fadeOut({ duration: 200 });
    setTimeout(() => {
      $(this).siblings('.bi-arrow-counterclockwise').fadeIn({ duration: 200 });
    }, 200);
  });

  $('.bi-arrow-counterclockwise').on('click', function () {
    $(this).siblings('.todo--item__text').removeClass('done');
    $(this).fadeOut({ duration: 200 });
    setTimeout(() => {
      $(this).siblings('.bi-check-lg').fadeIn({ duration: 200 });
    }, 200);
  });

  $('.bi-trash3').on('click', function () {
    $(this).parent('.todo--item').fadeOut({ duration: 200 });
    setTimeout(() => {
      $(this).parent('.todo--item').remove();
    }, 200);
  });
};

$(() => {
  $('.todo--add__button').on('click', () => {
    addTodoItem();
  });

  $('.todo--add__input').on('keyup', (event) => {
    if (event.key === 'Enter') {
      addTodoItem();
    }
  });

  bindIconEvents();

  snippets.forEach((snippet) => {
    const html = `
      <pre>
        <code class="${snippet.language}">
          ${snippet.code}
        </code>
      </pre>
    `;
    $('.snippets').append(html);
  });
  hljs.highlightAll();
});
