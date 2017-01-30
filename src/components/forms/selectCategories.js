import React, { Component } from 'react';

class SelectCategories extends Component{
    render(){
        const { categories } = this.props;

        const depthToSpaces = (depth) => {
            let spaces = '';
            for (let i = 1; i <= depth; i++) {
                spaces = spaces + '\u00a0'
            }
            return spaces
        };

        const printChildren = (id, depth) => {
            let res = [];
            const children = categories.filter((i) => i.parent === id);
            children.map(i => {
                res.push(<option value={i.id} key={i.id} style={ id === 0 ? {fontWeight: 'bold'} : {} }>{`${depthToSpaces(depth)}${i.name}`}</option>)
                res = [...res, printChildren(i.id, depth + 2)];
                return res
            });
            return res
        };

        return (
            <select className="form-control" id="category-list" ref="category">
                { printChildren(0, 0) }
            </select>
        )
    }
}


export default SelectCategories;