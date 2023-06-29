import "./LoiSongTinhThuc_Body4.scss";
import imgHeaderBody4 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body4/1.jpg";
import imgProduct1Body4 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body4/1_1.jpg";
import imgProduct2Body4 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body4/1_2.jpg";
import imgProduct3Body4 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body4/1_3.jpg";
import imgProduct4Body4 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body4/1_4.jpg";
import imgProduct5Body4 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body4/1_5.jpg";

const LoiSongTinhThuc_Body4 = () => {
  return (
    <>
      <div className="loisongtinhthuc-body4-wrap">
        <div
          className="loisongtinhthuc-body4-header row"
          style={{ backgroundImage: `url(${imgHeaderBody4})` }}
        >
          <div className="loisongtinhthuc-body4-text-heading">
            BỘ SẢN PHẨM THIỀN CÀ PHÊ
          </div>
        </div>

        <div className="loisongtinhthuc-body4-products row">
          <div className="loisongtinhthuc-body4-product col-auto col-sm-12">
            <img
              src={imgProduct1Body4}
              alt="loisongtinhthuc-body4-product-img"
            />
            <h4 className="loisongtinhthuc-body4-product-heading">
              Thiền Cà phê Khát Vọng
            </h4>
            <p className="loisongtinhthuc-body4-product-para">
              Mang đến nguồn năng lượng để hun đúc những khát vọng lớn với cấu
              phần chính là cà phê hòa tan cùng những công cụ pha chế đơn giản
              như bình giữ nhiệt và ca thưởng thức để ai cũng có thể thực hành
              thiền bất kỳ nơi nào.
            </p>
            <a href="" className="loisongtinhthuc-body4-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body4-product col-auto col-sm-12">
            <img
              src={imgProduct2Body4}
              alt="loisongtinhthuc-body4-product-img"
            />
            <h4 className="loisongtinhthuc-body4-product-heading">
              Thiền Cà phê Sức Mạnh
            </h4>
            <p className="loisongtinhthuc-body4-product-para">
              Mang đến nguồn năng lượng để tìm kiếm những sức mạnh lõi của bản
              thân với cấu phần chính là cà phê rang xay phong vị Ottoman cùng
              những công cụ pha chế lấy cảm hứng từ phương pháp pha cà phê
              Ottoman truyền thống kết hợp với cà phê vợt của Việt Nam.
            </p>
            <a href="" className="loisongtinhthuc-body4-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body4-product col-auto col-sm-12">
            <img
              src={imgProduct3Body4}
              alt="loisongtinhthuc-body4-product-img"
            />
            <h4 className="loisongtinhthuc-body4-product-heading">
              Thiền Cà phê Đột Phá
            </h4>
            <p className="loisongtinhthuc-body4-product-para">
              Mang đến nguồn năng lượng cho những ý tưởng đột phá với cấu phần
              chính là cà phê viên nén (capsule) và máy pha cà phê viên nén cầm
              tay – tinh hoa của sự đột phá trong phong cách thưởng lãm cà phê
              toàn cầu.
            </p>
            <a href="" className="loisongtinhthuc-body4-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body4-product col-auto col-sm-12">
            <img
              src={imgProduct4Body4}
              alt="loisongtinhthuc-body4-product-img"
            />
            <h4 className="loisongtinhthuc-body4-product-heading">
              Thiền Cà phê Giàu Có
            </h4>
            <p className="loisongtinhthuc-body4-product-para">
              Mang đến nguồn năng lượng cho sự giàu có toàn diện về Thể Chất –
              Tinh Thần – Trí tuệ với cấu phần chính là cà phê hạt phong vị
              Espresso cùng những công cụ pha chế tinh hoa từ văn minh cà phê
              Roman.
            </p>
            <a href="" className="loisongtinhthuc-body4-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body4-product col-auto col-sm-12">
            <img
              src={imgProduct5Body4}
              alt="loisongtinhthuc-body4-product-img"
            />
            <h4 className="loisongtinhthuc-body4-product-heading">
              Thiền Cà phê Tỉnh Thức
            </h4>
            <p className="loisongtinhthuc-body4-product-para">
              Mang đến nguồn năng lượng cho những phút giây Tỉnh thức với cấu
              phần chính là cà phê đặc trưng của văn minh Thiền cùng bộ công cụ
              dụng cụ pha phin truyền thống của Việt Nam.
            </p>
            <a href="" className="loisongtinhthuc-body4-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoiSongTinhThuc_Body4;
