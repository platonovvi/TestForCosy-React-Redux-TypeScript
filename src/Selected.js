import {useState} from 'react'
import {useSelector} from "react-redux";
import SelectedItem from './SelectedItem'

function Jokes(props) {
    const [textJoke, setTextJokes] = useState('');
    const selected = useSelector(state => {
        const {jokesReducer} = state;
        return jokesReducer.selected;
    });

    return (

        <div className='jokes-container'>
            {!!selected.length && selected.map(res => {
                return <SelectedItem key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Jokes;