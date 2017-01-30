import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import FaEdit from 'react-icons/lib/fa/edit';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import MdDetails from 'react-icons/lib/md/details';

class NotesRow extends Component{

    render(){
        const { id, date, noteColor, category, description, removeNote, categories } = this.props;
        const limitDescription = 7;

        const renderName = (id) => {
            let category = categories.filter((category) => category.id === id);
            return category[0].name;
        };

        return(
            <tr style={{backgroundColor: noteColor}}>
                <td>{ date }</td>
                <td>{ renderName(category) }</td>
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

const mapStateToProps = state => ({
    categories : state.categoriesReducer.categories
});

export default connect(mapStateToProps)(NotesRow);