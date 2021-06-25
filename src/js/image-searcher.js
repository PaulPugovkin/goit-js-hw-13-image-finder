import { imageFetch, searchOptions } from './fetcher'
import debounce from 'lodash.debounce';
import { refs } from '../js/refs'
import * as basicLightbox from 'basiclightbox'
import imageCardTmp from '../templates/image-card.hbs'

let searchQuery = '';

refs.searchForm.addEventListener('input', debounce(onSearch, 500))
refs.loadmoreButton.addEventListener('click', onLoad)
refs.gallery.addEventListener('click', onImageClick)

async function onSearch(event) {
    try {
    searchQuery = event.target.value.trim();

    refs.gallery.innerHTML = '';
    searchOptions.PAGE_NUM = 1;
 
        if (searchQuery.length > 0) {
            const response = await imageFetch(searchQuery)
            const result = await renderImage(response.hits)
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}

async function onLoad() {
    try {
        searchOptions.PAGE_NUM += 1;

        if (searchQuery.length > 0) {
            const response = await imageFetch(searchQuery)
            const result = await renderImage(response.hits)
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}

function renderImage(resolvedImages) {
    let markup = imageCardTmp(resolvedImages)

    refs.gallery.insertAdjacentHTML('beforeend', markup)
    refs.loadmoreButton.classList.remove('hidden')
}

function onImageClick(e) {
    if (e.target.className !== 'photo-card-image') return
    const instance = basicLightbox.create(`
            <img src="${e.target.dataset.src}" width="800" height="600">
`).show()
}