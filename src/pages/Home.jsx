import Layout from "../components/Layout";
import iphone13pro from "../images/iphone13pro.jpg";

export default function Home() {
  return (
    <Layout>
      <section>
        <div class="container-fluid">
          <div class=" row d-flex justify-content-center align-items-center display-3">
            iPhone 13 Pro
          </div>
          <div class="row d-flex justify-content-center align-items-center text-center">
            Oh. So. Pro.
          </div>
          <div class="row">
            <img src={iphone13pro} alt="iphone13pro" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
