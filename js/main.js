$('#button').click(function () {
  $('html,body').animate({
    scrollTop: $(document).height()
  },40000);
  return false;
})
