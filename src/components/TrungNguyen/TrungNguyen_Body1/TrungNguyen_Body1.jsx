import './TrungNguyen_Body1.scss'
import imgHeader1 from '../../../assets/TrungNguyen/TrungNguyen_Body1/1.jpg'
import imgHeader2 from '../../../assets/TrungNguyen/TrungNguyen_Body1/2.jpg'
import imgHeader1Mobile from '../../../assets/TrungNguyen/TrungNguyen_Body1/1_1.jpg'
import imgHeader2Mobile from '../../../assets/TrungNguyen/TrungNguyen_Body1/1_2.jpg'

const TrungNguyen_Body1 = () => {
    return(
        <>
            <div className="trungnguyen-body1-wrap">
            <div className='trungnguyen-body1-img-header'>
                <div className="trungnguyen-body1-img-header1">
                    <img src={imgHeader1} alt="trungnguyen-body1ImgHeader1" />
                </div>

                <div className="trungnguyen-body1-img-header2">
                    <img src={imgHeader2} alt="trungnguyen-body1ImgHeader2" />
                </div>
            </div>
            
            <div className='trungnguyen-body1-img-header-mobile'>
                <div className="trungnguyen-body1-img-header1-mobile">
                    <img src={imgHeader1Mobile} alt="trungnguyen-body1ImgHeader1Mobile"/>
                </div>

                <div className="trungnguyen-body1-img-header2-mobile">
                    <img src={imgHeader2Mobile} alt="trungnguyen-body1ImgHeader2Mobile"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrungNguyen_Body1;