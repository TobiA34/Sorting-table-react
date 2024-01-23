import CaretLogo from '../icon/up-and-down-arrows-svgrepo-com.svg'

const Caret = ({direction}) => {
    return <img src={CaretLogo} alt="" className={direction} />;
}

export default Caret