import image1 from "../../../assets/img/Body2/1.png";
import "./Body2.scss";

export default function Body2() {
  return (
    <>
      <div
        className="row"
        style={{ position: "relative", display: "flex", flexWrap: "wrap" }}
      >
        <div style={{height:"850px"}}>

        <img src={image1} alt="" style={{height:"100%", width:"100%"}}/>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "70px",
          }}
          className="row"
        >
          <div
            className="row fadeInUp animated delay-0 wpb_start_animation wpb_animate_when_almost_visible wpb_start_animation "
            style={{ width: "100%", paddingBottom: "52px" }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
            >
              {" "}
              <span>DANH XƯNG</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              TẬP ĐOÀN TRUNG NGUYÊN LEGEND TOÀN CẦU
            </p>
          </div>
          <div
            className="row fadeInUp animated delay-0 wpb_start_animation wpb_animate_when_almost_visible wpb_start_animation "
            style={{ width: "100%", paddingBottom: "52px" }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
            >
              {" "}
              <span>TẦM NHÌN</span>
            </h2>
            <p style={{ textAlign: "center" }}>TỔ CHỨC VĨ ĐẠI</p>
            <p style={{ textAlign: "center" }}>
              BẰNG PHỤNG SỰ CỘNG ĐỒNG NHÂN LOẠI
            </p>
          </div>
          <div
            className="row fadeInUp animated delay-0 wpb_start_animation wpb_animate_when_almost_visible wpb_start_animation "
            style={{ width: "100%", paddingBottom: "52px" }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
            >
              {" "}
              <span>SỨ MẠNG</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              XÂY DỰNG MỘT CỘNG ĐỒNG NHÂN LOẠI HỢP NHẤT
            </p>
            <p style={{ textAlign: "center" }}>
              THEO MỘT HỆ GIÁ TRỊ CỦA LỐI SỐNG TỈNH THỨC
            </p>
            <p style={{ textAlign: "center" }}>
              ĐEM ĐẾN THÀNH CÔNG VÀ HẠNH PHÚC THỰC SỰ
            </p>
          </div>
          <div
            className="row fadeInUp animated delay-0 wpb_start_animation wpb_animate_when_almost_visible wpb_start_animation "
            style={{ width: "100%", paddingBottom: "52px" }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
            >
              {" "}
              <span>GIÁ TRỊ CỐT LÕI</span>
            </h2>
            <p style={{ textAlign: "center" }}>ĐỨC TIN TUYỆT ĐỐI</p>
            <p style={{ textAlign: "center" }}>PHỤNG SỰ CỘNG ĐỒNG</p>
            <p style={{ textAlign: "center" }}>NHÂN LOẠI HƯỞNG ỨNG</p>
            <p style={{ textAlign: "center" }}>KINH TÀI VỮNG CHẮC</p>
          </div>
        </div>
      </div>
    </>
  );
}
