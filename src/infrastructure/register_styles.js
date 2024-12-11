import appStyles from "../styles.css";
import quillStyles from "quill/dist/quill.snow.css";

export function registerStyles(element) {
  [appStyles, quillStyles].forEach((stylesheet) => {
    const styles = document.createElement("style");
    styles.innerHTML = stylesheet;
    // element.append(styles);
    document.head.append(styles);
  });

  // Set width and height of our window
  // const contentWindow = document.querySelector(".audit");

  // contentWindow.style.height =
  //   document.defaultView.innerHeight -
  //   contentWindow.getBoundingClientRect().top +
  //   "px";

  // Scrollable region for some reason
  const s = document.querySelector('[data-is-scrollable="true"]');

  if (s) s.style.overflowY = "auto";
}
