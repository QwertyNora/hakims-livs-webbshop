import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "antd"; // Assuming you're using Ant Design components
import Styles from "../styles/getAllProducts.module.css";

function GetAllProducts() {
  const [getAllProducts, setgetAllProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setgetAllProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={Styles.allProductsContainer}>
      {getAllProducts.map((product) => (
        <Card
          className={Styles.productCard}
          key={product._id}
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              className={Styles.productImage}
              alt="example"
              src={product.imageURL}
              // src="https://productimages.motatos.com/MS124361/ms124361-nat_rewater_max_brus_citrus_20_st_109gjpg.jpg?tr=w-264"
              onClick={() => showModal(product)}
            />
          }
        >
          <Card.Meta title={product.title} />
          <p>{product.price}kr</p>
          <button className={Styles.productBtn}>KÖP</button>
        </Card>
      ))}
      <Modal
        title={selectedProduct && selectedProduct.title}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Lägg till i varukorg"
        cancelText="Stäng"
      >
        <p>{selectedProduct && selectedProduct.price}kr</p>{" "}
      </Modal>
    </div>
  );
}

export default GetAllProducts;
