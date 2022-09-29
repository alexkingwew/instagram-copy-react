import React, { useRef } from 'react';
import { FaRegComment } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import post from '../../images/postImages';
import './Post.css'
import { useDispatch, useSelector } from 'react-redux';
import { resetText, selectText, toggleText } from '../../store/slices/textSlice/textSlice';
import { addComment, selectPosts } from '../../store/slices/postsSlice/postsSlice';
import { selectUsers } from '../../store/slices/usersSlice/usersSlice';
import withLessMore from '../../hoc/withLessMore';

function Post({ id, disc, username, img, likedNumber, comments, commentId, show, toggleShow }) {
    const dispatch = useDispatch();
    const text = useSelector(selectText);
    const { initialUser } = useSelector(selectUsers)
    const formRef = useRef(null)


    const submit = (e) => {
        e.preventDefault();
        if (formRef.current[0].value) {
          dispatch(
            addComment({
              id: id,
              username: initialUser.username,
              text: formRef.current[0].value,
            })
          );
          formRef.current[0].value = "";
        }
      }

    return (
        <div className='post'>
            <div className='postHeader'>
                <div className='postHeader-item1'>
                    <img src={post.postUserImage} alt='' />
                    <h3>{username}</h3>
                </div>
            </div>
            <div className='postImage'>
                <img src={img} alt='' />
            </div>
            <div className='postIcon'>
                <div className='postIcon-item1'>
                    <a href='#'><FiHeart /></a>
                    <a href='#'><FaRegComment /></a>
                </div>

            </div>
            <div className='postLikes'>
                <h3>{likedNumber} Нравится</h3>
                <p>1 час назад</p>
            </div>
            <div className='postDiscription'>
                <b>{username}</b>
                <span>{disc}</span>
            </div>
            <div style={{display: !show ? 'none' : 'block'}} className='comments'>
                {
                    comments.map(comment => (
                        <div className='postDiscription' key={comment.id}>
                            <b>{comment.username}</b>
                            <span>{comment.body}</span>

                        </div>
                    ))
                }
            </div>
            <h2
                style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: 'grey',
                    fontSize: '15px',
                    textDecoration: 'none',
                    marginLeft: '10px',
                    marginBottom: '10px',
                    width:'fit-content'
                }}
                onClick={toggleShow}
            >
                {show ? 'Скрыть комментарии' : `Все комментарии ${comments.length}` }
            </h2>
            <div className='postComment'>
                <form ref={formRef} onSubmit={submit}>
                <input onFocus={() => {

                    if(!show) {
                        toggleShow()
                    }
                }} type='text' placeholder='Введите комментарий...'  />
                <button>Отправить</button>
                </form>
               
            </div>
        </div>
    )
}

export default withLessMore(Post)