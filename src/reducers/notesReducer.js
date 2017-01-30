import {
    SET_NOTES,
    REMOVE_NOTE,
    ADD_NEW_NOTE,
        EDIT_NODE,
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


        case EDIT_NODE:
            return {
                ...state,
                notes: state.notes.map((note) => {
                    if(note.id === action.note.id){
                        note = action.note;
                    }
                    return note;
                })
            };

        default: return state;
    }
};

export default notesReducer;