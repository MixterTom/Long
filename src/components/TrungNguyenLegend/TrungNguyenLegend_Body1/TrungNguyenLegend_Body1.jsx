import './TrungNguyenLegend_Body1.scss'
import imgHeader1 from '../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body1/1.jpg'
import imgHeader2 from '../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body1/2.jpg'
import imgHeader1Mobile from '../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body1/1_1.jpg'
import imgHeader2Mobile from '../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body1/1_2.jpg'

const TrungNguyenLegend_Body1 = () => {
    return(
        <>
            <div className="trungnguyenlegend-body1-wrap">
            <div className='trungnguyenlegend-body1-img-header'>
                <div className="trungnguyenlegend-body1-img-header1">
                    <img src={imgHeader1} alt="trungnguyenlegend-body1ImgHeader1" />
                </div>

                <div className="trungnguyenlegend-body1-img-header2">
                    <img src={imgHeader2} alt="trungnguyenlegend-body1ImgHeader2" />
                </div>
            </div>
            
            <div className='trungnguyenlegend-body1-img-header-mobile'>
                <div className="trungnguyenlegend-body1-img-header1-mobile">
                    <img src={imgHeader1Mobile} alt="trungnguyenlegend-body1ImgHeader1Mobile"/>
                </div>

                <div className="trungnguyenlegend-body1-img-header2-mobile">
                    <img src={imgHeader2Mobile} alt="trungnguyenlegend-body1ImgHeader2Mobile"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrungNguyenLegend_Body1;