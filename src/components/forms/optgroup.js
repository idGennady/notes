import React, { Component } from 'react';

class Optgroup extends Component{

    render(){
        const { title, subcategory } = this.props;
        return(
            <optgroup label={title}>
                {
                    subcategory.map((sub, index) => {
                        return <option key={index}>{sub.title}</option>
                    })
                }
            </optgroup>
        )
    }
}

export default Optgroup;