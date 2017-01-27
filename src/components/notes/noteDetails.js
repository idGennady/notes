import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getNoteById } from '../../actions/notesAction';
import FaEdit from 'react-icons/lib/fa/edit';


class NoteDetails extends Component{

    componentDidMount(){
        this.props.dispatch(getNoteById(parseInt(this.props.params.id, 10)));
    }

    render(){
        const { note } = this.props;
        return(
            <div className="note-details">
            {
                note
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
                                        { note[0].category }
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
                    null
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    note : state.notesReducer.note
});

export default connect(mapStateToProps)(NoteDetails);