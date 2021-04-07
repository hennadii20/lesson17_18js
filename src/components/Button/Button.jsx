import {useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import './Button.css';




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
    <Card class="card" border="danger"  bg="light" style={{ width: '20rem' }}>
        <Card.Body>   
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
                <div class="button_group">
                <button class='item-button' onClick = {changeStatus}>{state}</button>
                <button class='item-button' onClick = {handleDeleteItem}>Delete</button>
                </div>
            </div>
        </Card.Body>
    </Card>
    )
}

export default Button;