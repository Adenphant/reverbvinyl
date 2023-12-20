"use strict";

// skjul alle pages/sider
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// hvis page/side
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
}

// naviger til et ny view/page vha location.href
function navigateTo(pageId) {
  location.href = `#${pageId}`;
}

// Sætter den den side du vil vise når du åbner hjemmesiden
// funktionen 'onhashchange' bliver kaldt på body, og tilgår denne funktion
function pageChange() {
  let page = "home";
  window.scrollTo(0, 0);
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

pageChange(); // kalder funktioen når siden bliver loadet