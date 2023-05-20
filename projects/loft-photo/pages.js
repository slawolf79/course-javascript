const pagesMap = {
  login: '.page-login',
  main: '.page-main',
  profile: '.page-profile',
};


let currentPage = null;

export default {
  openPage(name) {
    let selector = pagesMap[name];
    let element = document.querySelector(selector);

    currentPage?.classList.add('hidden');
    currentPage = element;
    currentPage.classList.remove('hidden');

  },
};