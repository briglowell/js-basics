//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let split = str.split(" ");
  let split2 = '';
  let camel = '';
  for (let i = 0; i < split.length; i++) {
    split2 = split[i];
    camel += (split2.charAt(0).toUpperCase() + split2.slice(1));
  }
  return camel.charAt(0).toLowerCase() + camel.slice(1);

}