import React from "react";
import Layout from "../../components/layout";
import HeroHeader from "../../components/homepage/hero-header";
import ProductListing from "../../components/homepage/product-listing";
import Benefits from "../../components/homepage/benefits";
import Testimonials from "../../components/homepage/testimonials";
import Popular from "../../components/homepage/popular";

const Homepage = () => {
  return (
    <Layout>
      <HeroHeader />
      <ProductListing />
      <Benefits />
      <Testimonials />
      <Popular />
    </Layout>
  );
};

export default Homepage;
