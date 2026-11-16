// Each navigation link opens one section. Hash URLs also support browser Back/Forward.
const pages = Array.from(document.querySelectorAll('.page'));
const navigationLinks = Array.from(document.querySelectorAll('.nav-links a'));
function showPage(moveFocus = true) {
  const requestedPage = window.location.hash.slice(1) || 'home';
  const activePage = pages.find(page => page.id === requestedPage) || pages[0];
  pages.forEach(page => { page.hidden = page !== activePage; });
  navigationLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + activePage.id) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  const pageName = activePage.id.charAt(0).toUpperCase() + activePage.id.slice(1);
  document.title = pageName + ' | Smriddhi Prasad';
  if (moveFocus) {
    document.getElementById('main-content').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
window.addEventListener('hashchange', () => showPage());
showPage(false);
