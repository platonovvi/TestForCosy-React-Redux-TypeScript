import {useSelector} from "react-redux";
import Loader from 'react-loader-spinner'

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading);

    return (
        <div className='loader-styles'>
            <Loader
                type='TailSpin'
                color='#00BBFF'
                height={100}
                width={100}
                //timeout={3000}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;