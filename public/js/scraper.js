function scrape(html) {
  var words = html.split("\n")
  var filtered = words.filter(filterBusiness)
  filtered.sort()

  return getPercentArray(filtered)
}

function filterBusiness(value) {
  return value.indexOf("Business") != -1
}

function getPercentArray(arr) {
  var data = {
    classNames : [],
    percents: []
  }

  for(var i = 0; i < arr.length; i++) {
    var indexOfSpace = arr[i].indexOf(" ")
    data.classNames.push(arr[i].substring(0, indexOfSpace))
    data.percents.push(replaceDots(arr[i].substring(indexOfSpace + 2)))
  }

  return data
}

function replaceDots(percentage) {
  return percentage.replace(".", ",")
}
