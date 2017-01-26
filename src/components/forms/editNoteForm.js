import React, { Component } from 'react';
import { Link } from 'react-router';

class EditNoteForm extends Component{  

    render(){
        return(
            <div>
                <h1>Hello world from EditNoteForm</h1>
                <Link to='/'>На главную</Link>
            </div>
        )
    }
}

export default EditNoteForm;