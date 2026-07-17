var e = (function() {
  let e2 = typeof document < `u` && document.createElement(`link`).relList;
  return e2 && e2.supports && e2.supports(`modulepreload`) ? `modulepreload` : `preload`;
})(), t = function(e2, t2) {
  return new URL(e2, t2).href;
}, n = {}, r = function(r2, i, a) {
  let o = Promise.resolve();
  if (i && i.length > 0) {
    let l = function(e2) {
      return Promise.all(e2.map((e3) => Promise.resolve(e3).then((e4) => ({ status: `fulfilled`, value: e4 }), (e4) => ({ status: `rejected`, reason: e4 }))));
    }, u = function(e2) {
      return import.meta.resolve ? import.meta.resolve(e2) : new URL(e2, import.meta.url).href;
    };
    let r3 = document.getElementsByTagName(`link`), s2 = document.querySelector(`meta[property=csp-nonce]`), c = s2?.nonce || s2?.getAttribute(`nonce`);
    o = l(i.map((i2) => {
      if (i2 = t(i2, a), i2 = u(i2), i2 in n) return;
      n[i2] = true;
      let o2 = i2.endsWith(`.css`);
      for (let e2 = r3.length - 1; e2 >= 0; e2--) {
        let t2 = r3[e2];
        if (t2.href === i2 && (!o2 || t2.rel === `stylesheet`)) return;
      }
      let s3 = document.createElement(`link`);
      if (s3.rel = o2 ? `stylesheet` : e, o2 || (s3.as = `script`), s3.crossOrigin = ``, s3.href = i2, c && s3.setAttribute(`nonce`, c), document.head.appendChild(s3), o2) return new Promise((e2, t2) => {
        s3.addEventListener(`load`, e2), s3.addEventListener(`error`, () => t2(Error(`Unable to preload CSS for ${i2}`)));
      });
    }));
  }
  function s(e2) {
    let t2 = new Event(`vite:preloadError`, { cancelable: true });
    if (t2.payload = e2, window.dispatchEvent(t2), !t2.defaultPrevented) throw e2;
  }
  return o.then((e2) => {
    for (let t2 of e2 || []) t2.status === `rejected` && s(t2.reason);
    return r2().catch(s);
  });
};
export {
  r as t
};
