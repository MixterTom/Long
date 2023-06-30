import "./G7_Body3.scss";
import imgBackGround from "../../../assets/G7/G7_Body3/footer.jpg";
import imgProduct1 from "../../../assets/G7/G7_Body3/g73in1.jpg";
import imgProduct2 from "../../../assets/G7/G7_Body3/gumanhX2.jpg";
import imgProduct3 from "../../../assets/G7/G7_Body3/g72in1.jpg";
import imgProduct4 from "../../../assets/G7/G7_Body3/g7den.jpg";
import imgPreOrder from "../../../assets/G7/G7_Body3/2.jpg";

const G7_Body3 = () => {
  return (
    <>
      <div className="g7-body3-wrap">
        <div
          className="g7-body3-wrap-header"
          style={{
            backgroundImage: `url(${imgBackGround})`,
            backgroundSize: "cover",
            backgroundColor: "#fff",
            backgroundPositionX: "center",
            backgroundPositionY: "bottom",
          }}
        >
          SẢN PHẨM CÀ PHÊ NĂNG LƯỢNG THỨ THIỆT G7
        </div>

        <div className="g7-body3-wrap-products">
          <div className="g7-body3-wrap-product row">
            <div className="g7-body3-wrap-product-info col-lg-6">
              <div className="g7-body3-wrap-product-heading">
                CÀ PHÊ HÒA TAN G7 3IN1
              </div>

              <div className="g7-body3-wrap-product-para">
                Từ những hạt cà phê Robusta ngon nhất thế giới cùng công nghệ
                rang Nano+ đặc biệt và bí quyết phương Đông, tuyệt phẩm cà phê
                Năng Lượng G7 mang đến sự tỉnh thức và sáng tạo mạnh mẽ bên
                những cuốn sách đổi đời.
              </div>

              <div className="g7-body3-wrap-product-preorder">
                <img src={imgPreOrder} alt="g7-body3-wrap-product-preorder" />
                <a href="" className="g7-body3-wrap-product-preorder-text">
                  ĐẶT MUA
                </a>
              </div>
            </div>

            <div className="g7-body3-wrap-product-img col">
              <img src={imgProduct1} alt="g7-body3-wrap-product1-img" />
            </div>
          </div>

          <div className="g7-body3-wrap-product row" style={{backgroundColor:'#f9f9f9'}}>
            <div className="g7-body3-wrap-product-img col">
              <img src={imgProduct2} alt="g7-body3-wrap-product1-img" />
            </div>
            <div className="g7-body3-wrap-product-info col-lg-6">
              <div className="g7-body3-wrap-product-heading">
                CÀ PHÊ HÒA TAN G7 GU MẠNH X2
              </div>

              <div className="g7-body3-wrap-product-para">
                G7 Gu Mạnh X2 là dòng sản phẩm cà phê hòa tan có hương vị có
                hương vị cà phê đậm đặc gấp đôi cho những người có gu cà phê
                mạnh thứ thiệt, mang đến cho bạn một ly cà phê đậm đà đúng gu
                với chất cà phê mạnh mẽ.
              </div>

              <div className="g7-body3-wrap-product-preorder">
                <img src={imgPreOrder} alt="g7-body3-wrap-product-preorder" />
                <a href="" className="g7-body3-wrap-product-preorder-text">
                  ĐẶT MUA
                </a>
              </div>
            </div>
          </div>

          <div className="g7-body3-wrap-product row">
            <div className="g7-body3-wrap-product-info col-lg-6">
              <div className="g7-body3-wrap-product-heading">
                CÀ PHÊ HÒA TAN G7 2IN1
              </div>

              <div className="g7-body3-wrap-product-para">
                G7 2in1 là dòng sản phẩm cà phê hòa tan mang hương vị đặc trưng
                thuần túy của cà phê đen đá thứ thiệt, đúng gu hương vị của Cà
                phê rang xay Trung Nguyên.
              </div>

              <div className="g7-body3-wrap-product-preorder">
                <img src={imgPreOrder} alt="g7-body3-wrap-product-preorder" />
                <a href="" className="g7-body3-wrap-product-preorder-text">
                  ĐẶT MUA
                </a>
              </div>
            </div>

            <div className="g7-body3-wrap-product-img col">
              <img src={imgProduct3} alt="g7-body3-wrap-product1-img" />
            </div>
          </div>

          <div className="g7-body3-wrap-product row" style={{backgroundColor:'#f9f9f9'}}>
            <div className="g7-body3-wrap-product-img col">
              <img src={imgProduct4} alt="g7-body3-wrap-product1-img" />
            </div>
            <div className="g7-body3-wrap-product-info col-lg-6">
              <div className="g7-body3-wrap-product-heading">
                CÀ PHÊ HÒA TAN G7 ĐEN
              </div>

              <div className="g7-body3-wrap-product-para">
                G7 Hòa Tan Đen là dòng sản phẩm cà phê hòa tan đen thuần túy
                không đường, có chất lượng và hương vị đậm đà, thơm ngon đúng gu
                thưởng thức của những người sành cà phê.
              </div>

              <div className="g7-body3-wrap-product-preorder">
                <img src={imgPreOrder} alt="g7-body3-wrap-product-preorder" />
                <a href="" className="g7-body3-wrap-product-preorder-text">
                  ĐẶT MUA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default G7_Body3;
