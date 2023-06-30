import "./TrungNguyen_Body8.scss";
import imgProduct1Body8 from "../../../assets/TrungNguyen/TrungNguyen_Body8/1.jpg";
import imgProduct2Body8 from "../../../assets/TrungNguyen/TrungNguyen_Body8/2.jpg";
import imgProduct3Body8 from "../../../assets/TrungNguyen/TrungNguyen_Body8/3.jpg";
import imgProduct4Body8 from "../../../assets/TrungNguyen/TrungNguyen_Body8/4.jpg";
import imgProduct5Body8 from "../../../assets/TrungNguyen/TrungNguyen_Body8/5.jpg";

const TrungNguyen_Body8 = () => {
  return (
    <>
      <div className="trungnguyen-body8-wrap">
        <div className="trungnguyen-body8-wrap-heading">
          <h3 className="trungnguyen-body8-wrap-header">
            CÀ PHÊ HẠT TRUNG NGUYÊN
          </h3>
          <p className="trungnguyen-body8-wrap-subheader">
            Tuyệt phẩm đến từ những hạt cà phê Robusta và Arabica phẩm chất tốt
            nhất, sự kết hợp hoàn hảo giữa công nghệ hiện đại bậc nhất thế giới
            và những bí quyết trong quá trình rang mang nét đặc trưng của di sản
            cà phê Việt Nam. Có nhiều lựa chọn đáp ứng các nhu cầu kinh doanh
            khác nhau của từng quán và Gu thưởng thức đa dạng của khách hàng.
          </p>
        </div>

        <div className="trungnguyen-body8-products row">
          <div className="col-lg-1">
            
          </div>
          <div className="trungnguyen-body8-product col-lg-2">
            <img src={imgProduct1Body8} alt="trungnguyen-body8-product-img" />
            <h4 className="trungnguyen-body8-product-heading">CULI ROBUSTA</h4>
            <p className="trungnguyen-body8-product-para">
              Thơm dịu nhẹ, vị đậm đà
            </p>
            <a href="" className="trungnguyen-body8-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body8-product col-lg-2">
            <img src={imgProduct2Body8} alt="trungnguyen-body8-product-img" />
            <h4 className="trungnguyen-body8-product-heading">PREMIUM CULI</h4>
            <p className="trungnguyen-body8-product-para">
              Thơm bền lâu, vị cân bằng, thể chất đậm
            </p>
            <a href="" className="trungnguyen-body8-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body8-product col-lg-2">
            <img src={imgProduct3Body8} alt="trungnguyen-body8-product-img" />
            <h4 className="trungnguyen-body8-product-heading">
              ARABICA ROBUSTA
            </h4>
            <p className="trungnguyen-body8-product-para">
              Thơm nhẹ nhàng, vị hài hòa
            </p>
            <a href="" className="trungnguyen-body8-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body8-product col-lg-2">
            <img src={imgProduct4Body8} alt="trungnguyen-body8-product-img" />
            <h4 className="trungnguyen-body8-product-heading">CULI ARABICA</h4>
            <p className="trungnguyen-body8-product-para">
              Thơm đặc trưng, vị đắng dịu
            </p>
            <a href="" className="trungnguyen-body8-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body8-product col-lg-2">
            <img src={imgProduct5Body8} alt="trungnguyen-body8-product-img" />
            <h4 className="trungnguyen-body8-product-heading">
              CÀ PHÊ HẠT SỐ 8
            </h4>
            <p className="trungnguyen-body8-product-para">
              Rất thơm, vị đắng nhẹ
            </p>
            <a href="" className="trungnguyen-body8-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body8;
