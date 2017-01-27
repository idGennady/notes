export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY   = 'ADD_CATEGORY';

const categories = [
    {
        id     : 1,
        name   : 'Обучение',
        parent : 0
    },
    {
        id     : 2,
        name   : 'Иностранный язык',
        parent : 1
    },
    {
        id     : 3,
        name   : 'Английский язык',
        parent : 2
    },
    {
        id     : 4,
        name   : 'Немецкий язык',
        parent : 2
    },
    {
        id     : 6,
        name   : 'Встречи',
        parent : 0
    },
    {
        id     : 7,
        name   : 'Деловая',
        parent : 6
    },
    {
        id     : 8,
        name   : 'Игра на гитаре',
        parent : 1
    },

];

export const setCategories = () => {
    return {
        type: SET_CATEGORIES,
        categories
    }
};

export const addCategory = (category) => {
    return {
        type: ADD_CATEGORY,
        category
    }
};