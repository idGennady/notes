import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { addNewNote } from '../../actions/notesAction';
import { addCategory } from '../../actions/categoriesAction';

import SelectCategories from './selectCategories';
import FaPlus from 'react-icons/lib/fa/plus';


class NoteForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            typeCategory : null,
            visible      : false
        }
    }


    submit = (event) => {
        event.preventDefault();

        let refs = this.refs;

        let note = {
            id          : Date.now(),
            date        : refs.date.value,
            noteColor   : refs.noteColor.value,
            category    : parseInt(refs.category.refs.category.options[refs.category.refs.category.selectedIndex].value, 10),
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

        let category = {};

        if(!this.refs.categoryRadio.checked && !this.refs.subcategoryRadio.checked) return;

        if(this.refs.categoryRadio.checked && (this.refs.nameCategory.value.length > 0)){
            category = {
                id     : Date.now(),
                name   : this.refs.nameCategory.value,
                parent : 0
            };
        }

        if(this.refs.subcategoryRadio.checked && (this.refs.nameSubcategory.value.length > 0)){
            category = {
                id     : Date.now(),
                name   : this.refs.nameSubcategory.value,
                parent : parseInt(this.refs.addCategory.refs.category.options[this.refs.addCategory.refs.category.selectedIndex].value, 10)
            };
        }

        if(Object.keys(category).length === 0){
            return
        } else {
            this.props.dispatch(addCategory(category));
            this.modalAddCategory();
        }


    };

    selectType = (type) => () => {
        this.setState({
            typeCategory: type,
            visible     : true
        });
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
                        <div className="radio">
                            <label><input type="radio" name="category"
                                          onClick={this.selectType(true)}
                                          ref="categoryRadio"
                            />Добавить категорию</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="category"
                                          onClick={this.selectType(false)}
                                          ref="subcategoryRadio"
                            />Добавить подкатегорию</label>
                        </div>
                    </div>
                    {
                        this.state.visible
                            ?
                                this.state.typeCategory
                                    ?
                                        <div className="form-group">
                                            <label htmlFor="name-category">Название категории:</label>
                                            <input type="text" className="form-control" id="name-category"
                                                   defaultValue="" ref="nameCategory" />
                                        </div>
                                    :
                                        <div className="form-group">
                                            {
                                                categories
                                                    ?
                                                    <div>
                                                        <label>Выберите категорию:</label>
                                                        <SelectCategories categories={categories} ref="addCategory" />
                                                    </div>
                                                    :
                                                    null
                                            }
                                            <label htmlFor="name-subcategory">Название подкатегории:</label>
                                            <input type="text" className="form-control" id="name-subcategory"
                                                   defaultValue="" ref="nameSubcategory" />
                                        </div>
                            :
                                null
                    }
                    <div className="buttons">
                        <button type="button" className="btn btn-success" onClick={this.addCategoryMethod}>Добавить</button>&nbsp;
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