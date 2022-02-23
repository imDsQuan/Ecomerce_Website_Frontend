export  function dateToYMD(date: Date) {
  let strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let d = date.getDate();
  let m = strArray[date.getMonth()];
  let y = date.getFullYear();
  return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
}
