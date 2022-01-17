import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";
import iphone13pro from "../images/iphone13pro.jpg";
import iphone13 from "../images/iphone13.jpeg";
import airpodsCard from "../images/airpodsCard.jpeg";
import airpods3 from "../images/airpods3.jpeg";
import appleCard from "../images/appleCard.jpeg";
import homepod from "../images/homepodMini.jpeg";
import appleWatch from "../images/watch7.jpeg";
import macbook from "../images/mbpProM1.jpeg";
import watchtitle from "../images/watch7title.png";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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
        </div>
        <div class="d-flex justify-content-center container-fluid  image align-items-center mt-3">
          <div className="d-flex flex-column align-items-center image-text-1 position-absolute text-center w-75">
            <h2 class="heading fw-bold display-1">iPhone 13</h2>
            <div class="display-5">Your new superpower. Buy me 3 please</div>
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

          <div class="row mb-2">
            <img
              src={iphone13}
              alt="iphone13"
              className="position-relative px-0"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col">
            <div className="d-flex flex-column align-items-center image-text-card-1 position-absolute text-center w-75">
              <h4 class="heading display-3">Shop gifts.</h4>
              <div className="d-flex justify-content-around my-3 w-25 fs-4">
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

            <img
              className="container py-3 px-3 position-relative img-fluid"
              src={airpodsCard}
              alt=""
            />
          </div>
          <div className="col">
            <div className="d-flex flex-column align-items-center image-text-card-2 position-absolute text-center w-75">
              <h4 class="heading display-3">Airpods</h4>
              <h5>All-new with Spatial Audio</h5>
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
            <img
              className="container py-3 px-3 position-relative img-fluid"
              src={airpods3}
              alt=""
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col">
          <div className="d-flex flex-column align-items-center image-text-card-3 position-absolute text-center w-75">
              <h3 class="heading display-3">Homepod Mini</h3>
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
            <img
              className="container py-3 px-3 position-relative img-fluid"
              src={homepod}
              alt=""
            />
          </div>
          <div className="col">
          <div className="d-flex flex-column align-items-center image-text-card-4 position-absolute text-center w-75">
              <img
                src = {watchtitle}
              />
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
            <img
              className="container py-3 px-3 position-relative img-fluid"
              src={appleWatch}
              alt=""
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="col">
            <img
              className="container py-3 px-3 position-relative img-fluid"
              src={appleCard}
              alt=""
            />
          </div>
          <div className="col">
            <img
              className="container py-3 px-3 position-relative img-fluid"
              src={macbook}
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
