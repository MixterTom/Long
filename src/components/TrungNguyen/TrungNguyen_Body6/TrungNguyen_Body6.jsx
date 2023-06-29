import "./TrungNguyen_Body6.scss";
import imgHeading from "../../../assets/TrungNguyen/TrungNguyen_Body6/1.jpg";
import imgBackGround from "../../../assets/TrungNguyen/TrungNguyen_Body6/footer.jpg";
import imgProduct1Body6 from "../../../assets/TrungNguyen/TrungNguyen_Body6/chephin1.jpg";
import imgProduct2Body6 from "../../../assets/TrungNguyen/TrungNguyen_Body6/chephin2.jpg";
import imgProduct3Body6 from "../../../assets/TrungNguyen/TrungNguyen_Body6/chephin3.jpg";
import imgProduct4Body6 from "../../../assets/TrungNguyen/TrungNguyen_Body6/chephin4.jpg";
import imgProduct5Body6 from "../../../assets/TrungNguyen/TrungNguyen_Body6/chephin5.jpg";

const TrungNguyen_Body6 = () => {
  return (
    <>
      <div className="trungnguyen-body6-wrap">
        <div
          className="trungnguyen-body6-wrap-header-top"
          style={{
            backgroundImage: `url(${imgBackGround})`,
            backgroundSize: "cover",
            backgroundColor: "#fff",
            backgroundPositionX: "center",
            backgroundPositionY: "bottom",
          }}
        >
          DÒNG CÀ PHÊ NĂNG LƯỢNG CHUYÊN KINH DOANH CHO HỆ THỐNG QUÁN
        </div>
        <div className="trungnguyen-body6-wrap-heading">
          <div className="trungnguyen-body6-wrap-heading-img">
            <img src={imgHeading} alt="trungnguyen-body6-wrap-heading-img" />
          </div>
          <p className="trungnguyen-body6-wrap-subheader">
            Được phối trộn từ những hạt cà phê ngon nhất theo bí quyết riêng
            không thể sao chép của Trung Nguyên cùng công nghệ chế biến hiện đại
            bậc nhất thế giới, mỗi tuyệt phẩm cà phê CHẾ PHIN sở hữu hương thơm
            và vị đặc trưng, làm rung động các giác quan của những người sành cà
            phê và đặc biệt các quán cà phê muốn sở hữu gu cà phê riêng biệt.
          </p>
        </div>

        <div className="trungnguyen-body6-products row">
          <div className="trungnguyen-body6-product col-auto">
            <img src={imgProduct1Body6} alt="trungnguyen-body6-product-img" />
            <h4 className="trungnguyen-body6-product-heading">CHẾ PHIN 1</h4>
            <p className="trungnguyen-body6-product-para">
              Thơm dịu nhẹ, vị đậm đà
            </p>
            <a href="" className="trungnguyen-body6-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body6-product col-auto">
            <img src={imgProduct2Body6} alt="trungnguyen-body6-product-img" />
            <h4 className="trungnguyen-body6-product-heading">CHẾ PHIN 2</h4>
            <p className="trungnguyen-body6-product-para">
              Thơm nhẹ nhàng, vị hài hòa
            </p>
            <a href="" className="trungnguyen-body6-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body6-product col-auto">
            <img src={imgProduct3Body6} alt="trungnguyen-body6-product-img" />
            <h4 className="trungnguyen-body6-product-heading">CHẾ PHIN 3</h4>
            <p className="trungnguyen-body6-product-para">
              Rất thơm, vị đắng nhẹ, chua thanh
            </p>
            <a href="" className="trungnguyen-body6-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body6-product col-auto">
            <img src={imgProduct4Body6} alt="trungnguyen-body6-product-img" />
            <h4 className="trungnguyen-body6-product-heading">CHẾ PHIN 4</h4>
            <p className="trungnguyen-body6-product-para">
              Thơm bền lâu, vị cân bằng, thể chất đậm
            </p>
            <a href="" className="trungnguyen-body6-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body6-product col-auto">
            <img src={imgProduct5Body6} alt="trungnguyen-body6-product-img" />
            <h4 className="trungnguyen-body6-product-heading">CHẾ PHIN 5</h4>
            <p className="trungnguyen-body6-product-para">
              Thơm đặc trưng Arabica, vị êm nhẹ, ít đắng
            </p>
            <a href="" className="trungnguyen-body6-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body6;
