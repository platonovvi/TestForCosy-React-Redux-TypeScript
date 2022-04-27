import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {jokeCreate, jokeUpdate, jokeDelete, jokeLike} from "./redux/actions";
import uniqid from "uniqid";

function JokeItem({data}) {
    const [jokeText, setTextJokes] = useState('');
    const {text, id, like} = data;
    const dispatch = useDispatch();
    const handleCreate = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(jokeCreate(jokeText, id));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(jokeUpdate(jokeText, id));
    }
    const handleLike = (e) => {
        e.preventDefault();
        dispatch(jokeLike(id, like));
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
            <div className='buttons'>
            <div onClick={handleLike} className={!!like && 'add-joke like' || 'add-joke'} disabled={jokeText}>
                <i className="fa fa-solid fa-heart"></i>
            </div>
            <div onClick={handleDelete} className='add-joke'>
                <i className="fa fa-solid fa-times"></i>
            </div>
            </div>
        </form>
    )
}

export default JokeItem;