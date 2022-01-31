import './style.scss';

export default function Message(props) {
    return (
        <div className='messsage'>{props.text}</div>
    );
}