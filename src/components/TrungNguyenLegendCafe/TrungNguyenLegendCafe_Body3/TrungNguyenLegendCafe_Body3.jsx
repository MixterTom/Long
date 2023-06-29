import "./TrungNguyenLegendCafe_Body3.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const TrungNguyenLegendCafe_Body3 = () => {
  return (
    <>
      <div className="trungnguyenlegendcafe-body3-wrap">
        <div className="trungnguyenlegendcafe-body3-text-heading">
          BẢN ĐỒ CHUỖI KHÔNG GIAN TRUNG NGUYÊN LEGEND CAFÉ
        </div>
        <div className="trungnguyenlegendcafe-body3-googlemaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62701.93237567183!2d106.68078144628764!3d10.821200097707022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528bad51d4709%3A0x820abd9114e74b5f!2sTrung%20Nguy%C3%AAn%20Legend%20Caf%C3%A9!5e0!3m2!1svi!2s!4v1687610419627!5m2!1svi!2s"
            width="1120"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="trungnguyenlegendcafe-body3-info">
          <div className="trungnguyenlegendcafe-body3-info-hotline">
            <i class="bi bi-telephone"></i>
            Hotline: 1900 1090
          </div>

          <div className="trungnguyenlegendcafe-body3-info-fanpage">
            <i class="bi bi-facebook"></i>
            Facebook
          </div>

          <div className="trungnguyenlegendcafe-body3-info-maps">
            <i class="bi bi-geo-alt-fill"></i>
            Danh sách không gian
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyenLegendCafe_Body3;
