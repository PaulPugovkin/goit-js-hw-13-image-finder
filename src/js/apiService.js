import { error } from '@pnotify/core';

export const searchOptions = {
    BASE_URL: 'https://pixabay.com/api/',
    API_KEY: '22215457-d2e131747f34337528d5fbfaa',
    PAGE_NUM: 1,
    IMAGE_PER_PAGE: 12
}

export async function imageFetch(searchQuery) {
    try {
        const response = await fetch(`${searchOptions.BASE_URL}?image_type=photo
        &orientation=horizontal
        &q=${searchQuery}
        &page=${searchOptions.PAGE_NUM}
        &per_page=${searchOptions.IMAGE_PER_PAGE}
        &key=${searchOptions.API_KEY}`)
    const result = await response.json();
    return result;
    } catch {
                error({
            title: false,
            text: 'Упс, что-то пошло не так. Попробуйте сделать новый запрос',
            sticker: false,
            maxTextHeight: null,
            closerHover: false,
            animation: 'fade',
            mouseReset: false,
            delay: 5000,
    });
    }
}