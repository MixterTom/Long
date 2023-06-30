import { useState } from 'react'
import { articles } from '../../../data/articles'
import ShortStory from '../ShortStory/ShortStory'

import './ListStories.scss'

const ListStories = () => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className='qa-stories-wrapper row'>
            {articles.map( article => {
                const { id, imgURL, headings, text, path } = article
                return (
                    <div 
                        className="qa-stories-item col-lg-4"
                        key={id}
                    >
                        <ShortStory
                            id={id}
                            imgURL={imgURL}
                            headings={headings}
                            text={text}
                            path={path}
                            hidden={id <= 10 ? false : hidden}
                        />
                    </div>
                )
            })}
            <div className="qa-list-load-more">
                <button 
                    className="qa-list-load-more-btn"
                    onClick={() => {
                        setHidden(false)
                        const btn = document.querySelector('.qa-list-load-more')
                        btn.classList.add('qa-hidden')
                    }}
                >
                    Load more
                </button>
            </div>
        </div>
    )
}

export default ListStories