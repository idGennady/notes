import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaCalendar from 'react-icons/lib/fa/calendar';
import FaBookmark from 'react-icons/lib/fa/bookmark';
import MdDescription from 'react-icons/lib/md/description';

import { removeNote } from '../../actions/notesAction';
import NotesRow from './notesRow';

class NotesList extends Component{


    removeNoteById = (id) => (e) => {
        e.preventDefault();
        this.props.dispatch(removeNote(id));
    };

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
                                    return <NotesRow {...note} key={index} removeNote={this.removeNoteById} />
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