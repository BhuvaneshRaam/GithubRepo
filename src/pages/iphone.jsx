import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";
import iphone13pro from "../images/iphone13pro.jpg";
import iphone13plus from "../images/iphone13plus.jpeg";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function iphone() {
  return (
    <Layout>
      <section>
        <div class="d-flex justify-content-center container-fluid image align-items-center">
          <div className="d-flex flex-column align-items-center image-text position-absolute text-center w-75">
            <h2 class="heading fw-bold display-1">iPhone 13 Pro</h2>
            <div class="display-5">Oh. So. Pro.</div>
            <div className="d-flex justify-content-around my-3 w-25 fs-4">
              <a href="/" className="d-flex align-items-end">
                Learn More{" "}
                <FontAwesomeIcon
                  className="ms-1 mb-1"
                  icon={faAngleRight}
                  color="#8A8280"
                />
              </a>
              <a href="/" className="d-flex align-items-end">
                Buy Now{" "}
                <FontAwesomeIcon
                  className="ms-1 mb-1"
                  icon={faAngleRight}
                  color="#8A8280"
                />
              </a>
            </div>
          </div>

          <div class="row">
            <img
              src={iphone13pro}
              alt="iphone13pro"
              className="position-relative p-0"
            />
          </div>
          <div>
            <div className="d-flex flex-column align-items-center image-text position-absolute text-center w-75">
            <h2 class="heading fw-bold display-1">iPhone 13 Pro</h2>
            <div class="display-5">Oh. So. Pro.</div>
            <div className="d-flex justify-content-around my-3 w-25 fs-4">
              <a href="/" className="d-flex align-items-end">
                Learn More{" "}
                <FontAwesomeIcon
                  className="ms-1 mb-1"
                  icon={faAngleRight}
                  color="#8A8280"
                />
              </a>
              <a href="/" className="d-flex align-items-end">
                Buy Now{" "}
                <FontAwesomeIcon
                  className="ms-1 mb-1"
                  icon={faAngleRight}
                  color="#8A8280"
                />
              </a>
            </div>
          </div>

          <div class="row">
            <img
              src={iphone13pro}
              alt="iphone13pro"
              className="position-relative p-0"
            />
          </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
