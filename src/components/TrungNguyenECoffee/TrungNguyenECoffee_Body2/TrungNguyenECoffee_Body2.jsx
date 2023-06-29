import "./TrungNguyenECoffee_Body2.scss";
import imgHeaderBody2 from "../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body2/1.jpg";
import imgReadMoreBody2 from "../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body2/2.jpg";

const TrungNguyenECoffee_Body2 = () => {
  return (
    <>
      <div className="trungnguyenecoffee-body2-wrap">
        <div className="trungnguyenecoffee-body2-img-header">
          <div className="trungnguyenecoffee-body2-img-header1">
            <img src={imgHeaderBody2} alt="trungnguyenecoffee-body2ImgHeader" />
          </div>
        </div>
        <div className="trungnguyenecoffee-body2-text">
          <h2 className="trungnguyenecoffee-body2-text-heading">
            TRUNG NGUYÊN E-COFFEE
          </h2>

          <div className="trungnguyenecoffee-body2-text-para1">
            Trung Nguyên E-Coffee là chuỗi cửa hàng bán lẻ thế giới cà phê của
            Tập đoàn Trung Nguyên Legend – nơi hội tụ tinh hoa của 3 nền văn
            minh cà phê: Ottoman – Roman – Thiền được ra mắt từ tháng 8/2019.
          </div>

          <div className="trungnguyenecoffee-body2-text-para2">
            Ngay từ khi ra đời, Trung Nguyên E-Coffee nhanh chóng tạo nên một
            làn sóng bùng nổ nhượng quyền mạnh mẽ, trở thành sự lựa chọn số 1
            của hơn 1.000 đối tác và hiện diện trên toàn quốc. Trung Nguyên
            E-Coffee được xem là một giải pháp tối ưu cho cộng đồng kinh doanh,
            khởi nghiệp với cà phê, từ nhân viên văn phòng, chủ cửa tiệm tạp hoá
            – quán cà phê truyền thống, sinh viên, các công ty trong lĩnh vực
            nhượng quyền, ẩm thực, du lịch, vận tải, bản lẻ… đều có thể tham gia
            hợp tác.
          </div>

          <div className="trungnguyenecoffee-body2-text-para3">
            Không chỉ sở hữu thiết kế linh hoạt cho mọi địa điểm, Trung Nguyên
            E-Coffee còn có chính sách hợp tác tối đa lợi ích nhất cho tất cả
            các đối tác từ chính sách gói hợp tác đến các chương trình hỗ trợ
            đào tạo, tư vấn, vận hành… Hơn nữa, với hệ sản phẩm đặc biệt gồm hơn
            100 sản phẩm cà phê năng lượng tuyệt ngon và công cụ dụng cụ pha chế
            thưởng thức theo ba nền văn minh cà phê – sách quý đổi đời – bánh mì
            thực dưỡng, Trung Nguyên E-Coffee tạo nên một thế giới cà phê thu
            nhỏ, đáp ứng cho những người yêu cà phê có thể trải nghiệm đầy đủ
            các gói sản phẩm thưởng lãm tại nhà, văn phòng, hàng quán…
          </div>
        </div>

        <div className="trungnguyenecoffee-body2-readmore">
            <img src={imgReadMoreBody2} alt="trungnguyenecoffeereadmore" />
            <a href="" className="trungnguyenecoffee-body2-readmore-text">
                TÌM HIỂU THÊM
            </a>
        </div>
      </div>
    </>
  );
};

export default TrungNguyenECoffee_Body2;
