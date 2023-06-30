import { Link } from 'react-router-dom'

import './ShortStory.scss'

const ShortStories = (article) => {
    return (
        <div className={`qa-article-wrapper ${article.hidden ? 'qa-hidden' : ''}`}>
            <img
                src={article.imgURL}
                alt="article-image"
                style={{
                    width: '100%',
                }}
            />
            <div className="qa-article-container">
                <div className="qa-article-content">
                    <p
                        className="qa-heading"
                        style={{
                            marginBottom: '20px',
                            marginTop: '0px',
                            textAlign: 'left',
                            fontSize: '14px',
                        }}
                    >
                        {article.headings}
                    </p>
                    <p className="qa-content-paragraph">
                        {article.text}
                    </p>
                </div>
                <div className="qa-article-xemthem">
                    <Link
                        to={article.path}
                        style={{
                            padding: '14px 20px',
                            marginBottom: '32px',
                            textDecoration: 'none',
                            color: 'rgb(97, 97, 97)',
                            fontSize: '12px',
                            fontWeight: '600'
                        }}
                    >
                        XEM THÊM
                    </Link>
                </div>
                <div className="qa-article-readmore">
                    <Link 
                        to={article.path}
                        style={{
                            padding: '13px 20px',
                            borderRadius: '7px',
                            color: 'white',
                            backgroundColor: '#f4524d',
                            textDecoration: 'none', 
                            fontSize: '14px',
                            position: 'absolute',
                        }}
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShortStories