import React from 'react'

const Selected = (props) => {

    return (
        <div className="wrap-selected">
            <div className="header">
                <label>Избранное</label>
                <div onClick={props.openSelected}>&times;</div>
            </div>
            {!props.selected.length ? <div className="header">
                <label>Пусто123</label>
            </div> : null}
            {props.error && (<div className='error-massage'>
                {props.error}
            </div>)}
            <div className='jokes-container'>
                {props.selected.length ? props.selected.map(res => {
                    return (
                        <form className='jokes-item' key={res.id}>
                            <span>{res.text}</span>
                            <div className='buttons'>
                                <div onClick={props.handleLike(res.id, res.like)}
                                     className={!!res.like && 'add-joke like' || 'add-joke'}>
                                    <i className="fa fa-solid fa-heart"></i>
                                </div>
                                <div onClick={props.handleDelete(res.id, res.id_joke)} className='add-joke'>
                                    <i className="fa fa-solid fa-times"></i>
                                </div>
                            </div>
                        </form>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default Selected;