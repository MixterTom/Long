import "./TrungNguyenLegend_Body3.scss";
import imgBackGround from "../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body3/footer.jpg";
import imgProduct1 from "../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body3/1.jpg";
import imgProduct2 from "../../../assets/TrungNguyenLegend/TrungNguyenLegend_Body3/2.jpg";
import imgPreOrder from "../../../assets/TrungNguyen/TrungNguyen_Body9/2.jpg";

const TrungNguyenLegend_Body3 = () => {
  return (
    <>
      <div className="trungnguyenlegend-body3-wrap">
        <div
          className="trungnguyenlegend-body3-wrap-header-top"
          style={{
            backgroundImage: `url(${imgBackGround})`,
          }}
        >
          QUÀ TẶNG NGOẠI GIAO DÀNH CHO NGUYÊN THỦ, QUỐC VƯƠNG, HOÀNG GIA VÀ CÁC
          ĐẠI SỨ
        </div>

        <div className="trungnguyenlegend-body3-products row">
          <div className="col-lg-6 trungnguyenlegend-body3-product ">
            <div className="trungnguyenlegend-body3-product-img">
              <img
                src={imgProduct1}
                alt="trungnguyenlegend-body3-product1-img"
              />
            </div>
            <h3 className="trungnguyenlegend-body3-product-heading">
              WEASEL – VUA CÀ PHÊ
            </h3>
            <p className="trungnguyenlegend-body3-product-para">
              Từ nơi đại ngàn Tây nguyên hùng vĩ, câu chuyện cà phê Chồn bắt đầu
              với loài Chồn hương hoang dã, sống trong những cánh rừng cà phê
              bạt ngàn… Những “nghệ nhân” này sau khi ăn những trái cà phê chín
              mọng, chính enzyme tiết ra từ dạ dày đã tạo ra mùi vị đặc biệt cho
              loại cà phê nguyên liệu độc nhất để tạo nên CÀ PHÊ CHỒN WEASEL “vô
              cùng quý hiếm và đắt nhất thế giới” đến từ Trung Nguyên. Với sản
              lượng hết sức khiêm tốn, chỉ khoảng 40-50 kg mỗi năm, quy trình
              chế biến trải qua 20 công đoạn chính, cùng với bí quyết công nghệ
              cà phê huyền bí phương Đông tạo tác bởi chuyên gia cà phê số 1
              Việt Nam, cà phê WEASEL là “cà phê chí tôn chi bảo” – “VUA CỦA CÀ
              PHÊ”. Nếu WEASEL không có ở đời, “ngai vàng của cà phê đặc chế” sẽ
              không có được sự trị vì.
            </p>
            <div className="trungnguyenlegend-body3-wrap-product-preorder">
              <img
                src={imgPreOrder}
                alt="trungnguyenlegend-body3-wrap-product-preorder"
              />
              <a
                href=""
                className="trungnguyenlegend-body3-wrap-product-preorder-text"
              >
                ĐẶT MUA
              </a>
            </div>
          </div>

          <div className="col-lg-6 trungnguyenlegend-body3-product">
            <div className="trungnguyenlegend-body3-product-img">
              <img
                src={imgProduct2}
                alt="trungnguyenlegend-body3-product1-img"
              />
            </div>
            <h3 className="trungnguyenlegend-body3-product-heading">
              TUYỆT PHẨM QUÀ TẶNG NGOẠI GIAO
            </h3>
            <p className="trungnguyenlegend-body3-product-para">
              Áp dụng bài học từ thiên nhiên, bài học cà phê WEASEL, các chuyên
              gia Trung Nguyên đã dày công nghiên cứu và tìm ra công nghệ “ủ men
              sinh học”. Công nghệ này tái tạo thành công bí quyết ủ men cà phê
              như thực sự đang diễn ra trong cơ thể Chồn Hương hoang dã nhằm tạo
              nên loại cà phê nguyên liệu đặc biệt cho Tuyệt phẩm cà phê TRUNG
              NGUYÊN LEGEND.
            </p>
            <p className="trungnguyenlegend-body3-product-para">
              Như một món quà tặng tiêu biểu, đại diện cho Văn hóa & Tinh thần
              của Cà phê Việt Nam, Bộ sản phẩm quà tặng Trung Nguyên Legend
              chính thức được chọn là quà tặng ngoại giao của Cà phê Việt Nam.
            </p>

            <div className="trungnguyenlegend-body3-wrap-product-preorder">
              <img
                src={imgPreOrder}
                alt="trungnguyenlegend-body3-wrap-product-preorder"
              />
              <a
                href=""
                className="trungnguyenlegend-body3-wrap-product-preorder-text"
              >
                ĐẶT MUA
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrungNguyenLegend_Body3;
