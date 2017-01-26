import {
    SET_NOTES,
    REMOVE_NOTE,
    SET_CATEGORIES,
    ADD_CATEGORY,
    ADD_NEW_NOTE,
    GET_NODE_BY_ID,
} from '../actions/notesAction';

const notesReducer = (state = [], action) => {
    switch (action.type){

        case SET_NOTES:
            return {
                ...state,
                notes: action.notes
            };

        case ADD_NEW_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.note
                ]
            };

        case REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note, index) => note.id !== action.id)
            };

        case GET_NODE_BY_ID:
            return {
                ...state,
                notes: state.notes.filter((note, index) => note.id === action.id)
            };

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

export default notesReducer;