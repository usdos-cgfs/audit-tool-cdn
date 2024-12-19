export function tabs(element) {
  const elementId = element.getAttribute("id");
  const tabNav = element.querySelector(`ul`);

  const tabs = tabNav.querySelectorAll(":scope > li");

  const tabContents = element.querySelectorAll(":scope > div");

  tabNav.addEventListener("click", (e) => {
    const targetTabId = e.target.getAttribute("href");
    if (!targetTabId) return;

    tabs.forEach((tab) => tab.classList.toggle("active", tab == e.target));

    tabContents.forEach((tab) => {
      tab.style.display = "#" + tab.id == targetTabId ? "block" : "none";
    });
  });
}
