import React, { Component } from 'react';

class SelectCategories extends Component{

    option = (category) => {
        // get parent and append element
        return <option value={category.name} key={category.id}>{category.name}</option>
    };

    render(){
        const { categories } = this.props;
        return(
            <select className="form-control" id="category-list" ref="category">
                {
                    categories.map((category) => {
                        if(category.parent === 0){
                            return <optgroup key={category.id} label={category.name}></optgroup>
                        } else {
                            return this.option(category)
                        }
                    })
                }
            </select>
        )
    }
}

export default SelectCategories;