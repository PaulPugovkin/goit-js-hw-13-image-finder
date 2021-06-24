export const searchOptions = {
    BASE_URL: 'https://pixabay.com/api/',
    API_KEY: '22215457-d2e131747f34337528d5fbfaa',
    PAGE_NUM: 1,
    IMAGE_PER_PAGE: 10
}

export function imageFetch(searchQuery) {
    return fetch(`${searchOptions.BASE_URL}?image_type=photo
    &orientation=horizontal
    &q=${searchQuery}
    &page=${searchOptions.PAGE_NUM}
    &per_page=${searchOptions.IMAGE_PER_PAGE}
    &key=${searchOptions.API_KEY}`).then(res => res.json())
}