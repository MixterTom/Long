import "./Footer.scss";
import oldlogo from "../../img/legend_logo.jpg";
import newlogo from "../../img/logo_W-R.jpg";
import dmca from "../../img/dmca_protected_sml_120n.jpg";
import g7 from "../../img/g7small.jpg";
import trungnguyen from "../../img/tn.jpg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-trungnguyen">
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
        <div className="footer-link">
          <div className="footer-link-header">LIÊN KẾT NHANH</div>
          <div className="footer-link-body">
            <div className="footer-link-body-row">
              <i className="bi bi-chevron-double-right"></i>
              <a href=""> TRUYỀN THÔNG</a>
            </div>
            <div className="footer-link-body-row"></div>
            <div className="footer-link-body-row">
              <i className="bi bi-chevron-double-right"></i>
              <a href="">CƠ HỘI NGHỀ NGHIỆP</a>
            </div>
            <div className="footer-link-body-row">
              <i className="bi bi-chevron-double-right"></i>
              <a href="">CHÍNH SÁCH BẢO MẬT</a>
            </div>
            <div className="footer-link-body-row">
              <i className="bi bi-chevron-double-right"></i>
              <a href="">THÔNG TIN LIÊN HỆ</a>
            </div>
          </div>
          <div className="footer-link-partner">
            <a href="/trung-nguyen-legend"> <img
              className="footer-link-partner-trungnguyenold"
              src={oldlogo}
              alt=""
            /></a>
           <a href="/trung-nguyen">   <img
            
            className="footer-link-partner-trungnguyen"
            src={trungnguyen}
            alt=""
          /></a>
          <a href="/g7"> <img
              className="footer-link-partner-trungnguyeng7"
              src={g7}
              alt=""
            /></a>
           
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-social-head">SOCIAL MEDIA</div>
          <div className="footer-social-body">
            <a href="https://www.facebook.com/trungnguyenlegend">Facebook</a>
            <a href="https://www.instagram.com/trungnguyenlegend/">Instagram</a>
            <a href="https://www.youtube.com/c/trungnguyen">Youtube</a>
            <a href="https://www.tiktok.com/@trungnguyenlegend">Tiktok</a>
            <img src={dmca} alt="" />
          </div>
        </div>
        <div className="footer-trungnguyen-text-foot-responsive">
             © 2018 CORPORATION JOINT STOCK COMPANY TRUNG NGUYEN. ALL RIGHTS RESERVED
            </div>
      </div>
    </>
  );
}
export default Footer;
