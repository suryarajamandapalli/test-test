function setLang(lang) {
  localStorage.setItem("justify_lang", lang);
  window.location.href = "./auth.html";
}