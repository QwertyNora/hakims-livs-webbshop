import { Link } from "react-router-dom";
import { useState } from "react";
import type { MenuProps } from "antd";
import {
  Layout,
  Menu,
  Input,
  Card,
  Dropdown,
  message,
  Space,
  Modal,
} from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Styles from "../styles/home.module.css";

const Search = Input.Search;
const { Meta } = Card;

function Home() {
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

  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
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
              Kassan{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>

      {/* HERO HEADER  */}

      <div className={Styles.Heroheader}>
        <h2 className={Styles.herofont}>
          SAVE CASH <br /> Don't waste cash{" "}
        </h2>
        {/* <button className={Styles.heroBtn}>Handla hos oss</button> */}
      </div>

      {/* Product section */}

      <div className={Styles.SideNav}>
        <ul>
          <h3 className={Styles.SideNavHeader}>Katergorier</h3>
          <li>
            <Dropdown
              className={Styles.categoryDropdown}
              menu={{ items, onClick }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p>Mat</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p>Drycker</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Dropdown menu={{ items, onClick }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <p>Godis</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
        </ul>
        <div className={Styles.ProductDisplay}>
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
