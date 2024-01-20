import React, { useEffect } from "react";
import styles from "./product-details.module.css";
import GridLayout from "../layout/grid-layout";
import ProductPresentation from "./product-presentation";
import ProductInfo from "./product-info";
import productsData from "../homepage/product-listing/product.json";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProductDetails } from "./../../app/productSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  img: string;
}

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const product = useAppSelector((state: RootState) => state.product.product) as ProductProps | null;

  useEffect(() => {
    const thisProduct = productsData.find(
      (prod: ProductProps) => prod.id === Number(productId)
    );

    if (thisProduct) {
      dispatch(setProductDetails(thisProduct));
    }
  }, [productId, dispatch]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.product}>
      <div className="container">
        <GridLayout>
          <div className="left-side">
            <ProductPresentation imgSrc={product.img} />
          </div>
          <div className={styles.right_side}>
            <ProductInfo product={product} />
          </div>
        </GridLayout>
      </div>
    </div>
  );
};

export default ProductDetails;
