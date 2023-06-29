import "./TrungNguyen_Body5.scss";
import imgHeading from "../../../assets/TrungNguyen/TrungNguyen_Body5/1.jpg";
import imgProduct1Body5 from "../../../assets/TrungNguyen/TrungNguyen_Body5/sangtao1.jpg";
import imgProduct2Body5 from "../../../assets/TrungNguyen/TrungNguyen_Body5/sangtao2.jpg";
import imgProduct3Body5 from "../../../assets/TrungNguyen/TrungNguyen_Body5/sangtao3.jpg";
import imgProduct4Body5 from "../../../assets/TrungNguyen/TrungNguyen_Body5/sangtao4.jpg";
import imgProduct5Body5 from "../../../assets/TrungNguyen/TrungNguyen_Body5/sangtao5.jpg";

const TrungNguyen_Body5 = () => {
  return (
    <>
      <div className="trungnguyen-body5-wrap">
        <div className="trungnguyen-body5-wrap-heading">
          <div className="trungnguyen-body5-wrap-heading-img">
            <img src={imgHeading} alt="trungnguyen-body5-wrap-heading-img" />
          </div>
          <h3 className="trungnguyen-body5-wrap-header">
            TUYỆT NGON KHI DÙNG TẠI NHÀ
          </h3>
          <p className="trungnguyen-body5-wrap-subheader">
            Thấu hiểu giá trị và sức mạnh vĩ đại của sự Sáng tạo trong hành
            trình đi đến Thành công, Trung Nguyên đã dày công nghiên cứu để tạo
            tác nên tuyệt phẩm CÀ PHÊ SÁNG TẠO giúp khai phá hiệu quả khả năng
            tư duy sáng tạo, đưa đến đỉnh cao trí tuệ mới.
          </p>
        </div>

        <div className="trungnguyen-body5-products row">
          <div className="trungnguyen-body5-product col-auto col-sm-12">
            <img src={imgProduct1Body5} alt="trungnguyen-body5-product-img" />
            <h4 className="trungnguyen-body5-product-heading">SÁNG TẠO 1</h4>
            <p className="trungnguyen-body5-product-para">
              Thơm dịu nhẹ, vị đậm đà
            </p>
            <a href="" className="trungnguyen-body5-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body5-product col-auto col-sm-12">
            <img src={imgProduct2Body5} alt="trungnguyen-body5-product-img" />
            <h4 className="trungnguyen-body5-product-heading">SÁNG TẠO 2</h4>
            <p className="trungnguyen-body5-product-para">
              Thơm nhẹ nhàng, vị hài hòa
            </p>
            <a href="" className="trungnguyen-body5-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body5-product col-auto col-sm-12">
            <img src={imgProduct3Body5} alt="trungnguyen-body5-product-img" />
            <h4 className="trungnguyen-body5-product-heading">SÁNG TẠO 3</h4>
            <p className="trungnguyen-body5-product-para">
              Rất thơm, vị đắng nhẹ, chua thanh
            </p>
            <a href="" className="trungnguyen-body5-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body5-product col-auto col-sm-12">
            <img src={imgProduct4Body5} alt="trungnguyen-body5-product-img" />
            <h4 className="trungnguyen-body5-product-heading">SÁNG TẠO 4</h4>
            <p className="trungnguyen-body5-product-para">
              Thơm bền lâu, vị cân bằng, thể chất đậm
            </p>
            <a href="" className="trungnguyen-body5-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="trungnguyen-body5-product col-auto col-sm-12">
            <img src={imgProduct5Body5} alt="trungnguyen-body5-product-img" />
            <h4 className="trungnguyen-body5-product-heading">SÁNG TẠO 5</h4>
            <p className="trungnguyen-body5-product-para">
              Thơm đặc trưng Arabica, vị êm nhẹ, ít đắng
            </p>
            <a href="" className="trungnguyen-body5-readmore">
              Đặt mua
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body5;
