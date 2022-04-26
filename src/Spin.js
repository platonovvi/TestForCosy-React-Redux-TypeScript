import {useSelector} from "react-redux";
import {RevolvingDot} from 'react-loader-spinner'

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading);

    return (
        <div className='loader-styles'>
            <RevolvingDot
                color='grey'
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;