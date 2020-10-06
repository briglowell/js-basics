//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let stringArray = str.split(" ");
  let token = '';
  let camel = '';
  for (let i = 0; i < stringArray.length; i++) {
    token = stringArray[i];
    camel += (token.charAt(0).toUpperCase() + token.slice(1));
  }
  return camel.charAt(0).toLowerCase() + camel.slice(1);

}