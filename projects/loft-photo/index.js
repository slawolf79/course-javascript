import pages from './pages';
import model from './model';
import('./styles.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
  e.preventDefault();
  let page = model.getRandomElement(pageNames);
  pages.openPage(page);
  


});

