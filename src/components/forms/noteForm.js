import React, { Component } from 'react';
import { Link } from 'react-router';


class NoteForm extends Component{

    constructor(props){
        super(props);

        this.selectCategory = this.selectCategory.bind(this);
    }

    selectCategory(){
        console.log('here')
    }

    render(){
        const { date } = this.props;
        return(
            <form className="add-note-form">
                <div className="form-group">
                    <label htmlFor="date">Дата :</label>
                    <input type="date" className="form-control" id="date" defaultValue={date}/>
                </div>
                <div className="form-group">
                    <div className="radio">
                        <label>
                            <input type="radio" name="category" defaultChecked="true" id="category"
                                   onClick={this.selectCategory}
                            />
                            Выбрать категорию
                        </label>&nbsp;&nbsp;
                        <label>
                            <input type="radio" name="category" id="addCategory"
                                      onClick={this.selectCategory}
                            />
                            Добавить категорию
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Описание :</label>
                    <textarea id="description">

                    </textarea>
                </div>
                <div className="buttons">
                    <button className="btn btn-success">Добавить заметку</button>&nbsp;
                    <Link to="/" className="btn btn-primary">Назад</Link>
                </div>
            </form>
        )
    }
}

const today = new Date();
NoteForm.defaultProps = {
    date     : today.getFullYear() +'-'+ today.getMonth()+ 1 +'-'+ today.getDate(),
};

export default NoteForm;