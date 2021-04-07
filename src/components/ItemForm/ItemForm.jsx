import './ItemForm.css';
import { useState, useCallback } from 'react';

const ItemForm = (props) => {

    const [song, setSong] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = useCallback ((event) =>{
        event.preventDefault();
        props.onSave(song, author);
    }, [song, author, props]);

    return (
        <form className='item-form' onSubmit = {handleSubmit}>
            <div class='form-item'>
                <lable class='form-lable' htmlFor='song'>Song:</lable>
                <input 
                    className='form-control' 
                    type='text' 
                    name='song' 
                    id='song' 
                    onChange = {(event) => setSong(event.target.value)}
                />         
            </div>
            <div class='form-item'>
                <lable class='form-lable' htmlFor='author'>Author:</lable>
                <input 
                    className='form-control' 
                    type='text' 
                    name='author' 
                    id='author' 
                    onChange = {(event) => setAuthor(event.target.value)}
                />
            </div>
            <div class='form-item'>
                <lable class='form-lable' htmlFor='status'>Status:</lable>
                <select className='form-control' name='status' id='status'>
                    <option value='Stop'>Stop</option>
                </select>
            </div>
            <div className='centered'>
                <button type='submit'>Save</button>
            </div>
        </form>
    );
}

export default ItemForm;