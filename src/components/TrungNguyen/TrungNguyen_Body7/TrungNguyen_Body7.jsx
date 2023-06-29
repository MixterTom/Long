import "./TrungNguyen_Body7.scss";
import imgProduct1Body7 from "../../../assets/TrungNguyen/TrungNguyen_Body7/1.jpg";
import imgProduct2Body7 from "../../../assets/TrungNguyen/TrungNguyen_Body7/2.jpg";
import imgProduct3Body7 from "../../../assets/TrungNguyen/TrungNguyen_Body7/3.jpg";
import imgHeading from "../../../assets/TrungNguyen/TrungNguyen_Body7/isn.jpg";

const TrungNguyen_Body7 = () => {
  return (
    <>
      <div className="trungnguyen-body7-wrap">
        <div className="trungnguyen-body7-wrap-heading">
          <div className="trungnguyen-body7-wrap-heading-img">
            <img src={imgHeading} alt="trungnguyen-body7-wrap-heading-img" />
          </div>
          <p className="trungnguyen-body7-wrap-subheader">
            Được chọn lọc từ những hạt cà phê tốt nhất của vùng đất Buôn Ma
            Thuột, đem đến hương vị cà phê đậm đà và hương thơm nồng, là thức
            uống tuyệt ngon, mang lại sự tỉnh táo, tập trung và sáng tạo.
          </p>
        </div>

        <div className="trungnguyen-body7-wrap-products row">
          <div className="trungnguyen-body7-product col">
            <img src={imgProduct1Body7} alt="trungnguyen-body7-product-img" />
            <h4 className="trungnguyen-body7-product-heading">CÀ PHÊ I <br /> KHÁT VỌNG KHỞI NGHIỆP</h4>
            <p className="trungnguyen-body7-product-para">
            Thơm đặc trưng, thế chất đậm
            </p>
            <a href="" className="trungnguyen-body7-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body7-product col">
            <img src={imgProduct2Body7} alt="trungnguyen-body7-product-img" />
            <h4 className="trungnguyen-body7-product-heading">CÀ PHÊ S <br />CHINH PHỤC THÀNH CÔNG</h4>
            <p className="trungnguyen-body7-product-para">
            Rất thơm, sánh đặc trưng
            </p>
            <a href="" className="trungnguyen-body7-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body7-product col">
            <img src={imgProduct3Body7} alt="trungnguyen-body7-product-img" />
            <h4 className="trungnguyen-body7-product-heading">CÀ PHÊ NÂU <br />SỨC SỐNG ĐẠI NGÀN</h4>
            <p className="trungnguyen-body7-product-para">
            Rất thơm, sánh đặc trưng
            </p>
            <a href="" className="trungnguyen-body7-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body7;
