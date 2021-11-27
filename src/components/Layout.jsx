export default function Layout(props) {
  return (
    <div>
      <section class="header sticky-top justify-content-center">
        <nav class="navbar-dark container-fluid p-0 d-flex justify-content-between align-items-center main-head w-75">
          <a
            class="navbar-brand p-2 d-flex justify-content-center align-items-center"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-apple"
              viewBox="0 0 16 16"
            >
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
            </svg>
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            Store
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            Mac
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            iPad
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            iPhone
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            Watch
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            Airpods
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            TV & Home
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            Only on Apple
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            Accessories
          </a>
          <a
            class="text-decoration-none text-grey d-flex justify-content-center align-items-center"
            href="/"
          >
            Support
          </a>
          <a
            class="navbar-brand p-2 d-flex justify-content-center align-items-center"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </a>
          <a
            class="navbar-brand p-2 d-flex justify-content-center align-items-center"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </a>
        </nav>
      </section>
      <section>{props.children}</section>

      <section class="footer d-flex flex-column justify-content-center align-items-center">
        <div className="w-75">
          <hr />
          <div className="row align-self-between mb-4">
            <div className="col">
              <b>Shop and Learn</b>
              <div className="list-unstyled footer-list">
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>iPod touch</li>
                <li>AirTag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </div>
            </div>
            <div className="col">
              <b>Services</b>
              <div className="list-unstyled footer-list">
                <li>Apple Music</li>
                <li>Apple TV+</li>
                <li>Apple Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Arcade</li>
                <li>iCloud</li>
                <li>Apple One</li>
                <li>Apple Card</li>
                <li>Apple Books</li>
                <li>Apple Podcasts</li>
                <li class="mb-4-5">App Store</li>
                <b>Account</b>
                <li>Manage Your Apple ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </div>
            </div>
            <div className="col">
              <b>Apple Store</b>
              <div className="list-unstyled footer-list">
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Refurbished and Clearance</li>
                <li>Financing</li>
                <li>Apple Trade In</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </div>
            </div>
            <div className="col">
              <b>For Business</b>
              <div className="list-unstyled footer-list">
                <li>Apple and Business</li>
                <li className="mb-4-5">Shop for Business</li>
                <b>For Education</b>
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li className="mb-4-5">Shop for College</li>
                <b>For Healthcare</b>
                <li>Apple in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li className="mb-4-5">Health records on iPhone</li>
                <b>For Government</b>
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </div>
            </div>
            <div className="col">
              <b>Apple Values</b>
              <div className="list-unstyled footer-list">
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li className="mb-4-5">Supplier Responsibility</li>
                <b>About Apple</b>
                <li>Newsroom</li>
                <li>Apple Ledership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics and Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-75 ">
          <hr />
          <div className="row align-self-between">
            <div className="col-auto">
              Please don't copyright. It's just a clone.
            </div>
            <div className="col-auto">
              Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms of
              Use&nbsp;&nbsp;|&nbsp;&nbsp;Sales and
              Refunds&nbsp;&nbsp;|&nbsp;&nbsp;Legal&nbsp;&nbsp;|&nbsp;&nbsp;Site
              Map
            </div>
            <div className="col d-flex justify-content-end">India</div>
          </div>
        </div>
        <br />
        <br />
      </section>
    </div>
  );
}
