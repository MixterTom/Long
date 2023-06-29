import './TrungNguyenECoffee_Body1.scss'

import imgHeader1 from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body1/1.jpg'
import imgHeader2 from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body1/2.jpg'
import imgHeader1Mobile from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body1/1_1.jpg'
import imgHeader2Mobile from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body1/1_2.jpg'

const TrungNguyenECoffee_Body1 = () => {
    return(
        <>
            <div className="trungnguyenecoffee-body1-wrap">
            <div className='trungnguyenecoffee-body1-img-header'>
                <div className="trungnguyenecoffee-body1-img-header1">
                    <img src={imgHeader1} alt="trungnguyenecoffee-body1ImgHeader1" />
                </div>

                <div className="trungnguyenecoffee-body1-img-header2">
                    <img src={imgHeader2} alt="trungnguyenecoffee-body1ImgHeader2" />
                </div>
            </div>
            
            <div className='trungnguyenecoffee-body1-img-header-mobile'>
                <div className="trungnguyenecoffee-body1-img-header1-mobile">
                    <img src={imgHeader1Mobile} alt="trungnguyenecoffee-body1ImgHeader1Mobile"/>
                </div>

                <div className="trungnguyenecoffee-body1-img-header2-mobile">
                    <img src={imgHeader2Mobile} alt="trungnguyenecoffee-body1ImgHeader2Mobile"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrungNguyenECoffee_Body1;