"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Drawer, List } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface CartItem {
  id: number;
  brand: string;
  model: string;
  price: string;
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const parsePrice = (price: string): number => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("Cart");
    if (storedCartItems) {
      try {
        const parsedItems: CartItem[] = JSON.parse(storedCartItems);
        setCartItems(parsedItems);

        const total = parsedItems.reduce(
          (acc, item) => acc + parsePrice(item.price),
          0
        );
        setTotalPrice(total);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
      }
    }
  }, [open, cartItems]);

  const handleCheckout = () => {
    const productList = cartItems
      .map((item) => `- ${item.brand} ${item.model}`)
      .join("\n");

    const shareText = encodeURIComponent(
      `Halo! Saya tertarik untuk membeli produk berikut:\n${productList}\n\nApakah produk tersebut tersedia?`
    );

    const whatsappShareURL = `https://wa.me/6285271810418?text=${shareText}`;
    window.open(whatsappShareURL, "_blank");
  };

  return (
    <div className="flex flex-col w-full px-8 py-4 bg-white border-gray-200 border-b">
      <div className="flex flex-row w-full items-center justify-between gap-96">
        <div>
          <a href="/" className="text-2xl">
            Tech<span className="font-bold text-blue-600">Shop</span>
          </a>
        </div>
        <div className="grow"></div>
        <div>
          <Button
            type="primary"
            onClick={showDrawer}
            icon={<ShoppingCartOutlined />}
          >
            Cart
          </Button>
          <Drawer
            title="Your Cart"
            onClose={onClose}
            open={open}
            classNames={{
              body: "flex flex-col justify-between",
            }}
          >
            <List
              className="!overflow-y-scroll"
              dataSource={cartItems}
              renderItem={(item) => (
                <List.Item>
                  <div
                    className="flex flex-row gap-4 items-center"
                    onClick={() => console.log(item)}
                  >
                    <Image
                      src={
                        "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                      }
                      alt=""
                      width={60}
                      height={60}
                    />
                    <div className="flex flex-col gap-0">
                      <p>{item.brand}</p>
                      <p>{item.model || "Unknown Model"}</p>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </List.Item>
              )}
            />
            <div className="flex flex-col w-full gap-4">
              <p>
                Total: <strong>${totalPrice.toFixed(2)}</strong>
              </p>
              <Button type="primary" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
