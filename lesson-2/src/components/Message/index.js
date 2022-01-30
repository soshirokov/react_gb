import './style.scss';

export default function Message({ text, author, data }) {
    const isBot = author === 'Bot' ? 'isBot' : '';
    return (
        <div className={'message ' + isBot}>
            <div className={'message__author'}>{author}</div>
            <div className='message__text'>{text}</div>
            <div className='message__data'>{data}</div>
        </div>
    );
}