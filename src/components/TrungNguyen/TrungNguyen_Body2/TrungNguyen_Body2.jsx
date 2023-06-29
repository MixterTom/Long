import "./TrungNguyen_Body2.scss";
import imgHeader1 from "../../../assets/TrungNguyen/TrungNguyen_Body2/tn.jpg";
import imgBackGround from "../../../assets/TrungNguyen/TrungNguyen_Body2/bg2.jpg";

const TrungNguyen_Body2 = () => {
  return (
    <>
      <div
        className="trungnguyen-body2-wrap"
        style={{
          backgroundImage: `url(${imgBackGround})`,
          backgroundSize: "cover",
          backgroundColor: "#fff",
          backgroundPositionX: "center",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="trungnguyen-body2-img-header1">
          <img src={imgHeader1} alt="trungnguyen-body2ImgHeader1" />
        </div>

        <div className="trungnguyen-body2-text">
          <h3 className="trungnguyen-body2-text-heading">
            THƯƠNG HIỆU CÀ PHÊ RANG XAY SỐ 1 VIỆT NAM
          </h3>

          <p className="trungnguyen-body2-text-para">
            Từ khát vọng “Dù có phải xới tung quả đất này lên cũng phải làm để
            tạo ra tuyệt phẩm cà phê ngon nhất thế giới”, những chuyên gia của
            chúng tôi đã đi khắp 5 châu, đến những vùng nguyên liệu cà phê hàng
            đầu thế giới như: Brazil, Colombia, Ethiopia, Jamaica, Việt Nam, tìm
            kiếm chỉ những hạt cà phê được trồng trên những vùng cao nguyên
            bazan được phong hóa hàng triệu năm, được tưới bằng nguồn nước đầu
            nguồn thanh khiết, được chăm sóc bởi tình yêu, tâm ý thiện lành của
            nông dân địa phương để làm nguyên liệu tốt nhất cho những sản phẩm
            cà phê ngon nhất..
          </p>
        </div>
      </div>
    </>
  );
};

export default TrungNguyen_Body2;
