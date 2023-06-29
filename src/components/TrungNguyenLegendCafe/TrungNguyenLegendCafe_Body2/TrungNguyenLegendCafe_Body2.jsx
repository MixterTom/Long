import "./TrungNguyenLegendCafe_Body2.scss";
import imgHeaderBody2 from "../../../assets/TrungNguyenLegendCafe/TrungNguyenLegendCafe_Body2/1.jpg";
import img1Body2 from "../../../assets/TrungNguyenLegendCafe/TrungNguyenLegendCafe_Body2/2.jpg";
import img2Body2 from "../../../assets/TrungNguyenLegendCafe/TrungNguyenLegendCafe_Body2/3.jpg";

const TrungNguyenLegendCafe_Body2 = () => {
  return (
    <>
      <div className="trungnguyenlegendcafe-body2-wrap">
        <div className="trungnguyenlegendcafe-body2-img-header">
          <div className="trungnguyenlegendcafe-body2-img-header1">
            <img
              src={imgHeaderBody2}
              alt="trungnguyenlegendcafe-body2ImgHeader"
            />
          </div>
        </div>
        <div className="trungnguyenlegendcafe-body2-text">
          <h2 className="trungnguyenlegendcafe-body2-text-heading">
            TRUNG NGUYÊN LEGEND CAFÉ
          </h2>

          <div className="trungnguyenlegendcafe-body2-text-para">
            Không gian Trung Nguyên Legend là điểm hẹn lý tưởng của những người
            yêu và đam mê cà phê. Đến với Trung Nguyên Legend, bạn có thể thưởng
            thức những ly cà phê năng lượng tuyệt hảo đặc biệt là cà phê sữa đá
            ngon nhất thế gian bên những cuốn sách nền tảng đổi đời được chọn
            lọc từ tinh hoa tri thức nhân loại. Cùng với năng lượng thực dưỡng
            từ ổ bánh mì Legend được tạo nên từ nguồn nguyên liệu tự nhiên, tinh
            sạch nhất đem đến nguồn năng lượng hài hòa, giúp thanh lọc và cân
            bằng cơ thể.
          </div>

          <div className="trungnguyenlegendcafe-body2-img1-body">
            <img src={img1Body2} alt="trungnguyenlegendcafe-body2-img1-body" />
          </div>

          <div className="trungnguyenlegendcafe-body2-text-para">
            Không chỉ là nơi thưởng thức những ly cà phê năng lượng tuyệt ngon,
            không gian Trung Nguyên Legend thường xuyên diễn ra những buổi gặp
            gỡ, giao lưu văn hóa, khởi nghiệp của tầng lớp tri thức và cộng đồng
            xã hội với các chủ đề: cà phê – khởi nghiệp, cà phê – sách, cà phê –
            âm nhạc, cà phê – điện ảnh, cà phê – kiến trúc… Đây sẽ là nơi những
            người yêu và đam mê cà phê tìm thấy những người bạn đồng điệu, yêu
            tri thức, được chia sẻ những bài học kinh nghiệm quý giá, công thức
            thành công, cùng nhau xây dựng cộng đồng hướng đến Lối sống Minh
            triết – Lối sống để Thành công.
          </div>

          <div className="trungnguyenlegendcafe-body2-img2-body">
            <img src={img2Body2} alt="trungnguyenlegendcafe-body2-img2-body" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyenLegendCafe_Body2;
