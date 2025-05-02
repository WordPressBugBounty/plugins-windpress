import { w as decodeBase64 } from "./cssesc-B11S6O1g.js";
function decodeVFSContainer(vfsContainer) {
  try {
    return JSON.parse(new TextDecoder().decode(decodeBase64(vfsContainer)));
  } catch (error) {
    console.warn("Failed to decode VFS container. Falling back to polyfill.");
    return JSON.parse(atob(vfsContainer));
  }
}
export {
  decodeVFSContainer as d
};
