import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HeaderWrapper from './pages/HeaderWrapper/HeaderWrapper'
import PostsStoryPage from './pages/PostsStoryPage/PostsStoryPage'
import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import AddImg from './components/AddImg/addImg'

function App() {
  return(
    <div className='App'>
        <Routes>
          <Route path='/inst' element={<HeaderWrapper />}>
            <Route index element={<PostsStoryPage />}/>
            <Route path='chat' element={<ChatPage />}/>
            <Route path='profile' element={<ProfilePage />}/>
            <Route path='add-img' element={<AddImg />}/>
          </Route>
            <Route path='/' element={<LoginPage />}/>
          <Route path='*' element={<h2>Error 404</h2>}/>
        </Routes>
    </div>
    
  )
}

export default App