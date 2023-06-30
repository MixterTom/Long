import bannerDesktop 
    from '../../assets/hanh-trinh-lap-tri-vi-dai-khoi-nghiep-kien-quoc/banner-d-t.jpg'
import subBannerDesktop 
    from '../../assets/hanh-trinh-lap-tri-vi-dai-khoi-nghiep-kien-quoc/sub-banner-d.jpg'
import bannerMobile 
    from '../../assets/hanh-trinh-lap-tri-vi-dai-khoi-nghiep-kien-quoc/banner-m.jpg'
import subBannerMobile 
    from '../../assets/hanh-trinh-lap-tri-vi-dai-khoi-nghiep-kien-quoc/sub-banner-m.jpg'

import './Banner.scss'

const Banner = () => {
    return(
        <>
            <img style={{marginTop:"35px"}}className='qa-banner-d' src={bannerDesktop} alt="banner" />
            <img className='qa-sub-banner-d' src={subBannerDesktop} alt="sub-banner" />
            <img className="qa-banner-m" src={bannerMobile} alt="banner" />
            <img className="qa-sub-banner-m" src={subBannerMobile} alt="sub-banner" />
        </>
    )
}

export default Banner