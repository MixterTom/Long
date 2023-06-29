import "./LoiSongTinhThuc_Body5.scss";
import imgHeaderBody5 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body5/1.jpg";
import imgProduct1Body5 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body5/2.jpg";
import imgProduct2Body5 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body5/3.jpg";
import imgProduct3Body5 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body5/4.jpg";
import imgProduct4Body5 from "../../../assets/LoiSongTinhThuc/LoiSongTinhThuc_Body5/5.jpg";
const LoiSongTinhThuc_Body5 = () => {
  return (
    <>
      <div className="loisongtinhthuc-body5-wrap">
        <div
          className="loisongtinhthuc-body5-header row"
          style={{ backgroundImage: `url(${imgHeaderBody5})` }}
        >
          <div className="loisongtinhthuc-body5-text-heading">
            BỘ SẢN PHẨM NGHỆ SĨ - TRIẾT GIA - CHIẾN BINH TÂM
          </div>
        </div>

        <div className="loisongtinhthuc-body5-products row">
          <div className="loisongtinhthuc-body5-product col">
            <img
              src={imgProduct1Body5}
              alt="loisongtinhthuc-body5-product-img"
            />
            <h4 className="loisongtinhthuc-body5-product-heading">
              The Spririt of Philosophy (Hemingway)
            </h4>
            <p className="loisongtinhthuc-body5-product-para">
              Lấy cảm hứng từ tinh thần dám dấn thân vì đam mê để vượt qua
              nghịch cảnh cuộc đời và để lại kho tàng tuyệt tác văn chương mang
              đậm triết lý cho nhân loại của nhà văn Ernest Hemingway; bộ sản
              phẩm Tinh thần Triết gia – The Spririt of Philosophy mong muốn đem
              đến cho người trải nghiệm nguồn năng lượng của tinh thần dấn thân
              để thách thức mọi nghịch cảnh – chinh phục khát vọng cuộc đời.
            </p>
            <a href="" className="loisongtinhthuc-body5-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body5-product col">
            <img
              src={imgProduct2Body5}
              alt="loisongtinhthuc-body5-product-img"
            />
            <h4 className="loisongtinhthuc-body5-product-heading">
              The Spirit of Creativity (The Creation of Adam)
            </h4>
            <p className="loisongtinhthuc-body5-product-para">
              Lấy cảm hứng từ bức họa nổi tiếng “Chúa trời tạo ra Adam” của
              Michelangelo – Bộ Sản phẩm The Spirit of Creativity - The Creation
              of Adam mong muốn đem đến cho người trải nghiệm nguồn năng lượng
              của sự sáng tạo để xây dựng nên những trang sử vĩ đại cho cuộc đời
              mình.
            </p>
            <a href="" className="loisongtinhthuc-body5-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body5-product col">
            <img
              src={imgProduct3Body5}
              alt="loisongtinhthuc-body5-product-img"
            />
            <h4 className="loisongtinhthuc-body5-product-heading">
              The Spirit of Philosophy (Vitruvian man)
            </h4>
            <p className="loisongtinhthuc-body5-product-para">
              Lấy cảm hứng từ bức họa “Người Vitruvian” của Leonardo da Vinci,
              bức họa đã góp một phần quan trọng trong y học, giải phẫu học ngày
              nay. Bộ Sản phẩm The Spirit of Philosophy - Vitruvian man mong
              muốn đem đến cho người trải nghiệm nguồn năng lượng của tinh thần
              triết gia để hình thành lý tưởng sống phù hợp, hoặc tự giải thích
              được tất cả những sự việc quanh đời sống bằng quan điểm, lý lẽ
              thuyết phục.
            </p>
            <a href="" className="loisongtinhthuc-body5-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>

          <div className="loisongtinhthuc-body5-product col">
            <img
              src={imgProduct4Body5}
              alt="loisongtinhthuc-body5-product-img"
            />
            <h4 className="loisongtinhthuc-body5-product-heading">
              The Spirit of Warrior (Chiến Binh Tâm)
            </h4>
            <p className="loisongtinhthuc-body5-product-para">
              Lấy cảm hứng từ tinh thần chiến binh của Nhà khai sáng trên lưng
              ngựa Napoleon, bộ sản phẩm Chiến Binh Tâm mong muốn khơi dậy ở mọi
              người đặc biệt là giới trẻ tinh thần chiến binh (phẩm chất cao
              quý, kỹ năng, đạo đức, khí chất… ) & khát vọng để thành công trong
              mọi lĩnh vực của cuộc sống.
            </p>
            <a href="" className="loisongtinhthuc-body5-readmore">
              Tìm hiểu thêm
              <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoiSongTinhThuc_Body5;
