import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import uniqid from 'uniqid'
import SelectedItem from './SelectedItem'
import {jokeCreate} from './redux/actions'

function Jokes(props) {
    const [textJoke, setTextJokes] = useState('');
    const selected = useSelector(state => {
        const {jokesReducer} = state;
        return jokesReducer.selected;
    });

    const dispatch = useDispatch();
    const handleInput = (e) => {
        setTextJokes(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(jokeCreate(textJoke, id));
    }
    return (

        <div className='jokes-container'>
            {/*<form onSubmit={handleSubmit} className='jokes-item'>
                <input type='text' value={textJoke} onChange={handleInput}/>
            </form>*/}

            {!!selected.length && selected.map(res => {
                return  <SelectedItem key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Jokes;