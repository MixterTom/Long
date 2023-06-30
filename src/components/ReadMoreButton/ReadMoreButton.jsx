import readMoreBtn from '../../assets/khoi-nghiep-kien-quoc/readmore2.jpg'
import './ReadMoreButton.scss'

const ReadMoreButton = () => {
    return (
        <>
            <span className="qa-read-more">
                <span className='qa-more-container'>
                    <div
                        className='qa-more-icon'
                        style={{
                            background: `url(${readMoreBtn}) no-repeat center center`,
                            backgroundSize: 'contain',
                        }}
                    >
                    </div>
                    <span
                        className="qa-read-more-btn"
                    >
                        XEM THÊM
                    </span>
                </span>
            </span>
        </>
    )
}

export default ReadMoreButton