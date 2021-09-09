function is_strong_number() {
  var num = document.getElementById("num1").value;
  sum = 0;
  r = 0;
  temp = num;
  while (num) {
    i = 1;
    fact = 1;
    r = num % 10;
    while (i <= r) {
      fact = fact * i;
      i++;
    }
    sum = sum + fact;
    num = Math.floor(num / 10);
  }
  if (temp == sum) {
    document.getElementById("result1").innerHTML =
      "<b>Result:</b> Strong Number";
  } else {
    document.getElementById("result1").innerHTML =
      "<b>Result:</b> Not a Strong Number";
  }
}
function palindrome() {
  var str = document.getElementById("num2");
  var inputWn = str.value.toLocaleLowerCase();
  var string = inputWn.split("");

  var rearray = string.reverse();

  var joinarray = rearray.join("");

  if (inputWn == joinarray) {
    document.getElementById("result2").innerHTML = `<div>
                        <p> ${inputWn}=${joinarray}</p>
                        <p style="font-size: 1.5rem">It is a palindrome</p>
                    </div>`;
    str.value = "";
  } else {
    document.getElementById("result2").innerHTML = `<div>
                        <p> ${inputWn}≠${joinarray}</p>
                        <p style="font-size: 1.5rem">It is not a palindrome</p>
                        </div>`;
    str.value = "";
  }
}
function armstrong() {
  var number = document.getElementById("num3").value;
  var numberOfDigits = number.length;
  let sum = 0;
  let temp = number;

  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }

  if (sum == number) {
    document.getElementById("result3").innerHTML = `<div>
                  <p> ${number} is an Armstrong number.</p>
                  </div>`;
  } else {
    document.getElementById("result3").innerHTML = `<div>
                  <p> ${number} is not an Armstrong number.</p>
                  </div>`;
  }
}
function prime() {
  var n,
    i,
    flag = true;
  n = document.getElementById("num4").value;
  n = parseInt(n);
  for (i = 2; i <= n - 1; i++)
    if (n % i == 0) {
      flag = false;
      break;
    }
  if (flag == true) {
    document.getElementById("result4").innerHTML = `<div>
                  <p> ${n} is a prime number.</p>
                  </div>`;
  } else {
    document.getElementById("result4").innerHTML = `<div>
                  <p> ${n} is not a prime number.</p>
                  </div>`;
  }
}
