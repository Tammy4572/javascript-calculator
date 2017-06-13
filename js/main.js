
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/'];
var decimal = false;

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e){

    var input = document.querySelector('.input');
    var inputValue = input.innerHTML;
    var btnValue = this.innerHTML;

    if (btnValue == 'C') {
      input.innerHTML = '';
      decimal = false;
    }
    else if (btnValue == '=') {
      var equation = inputValue;
      var lastNum = equation[equation.length -1];

      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      if(operators.indexOf(lastNum) > -1 || lastNum == '.')
        equation = equation.replace(/./, '');

      if(equation)
        input.innerHTML = eval(equation);

      decimal = false;

    }
    else if(operators.indexOf(btnValue) > -1) {

      var lastSum = inputValue[inputValue.length - 1];

      if(inputValue != '' && operators.indexOf(lastNum) == -1)
        input.innerHTML += btnValue;

      else if(inputValue == '' && btnValue == '-')
        input.innerHTML += btnVal;

      if(operators.indexOf(lastNum) > -1 && inputValue.length > 1) {

        input.innerHTML = inputValue.replace(/.$/, btnValue);
      }

      decimalAdded =false;
    }
    else if(btnValue == '.') {
      if(!decimal) {
        input.innerHTML += btnValue;
        decimal = true;
      }
    }
    else{
      input.innerHTML += btnValue;
    }
    e.preventDefault();
  }
}
