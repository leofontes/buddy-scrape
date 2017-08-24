$(document).ready(function() {

  $('#scrapeButton').click(function() {
    var html = $('#inputTextarea').val()
    var scrapedData = scrape(html)

    $('#outputClassNames').append(stringifyArray(scrapedData.classNames))
    $('#outputPercentages').append(stringifyArray(scrapedData.percents))
  })

})

function stringifyArray(arr) {
  var string = ""

  for(var i = 0; i < arr.length; i++) {
    string += arr[i] + "<br>"
  }

  return string
}
