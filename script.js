const navElement = document.querySelector('.navigation__nav');
const navBackground = document.querySelector('.navigation__background');
const navgationList = document.querySelectorAll('.navigation__item');

navgationList.forEach(function(items){
let x = items;
items.addEventListener('click', closeNav);

function closeNav(){
navElement.style.transform = 'scale(0)';
navBackground.style.transform = 'scale(0)';
// setTimeout will be useful for resetting our elements once they 
  // reached scale(0)    
  setTimeout(() => {
    // You can check or uncheck a checkbox in javascript using .checked, 
    // here in order to set the styles back to normal.
    document.querySelector('.navigation__checkbox').checked = false;

    // Wait a bit more that the elements have been reset to remove the 
    // styles given in JS above.
    setTimeout(() => {
      navElement.style = '';
      navBackground.style = '';
    }, 500);
  }, 1000);
}
});
