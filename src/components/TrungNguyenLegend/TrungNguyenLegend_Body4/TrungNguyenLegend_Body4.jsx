import "./TrungNguyenLegend_Body4.scss";
import imgProduct from "../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body4/chienbinhtam.jpg";
import imgPreOrder from "../../../assets/TrungNguyen/TrungNguyen_Body9/2.jpg";

const TrungNguyenLegend_Body4 = () => {
  return (
    <>
      <div
        className="trungnguyenlegend-body4-wrap-product row"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="trungnguyenlegend-body4-wrap-product-img col">
          <img
            src={imgProduct}
            alt="trungnguyenlegend-body4-wrap-product1-img"
          />
        </div>
        <div className="trungnguyenlegend-body4-wrap-product-info col">
          <div className="trungnguyenlegend-body4-wrap-product-heading">
            BỘ SẢN PHẨM CHIẾN BINH TÂM
          </div>
          <div className="trungnguyenlegend-body4-wrap-product-subheading">
            CÀ PHÊ - NĂNG LƯỢNG CỦA TINH THẦN CHIẾN BINH
          </div>
          <p className="trungnguyenlegend-body4-wrap-product-para">
            “Rất ít thứ thực sự kết nối mọi đội quân trong mọi thời đại như cà
            phê. Có thể nói, người nào đã từng là chiến binh thì trong mạch máu
            đều chứa đầy cà phê. Nếu bạn sử dụng cà phê đúng cách và rèn luyện
            bản thân có khí chất và trái tim nhân hậu của người chiến binh chắc
            chắn bạn sẽ thành công trên mọi lĩnh vực của cuộc sống!”
          </p>
          <p className="trungnguyenlegend-body4-wrap-product-para">
            Thấu cảm về sự gắn kết, khả năng truyền cảm hứng, thúc đẩy năng
            lượng kỳ diệu của cà phê, Trung Nguyên Legend ra mắt bộ sản phẩm
            Chiến binh tâm khơi dậy tinh thần chiến binh, tiếp năng lượng cho
            thành công của bạn.
          </p>

          <div className="trungnguyenlegend-body4-wrap-product-preorder">
            <img
              src={imgPreOrder}
              alt="trungnguyenlegend-body4-wrap-product-preorder"
            />
            <a
              href=""
              className="trungnguyenlegend-body4-wrap-product-preorder-text"
            >
              ĐẶT MUA
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyenLegend_Body4;
