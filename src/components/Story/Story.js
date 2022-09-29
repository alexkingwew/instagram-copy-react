import React from 'react';
import post from '../../images/postImages';
import StoryMaket from '../StoryMaket/StoryMaket';
import './Story.css'

function Story() {
    const storyInf = [
        {
            id: 0,
            img: post.postUserImage,
            name: 'Gev',
        },
        {
            id: 1,
            img: post.postUserImage,
            name: 'Hakob',
        },
        {
            id: 2,
            img: post.postUserImage,
            name: 'Sargis',
        },
        {
            id: 3,
            img: post.postUserImage,
            name: 'Erik',
        },
        {
            id: 4,
            img: post.postUserImage,
            name: 'David',
        },
    ]
    return(
        <div className='story'>
            {
                storyInf.map(user => <StoryMaket name={user.name} img={user.img} key={user.id} />)
            }
        </div>
    )
}

export default Story