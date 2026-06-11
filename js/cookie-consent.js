(function () {
  try {
    if (sessionStorage.getItem('cookieConsent') === 'accepted') {
      document.documentElement.classList.add('cookie-consent-accepted');
    }
  } catch (err) {}
}());
