import "./TrungNguyen_Body9.scss";
import imgBackGround from "../../../assets/TrungNguyen/TrungNguyen_Body9/bg2.jpg";
import imgHeader1 from "../../../assets/TrungNguyen/TrungNguyen_Body9/br.jpg";
import imgPreOrder from "../../../assets/TrungNguyen/TrungNguyen_Body9/2.jpg";
import imgProduct from "../../../assets/TrungNguyen/TrungNguyen_Body9/1.jpg";

const TrungNguyen_Body9 = () => {
  return (
    <>
      <div
        className="trungnguyen-body9-wrap"
        style={{
          backgroundImage: `url(${imgBackGround})`,
          backgroundSize: "cover",
          backgroundColor: "#fff",
          backgroundPositionX: "center",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="trungnguyen-body9-img-header1">
          <img src={imgHeader1} alt="trungnguyen-body9ImgHeader1" />
        </div>

        <div className="trungnguyen-body9-text">
          <h3 className="trungnguyen-body9-text-heading">
            CREAM ĐẶC CÓ ĐƯỜNG BROTHERS
          </h3>

          <p className="trungnguyen-body9-text-para">
            Với công thức đặc chế chuyên cho cà phê, Cream đặc có đường Brothers
            là bí quyết duy nhất chỉ có tại Trung Nguyên, giúp tạo ra ly cà phê
            sữa hòa quyện, hương vị đặc trưng, thơm ngon tuyệt hảo.
          </p>
        </div>

        <div className="trungnguyen-body9-img-product">
          <img src={imgProduct} alt="trungnguyen-body9-img-product" />
        </div>

        <div className="trungnguyen-body9-wrap-product-preorder">
          <img
            src={imgPreOrder}
            alt="trungnguyen-body9-wrap-product-preorder"
          />
          <a href="" className="trungnguyen-body9-wrap-product-preorder-text">
            ĐẶT MUA
          </a>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body9;