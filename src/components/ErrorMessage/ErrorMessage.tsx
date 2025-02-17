import s from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <p className={s.errorTxt}>Something went wrong please try again...</p>
    );
}

export default ErrorMessage;