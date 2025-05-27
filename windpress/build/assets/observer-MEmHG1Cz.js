import { l as logger } from "./logger-DmkfWO2A.js";
import { e as etchIframe } from "./constant-CgE2OgEV.js";
async function registerPlayObserver() {
  let iframeEl = etchIframe();
  let scriptElements = [];
  logger("finding WindPress script...", { module: "play/observer" });
  let timeoutOccurred = false;
  let timeout = setTimeout(() => {
    timeoutOccurred = true;
  }, 45e3);
  while (!timeoutOccurred) {
    scriptElements = document.querySelectorAll("script");
    scriptElements = Array.from(scriptElements).filter((scriptElement) => {
      let id = scriptElement.getAttribute("id");
      return id && (id.startsWith("windpress:") || id.startsWith("vite-client")) && !id.startsWith("windpress:integration-");
    });
    if (scriptElements.length > 0) {
      clearTimeout(timeout);
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (timeoutOccurred) {
    logger("time out! failed to find WindPress script", { module: "play/observer" });
    return;
  }
  logger("found WindPress script", { module: "play/observer" });
  let contentWindow = iframeEl.contentWindow || iframeEl;
  let contentDocument = iframeEl.contentDocument || contentWindow.document;
  while (!contentDocument.head) {
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  logger("injecting WindPress script into the root container", { module: "play/observer" });
  let injectedScript = contentDocument.querySelectorAll("script");
  let isScriptInjected = Array.from(injectedScript).some((script) => {
    let id = script.getAttribute("id");
    return id && id.startsWith("windpress:");
  });
  if (!isScriptInjected) {
    logger("starting the root injection process...", { module: "play/observer" });
    scriptElements.forEach((scriptElement) => {
      let id = scriptElement.getAttribute("id");
      if (id && (id.startsWith("windpress:metadata") || id.startsWith("vite-client"))) {
        contentDocument.head.appendChild(document.createRange().createContextualFragment(scriptElement.outerHTML));
      } else {
        contentDocument.body.appendChild(document.createRange().createContextualFragment(scriptElement.outerHTML));
      }
    });
    logger("WindPress script injected successfully", { module: "play/observer" });
  } else {
    logger("WindPress script is already injected, skipping the injection process...", { module: "play/observer" });
  }
  iframeEl.dataset.windpressInjected = "true";
}
const observer = new MutationObserver(() => {
  const target = etchIframe();
  if (target && !target.dataset.windpressInjected) {
    setTimeout(() => {
      if (target.dataset.windpressInjected) {
        return;
      }
      registerPlayObserver();
    }, 100);
  }
});
observer.observe(document, {
  subtree: true,
  childList: true
});
logger("Play: observer.ts module loaded");
