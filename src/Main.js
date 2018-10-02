import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import './Main.css';
/**
 * @author kozakluke@gmail.com
 */
class Main
{
    static instance = new Main();
    
    constructor()
    {
        window.onload = this.onLoad.bind(this);
    }
    
    /**
     * @private
     */
    onLoad()
    {
        ReactDOM.render(
            <Content/>,
            document.getElementById('main')
        );
    }
}
