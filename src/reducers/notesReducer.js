import {
    SET_NOTES,
    REMOVE_NOTE,
} from '../actions/notesAction';

const notesReducer = (state = [], action) => {
    switch (action.type){

        case SET_NOTES:
            return {
                ...state,
                notes: action.notes
            };

        case REMOVE_NOTE:

            for(let i = 0; i < state.notes.length; i++){
                if(state.notes[i].id === action.id){
                    state.notes.splice(i, 1);
                }
            }

            return {
                ...state,
                notes: state.notes
            };

        default: return state;
    }
};

export default notesReducer;