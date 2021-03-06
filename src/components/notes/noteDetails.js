import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Error from '../error/error';
import FaEdit from 'react-icons/lib/fa/edit';


class NoteDetails extends Component{

    render(){
        const { note, categories } = this.props;

        const getCategoryName = (id) => {
            let category = categories.filter((category) => category.id === id);
            return category[0].name;
        };

        return(
            <div className="note-details">
            {
                (note.length > 0)
                    ?
                        <div>
                            <h2>Подробное описание</h2>
                            <div className="details">
                                <div>
                                    <h3>
                                        Дата события
                                    </h3>
                                    <p>
                                        { note[0].date }
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        Категория
                                    </h3>
                                    <p>
                                        { getCategoryName(note[0].category) }
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        Описание
                                    </h3>
                                    <p>
                                        { note[0].description }
                                    </p>
                                </div>
                            </div>
                            <div className="buttons">
                                <Link className="btn btn-success" to={`/edit/${note[0].id}`}>
                                    <FaEdit />&nbsp;
                                    Редактировать
                                </Link>&nbsp;
                                <Link className="btn btn-danger" to='/'>Назад</Link>
                            </div>
                        </div>
                :
                    <Error />
            }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    note       : state.notesReducer.notes.filter(note => parseInt(props.params.id, 10) === note.id),
    categories : state.categoriesReducer.categories
});

export default connect(mapStateToProps)(NoteDetails);