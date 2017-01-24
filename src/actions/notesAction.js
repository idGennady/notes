export const SET_NOTES   = 'SET_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const setNotes = (notes) => {
    return {
        type: SET_NOTES,
        notes
    }
};

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        id
    }
};