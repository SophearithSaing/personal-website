const addTodoItem = () => {
  const html = `
      <div class="todo--item" style="display: none;">
        <p class="todo--item__text">${$('.todo--add__input').val()}</p>
        <i class="bi bi-check-lg"></i>
        <i class="bi bi-arrow-counterclockwise" style="display: none"></i>
        <i class="bi bi-trash3"></i>
      </div>
    `;
  $('.todo--items').append(html);
  $('.todo--item').last().fadeIn({ duration: 200 });
  $('.todo--add__input').val('');
};

const bindEvent = () => {
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
    bindEvent();
  });

  $('.todo--add__input').on('keyup', (event) => {
    if (event.key === 'Enter') {
      addTodoItem();
      bindEvent();
    }
  });

  bindEvent();
});
