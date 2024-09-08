"use client";
import React from "react";
import { Button, Card, Rate, notification } from "antd";
import DetailModal from "./DetailModal";
import { AddToCartHandler } from "@/utils/handlers/productHandlers";

interface CardProductProps {
  product: Product; // Expect a single product
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    AddToCartHandler(product);

    notification.success({
      message: "Product Added",
      description: `${product.brand} ${product.model} has been added to your cart.`,
      placement: "top",
    });
  };

  return (
    <>
      <Card
        className="!p-0"
        classNames={{
          body: "!p-2",
        }}
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={`${product.brand} ${product.model}`}
            src={
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
          />
        }
        onClick={handleCardClick}
      >
        <div className="flex flex-col min-h-32 justify-between !gap-4">
          <div>
            <p>
              {product.brand} {product.model}
            </p>
            <p>{product.price}</p>
            {product.rating === null ? (
              <p className="italic text-gray-300">Rating tidak tersedia</p>
            ) : (
              <Rate disabled value={parseInt(product.rating)} />
            )}
          </div>

          <Button type="primary" onClick={handleAddToCart}>
            + Add To Cart
          </Button>
        </div>
      </Card>
      <DetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        product={product}
        addToCart={handleAddToCart}
      />
    </>
  );
};

export default CardProduct;
