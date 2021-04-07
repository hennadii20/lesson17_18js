import { useState, useCallback } from 'react';
import Button from '../Button/Button';
import ItemForm from '../ItemForm/ItemForm';


function generateId(){
    return `num-${Math.random().toString(36).substr(2,9)}`;
}

function App() {
    const [isFormVisible, changeFormVisibility] = useState(false);
    const [list, changeList] = useState([
        {id: "num-001", song: "Wind of change", author: 'Scorpions', status: 'Stop'},
        {id: "num-002", song: 'Тримай', author: 'Океан Єльзи', status: 'Stop'},
        {id: "num-003", song: 'The Unforgiven', author: 'Metallica', status: 'Stop'},
        {id: "num-004", song: 'Кукушка', author: 'Кино', status: 'Stop'},
    ]);

    const handleCreateNewTrack = useCallback(() => {
        changeFormVisibility(true);
    }, []);

    const createNewTrack = useCallback((song, author, status) => {
        console.log('new track:', {id : generateId(), song, author, status});
        changeList((prevState) =>{
            const newState = prevState.concat([{id : generateId(), song, author, status}]);
            return newState;
        })
        changeFormVisibility(false);
    }, []);

    const handleDelete = useCallback((id) => {
        changeList((prevState) =>{
            const newState = prevState.filter((item) => {
                return item.id !== id;
            });
            return newState;
        })
    }, []);
        
    return (
        <div className = 'app'>
            {list.map((Item) => {
                return (
                    <Button
                        key = {Item.id}
                        id = {Item.id}
                        song = {Item.song}
                        author = {Item.author}
                        status = {Item.status}
                        onDelete = {handleDelete}
                    />
                );
            })}
            
            {isFormVisible ?(<ItemForm onSave={createNewTrack}/>) : null}

            <div clsssName = "centered">
                <button onClick = {handleCreateNewTrack}>Create new track</button>
            </div>
        </div>
    )
}

export default App;
