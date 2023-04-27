const input = document.getElementById("ipbox");
const result = document.getElementById("result");

let plus = document.getElementsByClassName("btnp");
let minus = document.getElementsByClassName("btnm");
let mult = document.getElementsByClassName("btnmp");
let divd = document.getElementsByClassName("btnd");

function handleClick(el) {
  const exp = `${input.value}${el.innerText}`;
  let num = Number(exp)
  console.log(typeof(num), num);
  input.value = exp;
}

function reset() {
  input.value = "";
  result.value = "";
}

function remove() {
  input.value = input.value.toString().slice(0, -1);
  result.value = "";
}

function squareRoot(el) {
  let ans = Math.sqrt(input.value)
  result.value = ans;
}

function sqr(el)
{
  const ans = Math.pow(input.value, 2)
  result.value = ans;
}

function cube(el)
{
  const ans = Math.pow(input.value, 3)
  result.value = ans;
}

function cubeRoot(el) {
  const ans = Math.cbrt(input.value);
  result.value = ans;
}

function logBaseTen(el) {
  const ans = Math.log10(input.value);
  result.value = ans;
}

function logBaseTwo(el) {
  const ans = Math.log(input.value);
  result.value = ans;
}

function eql() {
  result.value = eval(input.value);
}

function sine(el)
{
  const ans = Math.sin(input.value)
  result.value = ans;
}

function cosine(el)
{
  const ans = Math.cos(input.value)
  result.value = ans;
}

function tang(el)
{
  const ans = Math.tan(input.value)
  result.value = ans;
}

function cotan(el)
{
  const ans = 1/Math.tan(input.value)
  result.value = ans;
}

num = Number(input.value)
function fact(num)
{
  if(num == 0)
  {
    result.value = 1;
  }
  else if(num > 0){
    ans = num*fact(num-1);
    result.value = ans;
  }
}

function facto(el)
{
  fact(num)
}



// if(result.value != null)
//   {
//     ans = Math.sqrt(result.value)
//     result.value = ans;
//   }
//   else if(input.value){
//     ans = Math.sqrt(input.value);
//     result.value = ans;
//   }