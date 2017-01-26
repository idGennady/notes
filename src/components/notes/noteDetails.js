import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getNoteById } from '../../actions/notesAction';
import FaEdit from 'react-icons/lib/fa/edit';


class NoteDetails extends Component{

    componentDidMount(){
        this.props.dispatch(getNoteById(parseInt(this.props.params.id, 10)))
    }

    render(){
        const { notes } = this.props;

        return(
            <div className="note-details">
                <h2>Подробное описание</h2>
                {
                    notes
                        ?
                            <div className="details">
                                <div>
                                    <h3>
                                        Дата события
                                    </h3>
                                    <p>
                                        { notes[0].date }
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        Категория
                                    </h3>
                                    <p>
                                        { notes[0].category }
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        Описание
                                    </h3>
                                    <p>
                                        { notes[0].description }
                                    </p>
                                </div>
                            </div>
                        :
                            null
                }
                <div className="buttons">
                    <Link className="btn btn-success" to={`/edit/${notes.id}`}>
                        <FaEdit />&nbsp;
                        Редактировать
                    </Link>&nbsp;
                    <Link className="btn btn-danger" to='/'>Назад</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notes : state.notesReducer.notes
});

export default connect(mapStateToProps)(NoteDetails);