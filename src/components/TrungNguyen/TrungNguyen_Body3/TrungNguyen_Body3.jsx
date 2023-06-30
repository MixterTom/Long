import "./TrungNguyen_Body3.scss";
import imgPreOrder from "../../../assets/TrungNguyen/TrungNguyen_Body3/2.jpg";
import imgProduct from "../../../assets/TrungNguyen/TrungNguyen_Body3/product.jpg";
import imgHeading from "../../../assets/TrungNguyen/TrungNguyen_Body3/icon.jpg";

const TrungNguyen_Body3 = () => {
  return (
    <>
      <div className="trungnguyen-body3-wrap">
        <div className="trungnguyen-body3-wrap-product row">
          <div className="trungnguyen-body3-wrap-product-info col-lg-6">
            <div className="trungnguyen-body3-wrap-product-heading">
              <img
                src={imgHeading}
                alt="trungnguyen-body3-wrap-product-heading"
              />
            </div>

            <div className="trungnguyen-body3-wrap-product-para">
              Tuyệt phẩm cà phê SÁNG TẠO 8 là sự kết tinh tuyệt vời của nguồn
              nguyên liệu hạt ngon nhất thế giới, được chế biến bằng công nghệ ủ
              men sinh học hiện đại bậc nhất thế giới, theo bí quyết phối trộn
              từ các chuyên gia hàng đầu. Tất cả tạo nên sự hòa quyện cân bằng
              hoàn hảo của vị cà phê đắng mạnh mẽ và hương cà phê nồng nàn, cho
              bạn trải nghiệm vị giác và xúc giác tuyệt vời, giúp cung cấp nguồn
              năng lượng đặc biệt chuyên cho não sáng tạo.
            </div>

            <div className="trungnguyen-body3-wrap-product-preorder">
              <img
                src={imgPreOrder}
                alt="trungnguyen-body3-wrap-product-preorder"
              />
              <a
                href="trungnguyen-body3-wrap-product-preorder"
                className="trungnguyen-body3-wrap-product-preorder-text"
              >
                ĐẶT MUA
              </a>
            </div>
          </div>

          <div className="trungnguyen-body3-wrap-product-img col-lg-6">
            <img src={imgProduct} alt="trungnguyen-body3-wrap-product-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body3;
