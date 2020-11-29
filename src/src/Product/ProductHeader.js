import { RiMenu2Line, RiHome2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function ProductHeader() {
  return (
    <div className="fluid-container product_header">
      <div className="top_header_icons">
        <Link to="/" className="home_icon left">
          <RiHome2Line />
        </Link>
        <Link href="/" className="bars_icon right">
          <RiMenu2Line />
        </Link>
      </div>
      <div className="row  m-0">
        <div className="col-6 product_feature d-flex justify-content-center align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/product1.png`}
            className="img-fluid product_img"
            alt="Product Name Alternative"
          />
        </div>
        <div className="col-6 product_info d-flex align-items-center ">
          <div className="info_inner">
            <div className="text text-primary product_name fs-3 fw-bold">
              Product Name 2
            </div>
            <div className="text product_desc fs-6 fw-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates magnam inventore cum facere porro possimus.
            </div>
            <div className="text text-primary fw-bolder fs-2 product_price">
              49.99$
            </div>
            <button
              type="submit"
              class="text-white text-uppercase btn btn-primary"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductHeader;
