import React from "react";
import Layout from "../../components/layout";
import CartHeader from "../../components/cart page/cart-header";
import CartWrapper from "../../components/cart page/cart-wrapper";

const Cart = () => {
  return (
    <Layout>
      <CartHeader />
      <CartWrapper />
    </Layout>
  );
};

export default Cart;
