import {useSelector} from "react-redux";
import {TailSpin} from 'react-loader-spinner'

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading);

    return (
        <div className='spinner'>
            <TailSpin
                color='grey'
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;