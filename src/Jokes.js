import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import uniqid from 'uniqid'
import JokeItem from './JokeItem'
import {jokeCreate, jokesLoad} from './redux/actions'

function Jokes(props) {
    const [textJoke, setTextJokes] = useState('');
    const jokes = useSelector(state => {
        const {jokesReducer} = state;
        return jokesReducer.jokes;
    });

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(jokeCreate(textJoke, id));
    }

    useEffect(() => {
        dispatch(jokesLoad());
    }, []);
    return (
        <div className='jokes-container'>
            {!!jokes.length && jokes.map(res => {
                return  <JokeItem key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Jokes;