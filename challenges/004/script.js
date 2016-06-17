window.onload = function () {
  var buttons = document.getElementsByClassName('calculator-buttons')[0];
  var inputs = buttons.getElementsByTagName("td");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
      var query = document.getElementById("query");
      query.value += this.innerHTML;
    });
  }

  var calcButtons = buttons.getElementsByTagName("th");
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", function () {
      var query = document.getElementById("query");
      query.value = eval(query.value);
    });
  }
};
