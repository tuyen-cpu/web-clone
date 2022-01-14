const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const categorySearch = $('.search-header-site__select')
const categorySearchSelected = $('.search-header-site__selected')
const itemCategories = $$('.search-header-item__link')
const categoriesTitle = $('.navbar-header-categories__title')



let isShow = false // true => decision toggle 'is-show'
let isShowCategories = false
    /* Check element 1 vs element 2 is same ? 
       false => toggle dropdown categories in search header */


document.addEventListener('click', function(event) {
    const elementClick = event.target;
    if (isShow) {
        if (categorySearchSelected !== elementClick) {
            categorySearch.onclick()
        }
    }


})

itemCategories.forEach(element => {
    element.onclick = function() {
        categorySearchSelected.innerText = this.innerText
    }
});
/** click categories search => toggle is-show */
categorySearch.onclick = function() {
    isShow = !isShow
    this.classList.toggle('is-show', isShow)

}
categoriesTitle.onclick = function() {
    console.log('x')
    isShowCategories = !isShowCategories
    this.classList.toggle('is-show', isShowCategories)

}