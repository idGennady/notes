export const SET_NOTES      = 'SET_NOTES';
export const REMOVE_NOTE    = 'REMOVE_NOTE';
export const ADD_NEW_NOTE   = 'ADD_NEW_NOTE';
export const GET_NODE_BY_ID = 'GET_NODE_BY_ID';


// example default data
const notes = [
    {
        id          : 0,
        date        : '10-06-2017',
        noteColor   : '#ffcccc',
        category    : 'Категория 1',
        description : 'Описание 1'
    },
    {
        id          : 1,
        date        : '07-07-2017',
        noteColor   : '#ffcccc',
        category    : 'Категория 2',
        description : 'Описание 2'
    }
];


export const setNotes = () => {
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


export const addNewNote = (note) => {
    return {
        type: ADD_NEW_NOTE,
        note
    }
};

export const getNoteById = (id) => {
    return {
        type: GET_NODE_BY_ID,
        id
    }
};