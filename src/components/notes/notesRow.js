import React, { Component } from 'react';

import FaEdit from 'react-icons/lib/fa/edit';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';

class NotesRow extends Component{

    removeNote(id){
        this.props.removeNote(id);
    }

    render(){
        const { id, date, priority, category, description } = this.props;
        return(
            <tr className={ priority }>
                <td>{ date }</td>
                <td>{ category }</td>
                <td>{ description }</td>
                <td>
                    <span title="Редактировать">
                        <FaEdit />
                    </span>&nbsp;
                    <span title="Удалить" onClick={this.removeNote.bind(this, id)} >
                        <MdHighlightRemove />
                    </span>
                </td>
            </tr>
        )
    }
}

export default NotesRow;