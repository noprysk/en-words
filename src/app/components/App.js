import React, { Component } from 'react';

import Header from './../containers/HeaderContainer';
import Groups from "../../groups/containers/GroupPageContainer";

import './App.css';

class App extends Component {

    render() {
        return (
            <div className='container'>
                <Header />

                <div className="row">
                    <div className="col-sm-3 align-text-center ">
                        <Groups />
                    </div>
                    <div className="col-sm-9">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
