function isPalindrome(str: string) {
  return str === str.split('').reverse().join('');
}

function isPalindrome2(str: string) {
  if(str.length === 0 || str.length === 1) return true;

  if(str[0] === str[str.length - 1]) {
    return isPalindrome2(str.substring(1, str.length - 1));
  }

  return false;
}

console.log(isPalindrome('12321'));
