import { Link } from 'react-router-dom'
import banner from '../../assets/articles/banner.jpg'
import bannerMobile from '../../assets/articles/banner-mb.jpg'
import widget1 from '../../assets/articles/articlePage/widget1.jpg'
import widget3 from '../../assets/articles/articlePage/widget3.jpg'
import widget4 from '../../assets/articles/articlePage/widget4.jpg'
import img1 from '../../assets/hanh-trinh-tu-trai-tim/story1.jpg'
import img2 from '../../assets/hanh-trinh-tu-trai-tim/story2.jpg'
import img3 from '../../assets/hanh-trinh-tu-trai-tim/story3.jpg'
import img5 from '../../assets/hanh-trinh-tu-trai-tim/story5.jpg'

import './ArticleContent.scss'
import FrameText from './FrameText/FrameText'

const ArticleContent = (article) => {
    const { page } = article
    const { begining, text, ending } = page
    return (
        <>
            <img
                src={banner}
                alt="article-banner"
                className='article-banner-d'
            />
            <img
                src={bannerMobile}
                alt="article-banner"
                className='article-banner-m'
            />
            <div className="qa-news-wrapper">
                <div className="qa-news-container">
                    <div className="qa-menu-container">
                        <ul className="qa-menu-tin-tuc">
                            <li
                                className="qa-menu-item qa-menu-item-chosen"
                                style={{
                                    fontWeight: 'bold',
                                }}
                            >
                                <a
                                    href=""
                                    style={{
                                        padding: '15px',
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >TIN TỨC - SỰ KIỆN</a>
                                <div className="qa-menu-underline"></div>
                            </li>
                            <li
                                className="qa-menu-item"
                                style={{
                                    opacity: '0.5',
                                }}
                            >
                                VIDEO
                                <div className="qa-menu-not-chosen"></div>
                            </li>
                            <li
                                className="qa-menu-item"
                                style={{
                                    opacity: '0.5',
                                }}
                            >
                                CÔNG BỐ SẢN PHẨM
                                <div className="qa-menu-not-chosen"></div>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="qa-content-container row"
                        style={{
                            margin: '20px 10px 0 10px'
                        }}
                    >
                        <div className="qa-news-content col-lg-8">
                            <h1
                                className='qa-news-title'
                            >
                                {begining.title}
                            </h1>
                            <div className='qa-time-container'>
                                <div className="qa-news-time">
                                    <i className="bi bi-calendar"></i>
                                    &nbsp;{begining.date}
                                </div>
                                <div className="qa-news-views">
                                    <i className="bi bi-eye"></i>
                                    &nbsp;{begining.views}
                                </div>
                            </div>
                            <p
                                style={{
                                    color: '#616161',
                                }}
                            >
                                <em>
                                    {begining.quote}
                                </em>
                            </p>
                            <h2 style={{
                                textAlign: 'center',
                                marginBottom: '25px',
                            }}>
                                <strong>
                                    <img
                                        src={begining.titleImg}
                                        alt=""
                                        className='qa-post-title-img'
                                    />
                                </strong>
                            </h2>
                            {
                                begining.frameText === true ? <FrameText /> : ''
                            }
                            {
                                text.map(part => {
                                    const paragraphs = part.paragraphs
                                    return (
                                        <>
                                            <h2
                                                className="qa-news-subtitle"
                                                style={{
                                                    marginTop: '30px',
                                                    marginBottom: '20px',
                                                    color: '#171c24',
                                                    fontSize: '20px',
                                                }}
                                            >
                                                <strong>
                                                    {part.subtitle}
                                                </strong>
                                            </h2>
                                            {
                                                paragraphs.map((paragraph, index) => {
                                                    return (
                                                        <p key={index}
                                                            style={{
                                                                margin: '0 0 20px 0',
                                                                color: '#616161',
                                                                lineHeight: 1.8,
                                                                overflow: 'hidden',
                                                            }}
                                                        >
                                                            {paragraph.subImg === 'none'
                                                                ? ''
                                                                : <img
                                                                    src={paragraph.subImg}
                                                                    style={{
                                                                        width: '100%',
                                                                        marginBottom: '14px',
                                                                    }}
                                                                />
                                                            }
                                                            {paragraph.content}
                                                        </p>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }
                            {
                                ending.frameText === 'none' ? '': ending.frameText
                            }
                            <div
                                className="qa-post-ending-video"
                                style={{
                                    background: `url(${ending.video.background})`,
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <p style={{
                                textAlign: 'center',
                                color: '#616161',
                            }}>
                                <em>
                                    {begining.title}
                                </em>
                            </p>
                            <p style={{
                                textAlign: 'center',
                                color: '#616161',
                            }}>
                                <strong>
                                    TRI THỨC LÀ ÁNH SÁNG!<br />
                                </strong>
                                <strong>
                                    TRI THỨC LÀ SỨC MẠNH CỦA DÂN TỘC!
                                </strong>
                            </p>
                            <p style={{
                                textAlign: 'center',
                                color: '#616161',
                            }}>
                                {ending.nextEpisode}
                            </p>
                            <div
                                className="qa-post-footer"
                                style={{
                                    marginTop: '35px',
                                    marginBottom: '30px',
                                    paddingTop: '35px',
                                }}
                            >
                                <div className="qa-post-media">
                                    <i className="bi bi-facebook qa-post-fb"></i>
                                </div>
                                <div className="qa-post-media">
                                    <i className="bi bi-google qa-post-gg"></i>
                                </div>
                                <div className="qa-post-media">
                                    <i className="bi bi-twitter qa-post-tw"></i>
                                </div>
                                <div className="qa-post-media">
                                    <i className="bi bi-linkedin qa-post-ln"></i>
                                </div>
                                <div className="qa-post-media">
                                    <i className="bi bi-envelope-fill qa-post-mail"></i>
                                </div>
                            </div>
                        </div>
                        <div className="qa-news-widget col-lg-4">
                            <a href="/" className='qa-widget-item'>
                                <img src={widget1} alt="widget-image" />
                            </a>
                            <div className="qa-widget-item">
                                <h4 className='qa-news-side-title'>LATEST NEWS</h4>
                                <ul className='qa-news-side-list'>
                                    <li className="qa-news-side-item">
                                        <Link
                                            to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                            style={{
                                                padding: '2px',
                                                marginRight: '10px',
                                            }}
                                        >
                                            <img
                                                src={img1}
                                                className='qa-side-item-img'
                                            />
                                        </Link>
                                        <div className="qa-side-info">
                                            <i className="bi bi-calendar"></i>
                                            &nbsp;06/06/2023
                                            <h5>
                                                <Link
                                                    className='qa-side-link'
                                                    to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                                >
                                                    Cuốn sách nghiên cứu cách thức gây ảnh hưởng
                                                </Link>
                                            </h5>
                                        </div>
                                    </li>
                                    <li className="qa-news-side-item">
                                        <Link
                                            to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                            style={{
                                                padding: '2px',
                                                marginRight: '10px',
                                            }}
                                        >
                                            <img
                                                src={img2}
                                                className='qa-side-item-img'
                                            />
                                        </Link>
                                        <div className="qa-side-info">
                                            <i className="bi bi-calendar"></i>
                                            &nbsp;06/06/2023
                                            <h5>
                                                <Link
                                                    className='qa-side-link'
                                                    to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                                >
                                                    Cuốn sách nghiên cứu cách thức gây ảnh hưởng
                                                </Link>
                                            </h5>
                                        </div>
                                    </li>
                                    <li className="qa-news-side-item">
                                        <Link
                                            to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                            style={{
                                                padding: '2px',
                                                marginRight: '10px',
                                            }}
                                        >
                                            <img
                                                src={img3}
                                                className='qa-side-item-img'
                                            />
                                        </Link>
                                        <div className="qa-side-info">
                                            <i className="bi bi-calendar"></i>
                                            &nbsp;06/06/2023
                                            <h5>
                                                <Link
                                                    className='qa-side-link'
                                                    to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                                >
                                                    Cuốn sách nghiên cứu cách thức gây ảnh hưởng
                                                </Link>
                                            </h5>
                                        </div>
                                    </li>
                                    <li className="qa-news-side-item">
                                        <Link
                                            to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                            style={{
                                                padding: '2px',
                                                marginRight: '10px',
                                            }}
                                        >
                                            <img
                                                src={img5}
                                                className='qa-side-item-img'
                                            />
                                        </Link>
                                        <div className="qa-side-info">
                                            <i className="bi bi-calendar"></i>
                                            &nbsp;06/06/2023{article.date}
                                            <h5>
                                                <Link
                                                    className='qa-side-link'
                                                    to={`/cuon-sach-nghien-cuu-cach-thuc-gay-anh-huong/`}
                                                >
                                                    Cuốn sách nghiên cứu cách thức gây ảnh hưởng
                                                </Link>
                                            </h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="qa-widget-item">
                                <a href="/">
                                    <img
                                        src={widget3}
                                        alt="widget-image"
                                        className='qa-widget-image-grayscale'
                                    />
                                </a>
                            </div>
                            <div className="qa-widget-item">
                                <a href="/">
                                    <img
                                        src={widget4}
                                        alt="widget-image"
                                        className='qa-widget-image-grayscale'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* before footer */}
            </div >
        </>
    )
}

export default ArticleContent