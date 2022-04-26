import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {jokeCreate, jokeUpdate, jokeDelete} from "./redux/actions";
import uniqid from "uniqid";

function JokeItem({data}) {
    const [jokeText, setTextJokes] = useState('');
    const {text, id, like} = data;
    const dispatch = useDispatch();
    const handleCreate = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(jokeCreate(jokeText, id, like));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(jokeUpdate(jokeText, id));
    }
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(jokeDelete(id));
    }

    useEffect(() => {
        if (text) {
            setTextJokes(text);
        }
    }, [text]);
    return (
        <form onSubmit={handleUpdate} className='jokes-item'>
            <span>{jokeText}</span>
            <div onClick={handleCreate} className='add-joke'>
                <i className="fa fa-solid fa-plus"></i>
            </div>
        </form>
    )
}

export default JokeItem;