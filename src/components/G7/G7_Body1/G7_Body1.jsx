import './G7_Body1.scss'
import imgHeader1 from '../../../assets/G7/G7_Body1/1.jpg'
import imgHeader2 from '../../../assets/G7/G7_Body1/2.jpg'
import imgHeader1Mobile from '../../../assets/G7/G7_Body1/1_1.jpg'
import imgHeader2Mobile from '../../../assets/G7/G7_Body1/1_2.jpg'

const G7_Body1 = () => {
    return(
        <>
            <div className="g7-body1-wrap">
            <div className='g7-body1-img-header'>
                <div className="g7-body1-img-header1">
                    <img src={imgHeader1} alt="g7-body1ImgHeader1" />
                </div>

                <div className="g7-body1-img-header2">
                    <img src={imgHeader2} alt="g7-body1ImgHeader2" />
                </div>
            </div>
            
            <div className='g7-body1-img-header-mobile'>
                <div className="g7-body1-img-header1-mobile">
                    <img src={imgHeader1Mobile} alt="g7-body1ImgHeader1Mobile"/>
                </div>

                <div className="g7-body1-img-header2-mobile">
                    <img src={imgHeader2Mobile} alt="g7-body1ImgHeader2Mobile"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default G7_Body1;