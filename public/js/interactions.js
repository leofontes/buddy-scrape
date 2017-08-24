$(document).ready(function() {

  $('#scrapeButton').click(function() {
    var html = $('#inputTextarea').val();
    scrape(html);
  });

});
