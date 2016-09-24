$('.btn btn-primary').on('click', function () {
    $(this).button('toggle') // button text will be "finished!"

    console.log($(this).button('toggle') );
  })