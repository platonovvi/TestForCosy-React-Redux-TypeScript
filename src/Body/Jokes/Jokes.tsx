import uniqid from 'uniqid'
import {JokesType, SelectedType} from "../../redux/types";
import React from "react";

type Props = {
handleCreate: /*(jokeText: string, id:string, like:boolean, id_joke:number) => void*/ any,
jokes: Array<JokesType>
}
const Jokes: React.FC<Props> = ({jokes, handleCreate}) => {
    return (
        <div className='jokes-container'>
            {jokes.length && jokes.map(res => {
                return <form className={res.added && 'jokes-item added' || 'jokes-item'} key={res.id}>
                    <span>{res.text} {res.added}</span>
                    {!res.added ?
                    <div onClick={handleCreate(res.text, uniqid(), res.like, res.id)} className='add-joke'>
                        <i className="fa fa-solid fa-plus"></i>
                    </div>
                   : <div className='add-joke check'>
                        <i className="fa fa-solid fa-check"></i>
                    </div>
                    }
                </form>
            })}
        </div>
    )
}

export default Jokes;