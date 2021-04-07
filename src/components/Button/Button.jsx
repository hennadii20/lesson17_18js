import {useState, useCallback } from 'react';
import '../TodoItem/TodoItem.css';

function Button(props){
    const [state, setState] = useState('Stop');
    const changeStatus = useCallback(() => {
        if(state === 'Play'){
            setState('Stop');
        }else{
            setState('Play');
        }
    }, [state]);

    const handleDeleteItem = useCallback(() => {
        props.onDelete(props.id);
    }, [props]);
    
    return (
        <div className={`item-wrapper  is-${state}`}>
            <div className={`item-song has-${state}`}>
                {props.song}
            </div>
            <div className={`item-author has-${state}`}>
                {props.author}
            </div>
            <div className={`item-status item-status-${state}`}>
                {state}
            </div>
            <button class='item-button' onClick = {changeStatus}>{state}</button>
            <button class='item-button' onClick = {handleDeleteItem}>Delete</button>
        </div>
    )
}

export default Button;