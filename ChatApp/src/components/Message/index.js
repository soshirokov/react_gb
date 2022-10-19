import './style.scss';

export const Message = ({ text, author, date }) => {
    const isBot = author === 'Bot' ? 'isBot' : '';
    return (
        <div className={'message ' + isBot}>
            <div className={'message__author'}>{author}</div>
            <div className='message__text'>{text}</div>
            <div className='message__data'>{date}</div>
        </div>
    );
}