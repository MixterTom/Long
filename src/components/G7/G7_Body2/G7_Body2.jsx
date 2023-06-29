import "./G7_Body2.scss";
import imgHeader1 from "../../../assets/G7/G7_Body2/g7.jpg";
import imgBackGround from '../../../assets/G7/G7_Body2/bg2.jpg'

const G7_Body2 = () => {
  return (
    <>
      <div className="g7-body2-wrap" style={{backgroundImage: `url(${imgBackGround})`,backgroundSize: 'cover',backgroundColor: '#fff',backgroundPositionX: 'center',backgroundPositionY: 'bottom'}}>
        <div className="g7-body2-img-header1">
          <img src={imgHeader1} alt="g7-body2ImgHeader1" />
        </div>

        <div className="g7-body2-text">
          <h3 className="g7-body2-text-heading">
            G7 LÀ THƯƠNG HIỆU CÀ PHÊ HÒA TAN SỐ 1 VIỆT NAM
          </h3>

          <p className="g7-body2-text-para">
            Với công nghệ rang, chế biến tại Buôn Ma Thuột và trung tâm điều
            khiển tại Đức – Duy nhất Trung Nguyên sở hữu công nghệ kép của Châu
            Âu và bí quyết không thể sao chép của Trung Nguyên để tạo ra một
            loại cà phê hòa tan G7 thứ thiệt, thơm lừng, tuyệt ngon có chất
            lượng áp đảo cà phê hàng đầu thế giới đến từ Thụy Sỹ với tỷ lệ G7 là
            89%.
          </p>
        </div>
      </div>
    </>
  );
};

export default G7_Body2;
