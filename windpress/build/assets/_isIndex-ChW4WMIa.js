var e = /^(?:0|[1-9]\d*)$/;
function t(t2, n) {
  var r = typeof t2;
  return n ?? (n = 9007199254740991), !!n && (r == `number` || r != `symbol` && e.test(t2)) && t2 > -1 && t2 % 1 == 0 && t2 < n;
}
export {
  t
};
