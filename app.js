var result = document.getElementById("result");

function getNumber(num) {
  result.innerText += num;
}
function clearResult() {
  result.innerText = "";
}
function getResult() {
  result.innerText = eval(result.innerText);
}
function back() {
  result.innerText = result.innerText.substr(0, result.innerText.length - 1);
}
