import { useState } from "react"
export function TwitterFollowCard ({formatUserName, userName, children, initialIsFollowing }) {
    
    const [isFollowing , setIsFollowing] = useState(initialIsFollowing );
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handelClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="Avatar" 
                src={`https://unavatar.io/github/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handelClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}