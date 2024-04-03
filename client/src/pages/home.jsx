import { Link } from "react-router-dom";
import { useState } from "react";
import { Input, Card, Modal, Button, Dropdown } from "antd";
import GetAllProducts from "../api/getProducts";

import Styles from "../styles/home.module.css";

const Search = Input.Search;
const { Meta } = Card;

function Home() {
  // Product MODALS
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Product MODALS END

  return (
    <>
      {/* Top AD section */}
      <div className={Styles.topad}>
        <a className={Styles.topAdLink}>Fri frakt på ditt första köp!</a>
      </div>

      {/* Search nav section */}
      <div className={Styles.heroNavContainer}>
        <ul className={Styles.SearchNav}>
          <li className={Styles.logo}>
            <a className={Styles.hakimLogo} href="/">
              HAKIM LIVS
            </a>
          </li>
          <li>
            <Search
              className={Styles.Searchbar}
              placeholder="SÖK PRODUKTER"
              style={{
                width: 800,
                borderRadius: "4px",
              }}
              size={"large"}
              onSearch={(value) => console.log(value)}
            />
          </li>
          <li>
            <Link to="/login" className={Styles.login}>
              Logga in{" "}
            </Link>
          </li>
          <li>
            <Link to="/Checkout" className={Styles.login}>
              Till kassan{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>

      {/* HERO HEADER  */}

      <div className={Styles.Heroheader}>
        <h2 className={Styles.herofont}>
          SAVE CASH <br /> Don't waste cash{" "}
        </h2>
      </div>

      {/* category select dropdown */}

      <div className={Styles.categoriesNavContainer}>
        <div className={Styles.Dropdown}>
          <h2 className={Styles.categoriesHeader}>Kategorier</h2>
          <ul>
            <li>
              <a href="">Godis</a>
            </li>
            <li>
              <a href="">Mejeri</a>
            </li>
            <li>
              <a href="">Kött</a>
            </li>
            <li>
              <a href="">Fisk</a>
            </li>
            <li>
              <a href="">Bröd</a>
            </li>
            <li>
              <a href="">Grönsaker</a>
            </li>
            <li>
              <a href="">Frukt </a>
            </li>
            <li>
              <a href="">Kaffe</a>
            </li>
            <li>
              <a href="">Städartiklar</a>
            </li>
          </ul>
        </div>

        <div className={Styles.ProductDisplayContainer}>
          {/* Content for product display */}
          <div className={Styles.ProductDisplay}>
            <ul className={Styles.productCards}>
              <li>
                <GetAllProducts />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
