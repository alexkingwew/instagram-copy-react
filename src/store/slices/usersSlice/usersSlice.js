import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function () {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usersData = usersResponse.data
        
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
        const postsData = postsResponse.data


        const data = usersData.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            about: user.company.catchPhrase,
            chat: [],
            posts: postsData.filter(post => post.albumId === user.id).map(el => ({
                id: el.id,
                username: el.title.slice(0, el.title.indexOf(' ')),
                disc: el.title.slice(el.title.indexOf(' ') + 1),
                img: el.url,
                likedNumber: Math.floor(Math.random() * 100000),
                comments: [],
            })),
        }))
        console.log(data);
        return data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        initialUser: {},
    },
    reducers: {
        setInitialUser(state, { payload }) {
            console.log(state.data);
            if(state.data.some(el => (el.username === payload.log || el.email === payload.log) && (el.password === payload.pass))) {
                return {
                    ...state,
                    initialUser: state.data.find(el => (el.username === payload.log || el.email === payload.log) && (el.password === payload.pass))
                }
            }
            return state
        },
        delInitialUser(state, { payload }) {
            return {
                ...state,
                initialUser: {},
            }
        },
        sendMess(state, {payload}) {
            let currentAnswer = ''
            switch (payload.toLowerCase()) {
                case 'barev':
                    currentAnswer = 'Barev'
                    break;
                default:
                    currentAnswer = 'Knereq es dzez chem haskanum'
                    break;
            }
            return {
                ...state,
                initialUser: {
                    ...state.initialUser,
                    chat: [
                        ...state.initialUser.chat,
                        {
                            id: 'me' + new Date().getTime(),
                            user: 'me',
                            txt: payload
                        },
                        {
                            id: 'you' + new Date().getTime(),
                            user: 'you',
                            txt: currentAnswer
                        }
                    ]
                },
                data: [
                    ...state.data.map(el => {
                        if(el.id === state.initialUser.id) {
                            return {
                                ...state.initialUser,
                                chat: [
                                    ...state.initialUser.chat,
                                    {
                                        id: 'me' + new Date().getTime(),
                                        user: 'me',
                                        txt: payload
                                    },
                                    {
                                        id: 'you' + new Date().getTime(),
                                        user: 'you',
                                        txt: currentAnswer
                                    }
                                ]
                            }
                        }
                        return el
                    })
                ]
            }
        },
        addNewPostInProfile(state,{payload}){
            return {
                ...state,
                initialUser: {
                    ...state.initialUser,
                    posts: [
                        payload,
                        ...state.initialUser.posts
                    ]
                },
                data: [
                    ...state.data.map(el => {
                        if (el.id === state.initialUser.id) {
                            return {
                                ...state.initialUser,
                                posts: [
                                    payload,
                                    ...state.initialUser.posts
                                ]
                            }
                        }
                        return el
                    })
                ]
            }
        },
        deletePostForInitialUser(state, { payload }) {
            // console.log(state.initialUser);
            // console.log(payload);
            // console.log(state.data);
            return {
              ...state,
              
              initialUser: {
                ...state.initialUser,
                posts: [...state.initialUser.posts.filter((el) => el.id !== payload)],
              },
            };
          },
    },
    extraReducers: {
        [fetchUsers.fulfilled] : (state, { payload }) => {
            return{
                ...state,
                data: payload,
            }
        }
    }
})

export const selectUsers = state => state.users

export const { setInitialUser, addNewPostInProfile, delInitialUser, sendMess, deletePostForInitialUser } = usersSlice.actions

export const usersReducers = usersSlice.reducer