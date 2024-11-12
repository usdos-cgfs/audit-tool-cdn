import appStyles from "../styles.css";
import quillStyles from "quill/dist/quill.snow.css";

export function registerStyles(element) {
  [appStyles, quillStyles].forEach((stylesheet) => {
    const styles = document.createElement("style");
    styles.innerHTML = stylesheet;
    element.append(styles);
  });
}
