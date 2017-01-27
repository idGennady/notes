import React, { Component } from 'react';
import { Link } from 'react-router';

import FaEdit from 'react-icons/lib/fa/edit';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import MdDetails from 'react-icons/lib/md/details';

class NotesRow extends Component{

    render(){
        const { id, date, noteColor, category, description, removeNote } = this.props;
        const limitDescription = 7;
        return(
            <tr style={{backgroundColor: noteColor}}>
                <td>{ date }</td>
                <td>{ category }</td>
                <td>{ description.substring(0, limitDescription) + '...' }</td>
                <td className="actions-icon">
                    <span title="Подробное описание">
                        <Link to={`/details/${id}`}>
                            <MdDetails />
                        </Link>
                    </span>&nbsp;
                    <span title="Редактировать">
                        <Link to={`/edit/${id}`}>
                            <FaEdit />
                        </Link>
                    </span>&nbsp;
                    <span title="Удалить" onClick={removeNote(id)} >
                        <MdHighlightRemove />
                    </span>
                </td>
            </tr>
        )
    }
}

export default NotesRow;