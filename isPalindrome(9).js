var isPalindrome = function (x) {
  x = x.toString();
  let y = x;

  y = y.split("");
  y = y.reverse();
  y = y.join("");

  if (y === x) {
    return true;
  } else {
    return false;
  }
};

let res = isPalindrome(121);
console.log(res);
