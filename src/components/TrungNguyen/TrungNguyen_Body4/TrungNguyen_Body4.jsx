import "./TrungNguyen_Body4.scss";
import imgProduct1Body4 from "../../../assets/TrungNguyen/TrungNguyen_Body4/1.jpg";
import imgProduct2Body4 from "../../../assets/TrungNguyen/TrungNguyen_Body4/2.jpg";
import imgProduct3Body4 from "../../../assets/TrungNguyen/TrungNguyen_Body4/3.jpg";

const TrungNguyen_Body4 = () => {
  return(
    <>
      <div className="trungnguyen-body4-wrap">

        <div className="trungnguyen-body4-wrap-products row">
          <div className="trungnguyen-body4-product col">
            <div className="trungnguyen-body4-product-img">
              <img src={imgProduct1Body4} alt="trungnguyen-body4-product-img" />
            </div>
            <h4 className="trungnguyen-body4-product-heading">GOURMET BLEND</h4>
            <p className="trungnguyen-body4-product-para">
              VỊ ĐẬM ĐÀ. SÁNH ĐẶC TRƯNG
            </p>
            <a href="" className="trungnguyen-body4-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body4-product col">
            <div className="trungnguyen-body4-product-img">

             <img src={imgProduct2Body4} alt="trungnguyen-body4-product-img" />
            </div>
            <h4 className="trungnguyen-body4-product-heading">PREMIUM BLEND</h4>
            <p className="trungnguyen-body4-product-para">
              VỊ MẠNH. HƯƠNG THƠM NỒNG
            </p>
            <a href="" className="trungnguyen-body4-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body4-product col">
            <div className="trungnguyen-body4-product-img">

            <img src={imgProduct3Body4} alt="trungnguyen-body4-product-img" />
            </div>
            <h4 className="trungnguyen-body4-product-heading">HOUSE BLEND</h4>
            <p className="trungnguyen-body4-product-para">
              VỊ MẠNH. HƯƠNG THƠM NỒNG
            </p>
            <a href="" className="trungnguyen-body4-readmore">
              Đặt mua
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body4;
