import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { addNewNote } from '../../actions/notesAction';
import { addCategory } from '../../actions/categoriesAction';

import SelectCategories from './selectCategories';
import FaPlus from 'react-icons/lib/fa/plus';


class NoteForm extends Component{


    submit = (event) => {
        event.preventDefault();

        let refs = this.refs;

        let note = {
            id          : Date.now(),
            date        : refs.date.value,
            noteColor   : refs.noteColor.value,
            category    : refs.category.refs.category.options[refs.category.refs.category.selectedIndex].value,
            description : refs.description.value
        };

        this.props.dispatch(addNewNote(note));
        browserHistory.push('/');
    };

    modalAddCategory = () => {
        let modal = document.querySelector('.modal-add-category').classList;

        modal.contains('open') ? modal.remove('open') : modal.add('open');
    };

    addCategoryMethod = () => {

        let category = {
            title       : this.refs.titleCategory.value,
            subcategory : [
                {
                    title : this.refs.titleSubcategory.value
                }
            ]
        };

        this.props.dispatch(addCategory(category));
        this.modalAddCategory();

    };

    render(){
        const { date, categories } = this.props;
        return(
            <div>
                <form className="add-note-form">
                    <div className="form-group">
                        <label htmlFor="date">Дата:</label>
                        <input type="date" className="form-control" id="date" defaultValue={date} ref="date"/>
                    </div>
                    <div className="form-group categories-group">
                        <label htmlFor="category-list">Выберите категорию:</label>
                        <span className="add-new-category" title="Добавить новую категорию" onClick={this.modalAddCategory}>
                        <FaPlus />
                    </span>
                    {
                        categories
                            ?
                                <SelectCategories categories={categories} ref="category" />
                            :
                                null
                    }
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteColor">Цвет:</label>
                        <input type="color" className="form-control"
                               defaultValue="#ffcccc" id="noteColor" ref="noteColor"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Описание:</label>
                        <textarea id="description" ref="description">
                    </textarea>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-success" onClick={this.submit}>Добавить заметку</button>&nbsp;
                        <Link to="/" className="btn btn-primary">Назад</Link>
                    </div>
                </form>
                <form className="modal-add-category">
                    <div className="form-group">
                        <label htmlFor="name-category">Название категории:</label>
                        <input type="text" className="form-control" id="name-category"
                               defaultValue="" ref="titleCategory" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name-subcategory">Название подкатегории:</label>
                        <input type="text" className="form-control" id="name-subcategory"
                               defaultValue="" ref="titleSubcategory" />
                    </div>
                    <div className="buttons">
                        <button type="button" className="btn btn-success" onClick={this.addCategoryMethod}>Добавить заметку</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.modalAddCategory}>Отмена</button>
                    </div>
                </form>
            </div>
        )
    }
}

const today = new Date();
NoteForm.defaultProps = {
    date       : today.getFullYear() +'-'+ today.getMonth()+ 1 +'-'+ today.getDate()
};

const mapStateToProps = state => ({
    categories : state.categoriesReducer.categories
});

export default connect(mapStateToProps)(NoteForm);