var e = (e2) => crypto.getRandomValues(new Uint8Array(e2)), t = (e2, t2, n2) => {
  let r2 = 256 - 256 % e2.length;
  if (r2 === 256) {
    let r3 = e2.length - 1;
    return (i2 = t2) => {
      if (!i2) return ``;
      let a = ``;
      for (; ; ) {
        let t3 = n2(i2), o = i2;
        for (; o--; ) if (a += e2[t3[o] & r3], a.length >= i2) return a;
      }
    };
  }
  let i = Math.ceil(1.6 * 256 * t2 / r2);
  return (a = t2) => {
    if (!a) return ``;
    let o = ``;
    for (; ; ) {
      let t3 = n2(i), s = i;
      for (; s--; ) if (t3[s] < r2 && (o += e2[t3[s] % e2.length], o.length >= a)) return o;
    }
  };
}, n = (n2, r2 = 21) => t(n2, r2 | 0, e), r = (e2 = 21) => {
  let t2 = ``, n2 = crypto.getRandomValues(new Uint8Array(e2 |= 0));
  for (; e2--; ) t2 += `useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n2[e2] & 63];
  return t2;
};
export {
  r as n,
  n as t
};
