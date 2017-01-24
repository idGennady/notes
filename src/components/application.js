import React, { Component } from 'react';
import { Link } from 'react-router';

import MdEventNote from 'react-icons/lib/md/event-note';
import NotesList from './notes/notesList';
import MdPlaylistAdd from 'react-icons/lib/md/playlist-add';

class Application extends Component{  

    render(){
        return(
            <div className="application">
                <h2>
                    <MdEventNote />&nbsp;
                    Заметки
                </h2>
                <Link to="/add-note" className="add-note" title="Добавить заметку">
                    <MdPlaylistAdd />&nbsp;
                </Link>
                <NotesList />
            </div>
        )
    }
}

export default Application;