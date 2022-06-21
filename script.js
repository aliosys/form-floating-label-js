var $input = $(".form-input");

// move label on input focus
$input
  .on("focus", function () {
    $(this).parent().parent().addClass("active");
  })
  .blur();

// move label if input is empty or not
$input
  .focusout(function () {
    if (!$(this).val()) {
      $(this).parent().parent().removeClass("active");
    } else {
      $(this).parent().parent().addClass("active");
    }
  })
  .focusout(); // focusout event for prefilled forms
