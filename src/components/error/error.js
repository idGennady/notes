import React, { Component } from 'react';
import { Link } from 'react-router'
import MdNotInterested from 'react-icons/lib/md/not-interested';

class Error extends Component{

    render(){
        return(
            <div className="error-page">
                <p>
                    <MdNotInterested /> <br/>
                    Страница не найдена
                </p>
                <Link to="/">
                    Перейти на главную
                </Link>
            </div>
        )
    }
}

export default Error;