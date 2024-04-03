import { Link } from "react-router-dom";
import { useState } from "react";
import { Input, Card, Modal, Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Styles from "../styles/home.module.css";

const Search = Input.Search;
const { Meta } = Card;

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
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
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                arrow
              >
                <Button>Snacks</Button>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                arrow
              >
                <Button>Dryck</Button>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
                arrow
              >
                <Button>Träning & Hälsa</Button>
              </Dropdown>
            </li>
          </ul>
        </div>

        <div className={Styles.ProductDisplayContainer}>
          {/* Content for product display */}
          <div className={Styles.ProductDisplay}>
            <ul className={Styles.productCards}>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://productimages.motatos.com/MS124361/ms124361-nat_rewater_max_brus_citrus_20_st_109gjpg.jpg?tr=w-264"
                      onClick={showModal}
                    />
                  }
                >
                  <Meta title="Trocadero" />
                  <p>10kr</p>
                  <button className={Styles.productBtn}>KÖP</button>
                </Card>
                <Modal
                  title="product-modal"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText="Lägg till i varukorg"
                  cancelText="Stäng"
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </li>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://productimages.motatos.com/MS216891/trocamustzero-af7ef081-771f-4bfc-8698-181524ebe903.jpg?tr=w-264"
                      onClick={showModal}
                    />
                  }
                >
                  <Meta title="Trocadero" />
                  <p>10kr</p>
                  <button className={Styles.productBtn}>KÖP</button>
                </Card>

                <Modal
                  title="product-modal"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </li>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://productimages.motatos.com/MS112346/cocacolavanilla-da7e0713-2055-4f70-bb85-61c9d59b83ba.png?tr=w-264"
                      onClick={showModal}
                    />
                  }
                >
                  <Meta title="Trocadero" />
                  <p>10kr</p>
                  <button className={Styles.productBtn}>KÖP</button>
                </Card>

                <Modal
                  title="product-modal"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </li>
              <li>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://productimages.motatos.com/MS216891/trocamustzero-af7ef081-771f-4bfc-8698-181524ebe903.jpg?tr=w-264"
                      onClick={showModal}
                    />
                  }
                >
                  <Meta title="Trocadero" />
                  <p>10kr</p>
                  <button className={Styles.productBtn}>KÖP</button>
                </Card>

                <Modal
                  title="product-modal"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
