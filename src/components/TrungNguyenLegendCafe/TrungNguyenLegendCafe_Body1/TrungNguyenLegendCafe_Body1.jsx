import './TrungNguyenLegendCafe_Body1.scss'
import imgHeader1 from '../../../assets/TrungNguyenLegendCafe/TrungNguyenLegendCafe_Body1/1.jpg'
import imgHeader2 from '../../../assets/TrungNguyenLegendCafe/TrungNguyenLegendCafe_Body1/2.jpg'
import imgHeader1Mobile from '../../../assets/TrungNguyenLegendCafe/TrungNguyenLegendCafe_Body1/1_1.jpg'
import imgHeader2Mobile from '../../../assets/TrungNguyenLegendCafe/TrungNguyenLegendCafe_Body1/1_2.jpg'

const TrungNguyenLegendCafe_Body1 = () => {
    return(
        <>
        <div className="trungnguyenlegendcafe-body1-wrap">
            <div className='trungnguyenlegendcafe-body1-img-header'>
                <div className="trungnguyenlegendcafe-body1-img-header1">
                    <img src={imgHeader1} alt="trungnguyenlegendcafe-body1ImgHeader1" />
                </div>

                <div className="trungnguyenlegendcafe-body1-img-header2">
                    <img src={imgHeader2} alt="trungnguyenlegendcafe-body1ImgHeader2" />
                </div>
            </div>
            
            <div className='trungnguyenlegendcafe-body1-img-header-mobile'>
                <div className="trungnguyenlegendcafe-body1-img-header1-mobile">
                    <img src={imgHeader1Mobile} alt="trungnguyenlegendcafe-body1ImgHeader1Mobile"/>
                </div>

                <div className="trungnguyenlegendcafe-body1-img-header2-mobile">
                    <img src={imgHeader2Mobile} alt="trungnguyenlegendcafe-body1ImgHeader2Mobile"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrungNguyenLegendCafe_Body1;