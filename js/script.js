import { snippets } from './data.js';

const addTodoItem = () => {
  const html = `
      <div class="todo__item-container" style="display: none;">
        <div class="todo__item card">
          <p class="todo__item--text">${$('.todo__add--input').val()}</p>
          <i class="bi bi-hourglass-split"></i>
          <i class="bi bi-check-lg"></i>
          <i class="bi bi-arrow-counterclockwise" style="display: none"></i>
          <i class="bi bi-trash3"></i>
        </div>
        <div class="pomodoro card" style="display: none;">
          <p>30:30</p>
        </div>
      </div>
    `;
  $('.todo__items').append(html);
  $('.todo__item-container').last().fadeIn({ duration: 200 });
  $('.todo__add--input').val('');

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
      .parent('.todo__item')
      .first()
      .siblings('.pomodoro')
      .first()
      .slideToggle();
  });

  $('.bi-check-lg').on('click', function () {
    $(this).siblings('.todo__item--text').addClass('done');
    $(this).fadeOut({ duration: 200 });
    setTimeout(() => {
      $(this).siblings('.bi-arrow-counterclockwise').fadeIn({ duration: 200 });
    }, 200);
  });

  $('.bi-arrow-counterclockwise').on('click', function () {
    $(this).siblings('.todo__item--text').removeClass('done');
    $(this).fadeOut({ duration: 200 });
    setTimeout(() => {
      $(this).siblings('.bi-check-lg').fadeIn({ duration: 200 });
    }, 200);
  });

  $('.bi-trash3').on('click', function () {
    $(this).parent('.todo__item').fadeOut({ duration: 200 });
    setTimeout(() => {
      $(this).parent('.todo__item').remove();
    }, 200);
  });

  $('.bi-clipboard').on('click', function () {
    const snippet = $(this).parents('.snippets__item').children('p').text();
    navigator.clipboard.writeText(snippet);
  });
};

$(() => {
  $('.todo__add--button').on('click', () => {
    addTodoItem();
  });

  $('.todo__add--input').on('keyup', (event) => {
    if (event.key === 'Enter') {
      addTodoItem();
    }
  });

  snippets.forEach((snippet) => {
    const html = `
      <div class="snippets__item">
        <h2>${snippet.title}</h2>
        <p>
          ${snippet.code}
        </p>
        <pre>
          <i class="bi bi-clipboard"></i>
          <code>
            ${snippet.code}
          </code>
        </pre>
      </div>
    `;
    $('.snippets').append(html);
  });

  bindIconEvents();

  if ($(document).attr('title') === 'Snippets') {
    hljs.highlightAll();
  }
});
