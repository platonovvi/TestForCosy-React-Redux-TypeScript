import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {jokeCreate, jokeUpdate, jokeDelete} from "./redux/actions";
import uniqid from "uniqid";

function JokeItem({data}) {
    const [jokeText, setTextJokes] = useState('');
    const {text, id, like, added} = data;
    const id_joke = id;
    const dispatch = useDispatch();
    const handleCreate = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(jokeCreate(jokeText, id, like, id_joke));
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
        <form onSubmit={handleUpdate} className={added && 'jokes-item added' || 'jokes-item'} disabled>
            <span>{jokeText} {added}</span>
            {!added && <div onClick={handleCreate} className='add-joke'>
                <i className="fa fa-solid fa-plus"></i>
            </div>
            || <div className='add-joke check'>
                <i className="fa fa-solid fa-check"></i>
            </div>
            }

        </form>
    )
}

export default JokeItem;