import uniqid from 'uniqid'

const Jokes = ({props}) => {
    return (
        <div className='jokes-container'>
            {props.jokes.length && props.jokes.map(res => {
                return <form className={res.added && 'jokes-item added' || 'jokes-item'} key={res.id}>
                    <span>{res.text} {res.added}</span>
                    {!res.added &&
                    <div onClick={props.handleCreate(res.text, uniqid(), res.like, res.id)} className='add-joke'>
                        <i className="fa fa-solid fa-plus"></i>
                    </div>
                    || <div className='add-joke check'>
                        <i className="fa fa-solid fa-check"></i>
                    </div>
                    }
                </form>
            })}
        </div>
    )
}

export default Jokes;