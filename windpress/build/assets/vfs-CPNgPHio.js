import { e as encodeBase64, d as decodeBase64 } from "../chunks/index-BmWe5YW7.min.js";
function decodeVFSContainer(vfsContainer) {
  try {
    return JSON.parse(new TextDecoder().decode(decodeBase64(vfsContainer)));
  } catch (error) {
    console.warn("Failed to decode VFS container. Falling back to polyfill.");
    return JSON.parse(atob(vfsContainer));
  }
}
function encodeVFSContainer(vfsContainer) {
  try {
    return encodeBase64(new TextEncoder().encode(JSON.stringify(vfsContainer)));
  } catch (error) {
    console.warn("Failed to encode VFS container. Falling back to polyfill.");
    return btoa(JSON.stringify(vfsContainer));
  }
}
export {
  decodeVFSContainer as d,
  encodeVFSContainer as e
};
