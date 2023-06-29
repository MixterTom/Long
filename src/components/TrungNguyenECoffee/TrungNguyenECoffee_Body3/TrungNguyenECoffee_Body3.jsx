import './TrungNguyenECoffee_Body3.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import imgLeftBody3 from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body3/left.jpg'
import imgRight1Body3 from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body3/caphe.jpg'
import imgRight2Body3 from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body3/sach.jpg'
import imgRight3Body3 from '../../../assets/TrungNguyenECoffee/TrungNguyenECoffee_Body3/banhmi.jpg'
const TrungNguyenECoffee_Body3 = () => {
    return(
        <>
            <div className="trungnguyenecoffee-body3-wrap">
                <div className="trungnguyenecoffee-body3-imgs row">
                    <div className="trungnguyenecoffee-body3-img-left col">
                        <img src={imgLeftBody3} alt="trungnguyenecoffeebody3imgleft" />
                    </div>

                    <div className="trungnguyenecoffee-body3-img-right col">
                        <div className="trungnguyenecoffee-body3-img-right1">
                            <img src={imgRight1Body3} alt="trungnguyenecoffeebody3imgright1" />
                        </div>

                        <div className="trungnguyenecoffee-body3-img-right2">
                            <img src={imgRight2Body3} alt="trungnguyenecoffeebody3imgright2" />
                        </div>

                        <div className="trungnguyenecoffee-body3-img-right3">
                            <img src={imgRight3Body3} alt="trungnguyenecoffeebody3imgright3" />
                        </div>
                    </div>
                </div>

                <div className="trungnguyenecoffee-body3-info">
                    <div className="trungnguyenecoffee-body3-info-hotline">
                        <i class="bi bi-telephone"></i>
                        Hotline: 088 673 1188   
                    </div>

                    <div className="trungnguyenecoffee-body3-info-fanpage">
                        <i class="bi bi-facebook"></i>
                        Fanpage E-coffee
                    </div>

                    <div className="trungnguyenecoffee-body3-info-maps">
                        <i class="bi bi-facebook"></i>
                        Danh sách không gian
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrungNguyenECoffee_Body3;