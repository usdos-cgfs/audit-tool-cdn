export function tabs(element) {
  const elementId = element.getAttribute("id");
  const tabNav = element.querySelector(`ul`);

  const tabs = element.querySelectorAll(":scope > div");

  tabNav.addEventListener("click", (e) => {
    const targetTabId = e.target.getAttribute("href");
    if (!targetTabId) return;

    tabs.forEach((tab) => {
      "#" + tab.id == targetTabId
        ? (tab.style.display = "block")
        : (tab.style.display = "none");
    });
  });
}
