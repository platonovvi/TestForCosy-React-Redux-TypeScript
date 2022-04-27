import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {jokeDelete, jokeLike} from "./redux/actions";

function JokeItem({data}) {
    const [jokeText, setTextJokes] = useState('');
    const {text, id, like, id_joke} = data;
    const dispatch = useDispatch();

    const handleLike = (e) => {
        e.preventDefault();
        dispatch(jokeLike(id, like));
    }
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(jokeDelete(id, id_joke));
    }

    useEffect(() => {
        if (text) {
            setTextJokes(text);
        }
    }, [text]);
    return (
        <form className='jokes-item'>
            <span>{jokeText}</span>
            <div className='buttons'>
                <div onClick={handleLike} className={!!like && 'add-joke like' || 'add-joke'}>
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