import {
    SET_CATEGORIES,
    ADD_CATEGORY,
} from '../actions/categoriesAction';

const categoriesReducer = (state = [], action) => {
    switch (action.type){

        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        case ADD_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.category
                ]
            };


        default: return state;
    }
};

export default categoriesReducer;