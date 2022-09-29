import React from 'react';
import post from '../../images/postImages';
import './Profile.css'
import { AiOutlineInsertRowAbove } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostForInitialUser, selectUsers } from '../../store/slices/usersSlice/usersSlice';
import { deletePost } from '../../store/slices/postsSlice/postsSlice';


function Profile() {
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()

    return (
        <div className='profile'>
            <div className='profile-header'>
                <div className='profile-img'>
                    <img src={post.postUserImage} alt='' />
                </div>
                <div className='profile-name-follow'>
                    <div className='profile-name'>
                        <h2>{users.initialUser.username}</h2>
                    </div>
                    <div className='profile-follow-count'>
                        <span><b>3</b>публикаций</span>
                        <span><b>434</b>подписчиков</span>
                        <span><b>350</b>подписок</span>
                    </div>
                    <div className='profile-discription'>
                        <b>{users.initialUser.name}</b>
                        <p>{users.initialUser.about}</p>
                    </div>
                </div>
            </div>
            <div className='profile-post-line'>
                <div className='line'></div>
                <div className='line-icon-text'>
                    <AiOutlineInsertRowAbove className='line-icon' />
                    <b>ПУБЛИКАЦИИ</b>
                </div>
                <div className='line'></div>
            </div>
            <div className='profile-post'>
                {
                    users.initialUser.posts.map((post) =>
                        <div className='post-prof' key={post.id}>
                            <img src={post.img} alt=''  />
                            <span onClick={() => {dispatch(deletePostForInitialUser(post.id))
                            dispatch(deletePost(post.id))}} className="del">&times;</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Profile