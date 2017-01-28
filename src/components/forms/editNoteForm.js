import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


import { getNoteById, editNote } from '../../actions/notesAction';
import Error from '../error/error';


class EditNoteForm extends Component{

    componentDidMount(){
        this.props.dispatch(getNoteById(parseInt(this.props.params.id, 10)));
    }

    submit = (id) => (event) => {
        event.preventDefault();

        let refs = this.refs;

        let note = {
            id          : id,
            date        : refs.date.value,
            noteColor   : refs.noteColor.value,
            category    : parseInt(refs.category.id, 10),
            description : refs.description.value
        };

        this.props.dispatch(editNote(note));
        browserHistory.push('/');
    };

    render(){
        const { note, categories } = this.props;

        const getNameCategory = (id) => {
            let category = categories.filter((category) => category.id === id);
            return category[0].name;
        };

        return(
            <div>
                {
                    note
                        ?
                            <form className="add-note-form">
                                <div className="form-group">
                                    <label htmlFor="date">Дата:</label>
                                    <input type="date" className="form-control" id="date" defaultValue={note[0].date} ref="date"/>
                                </div>
                                <div className="form-group categories-group">
                                    <label htmlFor="category-list">Категория:</label>
                                    <input type="text" className="form-control" disabled value={ getNameCategory(note[0].category) }
                                           id={note[0].category} ref="category"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="noteColor">Цвет:</label>
                                    <input type="color" className="form-control"
                                           defaultValue={note[0].noteColor} id="noteColor" ref="noteColor"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Описание:</label>
                                    <textarea id="description" ref="description" defaultValue={note[0].description}>

                                    </textarea>
                                </div>
                                <div className="buttons">
                                    <button className="btn btn-success" onClick={this.submit(note[0].id)}>Изменить заметку</button>&nbsp;
                                    <Link to="/" className="btn btn-primary">Назад</Link>
                                </div>
                            </form>

                        :
                            <Error />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    note : state.notesReducer.note,
    categories : state.categoriesReducer.categories
});


export default connect(mapStateToProps)(EditNoteForm);