window.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.tabs li[role="tab"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      const tabId = this.querySelector("a").getAttribute("href").slice(1);
      const tabPanel = document.getElementById(tabId);

      // Hide all tab panels
      document
        .querySelectorAll('.tabs div[role="tabpanel"]')
        .forEach((panel) => {
          panel.style.display = "none";
        });

      // Show the selected tab panel
      tabPanel.style.display = "block";
    });
  });
});
