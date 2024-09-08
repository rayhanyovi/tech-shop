"use client";
import React from "react";
import { Button, Modal } from "antd";

const DetailModal = ({
  open,
  onClose,
  product,
  addToCart,
}: {
  open: boolean;
  onClose: () => void;
  product: Product;
  addToCart: any;
}) => {
  const formatValue = (value: string | null) => (value ? value : "#N/A");

  return (
    <Modal
      title={`Product Details`}
      open={open}
      onOk={onClose}
      classNames={{ body: "!p-4" }}
      onCancel={onClose}
      footer={[
        <Button type="primary" onClick={addToCart}>
          + Add To Cart
        </Button>,
      ]}
    >
      <div className="flex flex-col w-full gap-4">
        {" "}
        <p>
          <span className="font-bold">Brand:</span> {product.brand}
        </p>
        <p>
          <span className="font-bold">Model:</span> {product.model}
        </p>
        <p>
          <span className="font-bold">Screen Size:</span>{" "}
          {formatValue(product.screen_size)}
        </p>
        <p>
          <span className="font-bold">Color:</span> {formatValue(product.color)}
        </p>
        <p>
          <span className="font-bold">Hard Disk:</span>{" "}
          {formatValue(product.harddisk)}
        </p>
        <p>
          <span className="font-bold">CPU:</span> {formatValue(product.cpu)}
        </p>
        <p>
          <span className="font-bold">RAM:</span> {formatValue(product.ram)}
        </p>
        <p>
          <span className="font-bold">OS:</span> {formatValue(product.os)}
        </p>
        <p>
          <span className="font-bold">Special Features:</span>{" "}
          {formatValue(product.special_features)}
        </p>
        <p>
          <span className="font-bold">Graphics:</span>{" "}
          {formatValue(product.graphics)}
        </p>
        <p>
          <span className="font-bold">Graphics Coprocessor:</span>{" "}
          {formatValue(product.graphics_coprocessor)}
        </p>
        <p>
          <span className="font-bold">CPU Speed:</span>{" "}
          {formatValue(product.cpu_speed)}
        </p>
        <p>
          <span className="font-bold">Rating:</span> {product.rating}
        </p>
        <p>
          <span className="font-bold">Price:</span> {product.price}
        </p>
      </div>
    </Modal>
  );
};

export default DetailModal;
