import "./LoiSongTinhThuc_Body3.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import imgHeaderBody3 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body3/1.jpg";
import imgProduct1Body3 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body3/1_1.jpg";
import imgProduct2Body3 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body3/1_2.jpg";
import imgProduct3Body3 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body3/1_3.jpg";

const LoiSongTinhThuc_Body3 = () => {
  return (
    <>
      <div className="loisongtinhthuc-body3-wrap">
        <div
          className="loisongtinhthuc-body3-header"
          style={{ backgroundImage: `url(${imgHeaderBody3})` }}
        >
          <div className="loisongtinhthuc-body3-text-heading">
            BỘ SẢN PHẨM 3 NỀN VĂN MINH CÀ PHÊ
          </div>
        </div>

        <div className="loisongtinhthuc-body3-products row">
          <div className="loisongtinhthuc-body3-product col">
            <img
              src={imgProduct1Body3}
              alt="loisongtinhthuc-body3-product-img"
            />
            <h4 className="loisongtinhthuc-body3-product-heading">
              Văn Minh Cà Phê Ottoman
            </h4>
            <p className="loisongtinhthuc-body3-product-para">
              Với cách pha cà phê truyền thống của người Ottoman với tinh hoa là
              chiếc bình Ibrik, mang đến những tách cà phê năng lượng hương vị
              độc đáo kèm lớp crema dày, bùi và mịn đặc trưng cùng hương thơm
              kéo dài đầy quyến rũ.
            </p>
            <a href="" className="loisongtinhthuc-body3-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body3-product col">
            <img
              src={imgProduct2Body3}
              alt="loisongtinhthuc-body3-product-img"
            />
            <h4 className="loisongtinhthuc-body3-product-heading">
              Văn Minh Cà Phê Roman
            </h4>
            <p className="loisongtinhthuc-body3-product-para">
              Với cách pha chế cà phê Espresso bằng chiếc bình Moka, mang đến
              tách cà phê năng lượng tuyệt hảo với thể chất đậm, tròn vị cùng
              mùi khói nhẹ, đặc trưng, xen lẫn chút hương vị trái cây tươi, mang
              đậm phong vị Espresso nguyên bản.
            </p>
            <a href="" className="loisongtinhthuc-body3-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body3-product col">
            <img
              src={imgProduct3Body3}
              alt="loisongtinhthuc-body3-product-img"
            />
            <h4 className="loisongtinhthuc-body3-product-heading">
              Văn Minh Cà Phê Thiền
            </h4>
            <p className="loisongtinhthuc-body3-product-para">
              Với phương pháp pha cà phê phin truyền thống Việt Nam cùng với bộ
              công cụ là chiếc bếp lấy cảm hứng từ chiếc trống đồng Đông Sơn và
              chiếc ấm pha trà của người Việt cổ; mang đến tách cà phê Thiền độc
              nhất với hương vị thanh tao nhưng không thiếu bất cứ hương vị nào
              của thế gian, nhẹ nhàng và vừa đủ, hòa quyện và làm thức tỉnh từng
              giác quan của bạn.
            </p>
            <a href="" className="loisongtinhthuc-body3-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoiSongTinhThuc_Body3;
