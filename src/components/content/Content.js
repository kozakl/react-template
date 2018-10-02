import React from 'react';
import style from './Content.css';
/**
 * @author kozakluke@gmail.com
 */
export default class Content extends React.Component
{
    onClick = ()=>
    {
        console.log('click!');
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <button className={style.button} onClick={this.onClick}>Click</button>
            </div>
        );
    }
}
