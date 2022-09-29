import React, { useRef } from 'react'
import './addImg.css'
import { GrGallery } from 'react-icons/gr'
import { useSelector, useDispatch } from 'react-redux'
import { addNewPostInProfile, selectUsers } from '../../store/slices/usersSlice/usersSlice'
import { addNewPost } from '../../store/slices/postsSlice/postsSlice'
import {useNavigate} from 'react-router-dom'

const AddImg = () => {
  const navigate = useNavigate()
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const { initialUser } = useSelector(selectUsers)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (formRef.current[0].value) {
      const newPost = {
        id: new Date().getTime().toString(),
        username: initialUser.username,
        disc: formRef.current[1].value,
        img: formRef.current[0].value,
        likedNumber: Math.floor(Math.random() * 100),
        comments: []
      }
      dispatch(addNewPost(newPost))
      dispatch(addNewPostInProfile(newPost))  
      navigate('/inst')
    }

    formRef.current[0].value = ''
    formRef.current[1].value = ''
  }
  return (
    <div className='add-img'>
      <h1>Создание публикации</h1>
      <GrGallery size='60px' className='gall-icon' />
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type='text' placeholder='url' /><br /><br />
        <input type='text' placeholder='описание' /><br /><br />
        <button>Добавить новый пост</button>
      </form>
    </div>
  )
}

export default AddImg