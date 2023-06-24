import "./Footer.scss";
import oldlogo from "../../img/legend_logo.jpg";
import newlogo from "../../img/logo_W-R.jpg";
import dmca from "../../img/dmca_protected_sml_120n.jpg";
import g7 from "../../img/g7small.jpg";
import trungnguyen from "../../img/tn.jpg"


function Footer(){
    return(
        <>
        <div className="footer row">
            <div className="footer-trungnguyen col-lg-4">
                <div className="footer-trungnguyen-img">
                    <img src={newlogo} alt="" />
                </div>
                <div className="footer-trungnguyen-text">
                    <h2>TẬP ĐOÀN TRUNG NGUYÊN LEGEND</h2>
                    <div className="footer-trungnguyen-text-tittle">
                        <p>82-84 Bùi Thị Xuân, P. Bến Thành, Q.1, Tp Hồ Chí Minh</p>
                        <p>Hotline: 1900 6011</p>
                        <p>Tel: (84.28) 39251852</p>
                        <p>Fax: (84.28) 39251848</p>
                    </div>
                    <div className="footer-trungnguyen-text-foot">
                    © 2018 TẬP ĐOÀN TRUNG NGUYÊN LEGEND.
                    </div>
                </div>
            </div>
            <div className="footer-link col-lg-4">
                <div className="footer-link-header">
                    LIÊN KẾT NHANH
                </div>
                <div className="footer-link-body">
                    <a href=""> TRUYỀN THÔNG</a>
                    <a href="">CƠ HỘI NGHỀ NGHIỆP</a>
                    <a href="">CHÍNH SÁCH BẢO MẬT</a>
                    <a href="">THÔNG TIN LIÊN HỆ</a>
                </div>
                <div className="footer-link-partner">
                    <img  className="footer-link-partner-trungnguyenold" src={oldlogo} alt="" />
                    <img className="footer-link-partner-trungnguyen" src={trungnguyen} alt="" />
                    <img  className="footer-link-partner-trungnguyeng7" src={g7} alt="" />
                </div>
            </div>
            <div className="footer-social col-lg-4">
                <div className="footer-social-head">
                    SOCIAL MEDIA
                </div>
                <div className="footer-social-body">
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Youtube</a>
                    <a href="">Tiktok</a>
                    <img src={dmca} alt="" />
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Footer;