import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaCalendar from 'react-icons/lib/fa/calendar';
import FaBookmark from 'react-icons/lib/fa/bookmark';
import MdDescription from 'react-icons/lib/md/description';

import { setNotes, removeNote } from '../../actions/notesAction';
import NotesRow from './notesRow';

// example default data
const notes = [
    {
        id          : 0,
        date        : '10-06-2017',
        priority    : 'danger',
        category    : 'Категория 1',
        description : 'Описание 1'
    },
    {
        id          : 1,
        date        : '07-07-2017',
        priority    : 'success',
        category    : 'Категория 2',
        description : 'Описание 2'
    }
];

class NotesList extends Component{

    componentDidMount(){
        // get data from server and set in reducer
        this.props.dispatch(setNotes(notes));
    }

    removeNote(id){
        this.props.dispatch(removeNote(id));
    }

    render(){
        const { notes } = this.props;
        return(
            <table className="table nodes-list">
                <thead>
                    <tr>
                        <th>
                            <FaCalendar />&nbsp;
                            Дата
                        </th>
                        <th>
                            <FaBookmark />&nbsp;
                            Категория
                        </th>
                        <th>
                            <MdDescription />&nbsp;
                            Описание
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes
                            ?
                                notes.map((note, index) => {
                                    return <NotesRow {...note} key={index} removeNote={this.removeNote.bind(this)} />
                                })
                            :
                                null
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    notes : state.notesReducer.notes
});

export default connect(mapStateToProps)(NotesList);