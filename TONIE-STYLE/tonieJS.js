$('.btn btn-primary').on('click', function () {
    $(this).button('toggle');
  })

$('#analyzeButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })