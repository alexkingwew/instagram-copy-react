import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import post from '../../images/postImages';
import { selectUsers, sendMess } from '../../store/slices/usersSlice/usersSlice'
import './Chat.css'

const styleMess = {
    'me': {
        marginLeft: '558px',
        marginBottom: '20px',
    },
    'you': {
        marginLeft: '100px',
        backgroundColor:'rgb(0, 123, 255)',
        color:'#fff',
        border:'none'
    },
} 



function Chat() {
    const { initialUser } = useSelector(selectUsers)
    const dispatch = useDispatch()
    const formRef = useRef(null)


    const handlerSubmit = (e) => {
        e.preventDefault()

        if (formRef.current[0].value !== '') {
        dispatch(sendMess(formRef.current[0].value))
        }
        
        formRef.current[0].value = ''
    }
    return (
        <div className='chat'>
            <div className='chat-header'>
                <img src={post.postUserImage} alt='img' />
                <b>{initialUser.username}</b>
            </div>
            <div className='chat-messages'>
                {
                    initialUser.chat.map((message) => (
                    <p className='chat-mess' key={message.id} style={styleMess[message.user]}>
                        {message.txt}
                    </p>
                    ))
                }
            </div>
            <div className='chat-form'>
                <form ref={formRef} onSubmit={handlerSubmit}>
                <input type='text' placeholder='Send Message' />
                <button>Отправить</button>
                </form>
                
            </div>
        </div>
    )
}

export default Chat