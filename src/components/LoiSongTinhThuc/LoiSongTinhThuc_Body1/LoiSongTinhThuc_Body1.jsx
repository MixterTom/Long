import "./LoiSongTinhThuc_Body1.scss"
import imgHeader1 from '../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body1/1.jpg'
import imgHeader2 from '../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body1/2.jpg'
import imgHeader1Mobile from '../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body1/1_1.jpg'
import imgHeader2Mobile from '../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body1/1_2.jpg'

const LoiSongTinhThuc_Body1 = () => {
    return(
        <>
        <div className="loisongtinhthuc-body1-wrap">
            <div className='loisongtinhthuc-body1-img-header'>
                <div className="loisongtinhthuc-body1-img-header1">
                    <img src={imgHeader1} alt="loisongtinhthuc-body1ImgHeader1" />
                </div>

                <div className="loisongtinhthuc-body1-img-header2">
                    <img src={imgHeader2} alt="loisongtinhthuc-body1ImgHeader2" />
                </div>
            </div>
            
            <div className='loisongtinhthuc-body1-img-header-mobile'>
                <div className="loisongtinhthuc-body1-img-header1-mobile">
                    <img src={imgHeader1Mobile} alt="loisongtinhthuc-body1ImgHeader1Mobile"/>
                </div>

                <div className="loisongtinhthuc-body1-img-header2-mobile">
                    <img src={imgHeader2Mobile} alt="loisongtinhthuc-body1ImgHeader2Mobile"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoiSongTinhThuc_Body1;