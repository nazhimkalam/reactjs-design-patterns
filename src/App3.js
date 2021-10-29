import React from "react";
import { Modal } from "./components/LayoutComponents/Modal";
import { LargeProductListItem } from "./components/LayoutComponents/products/LargeProductListItem";
import { products } from "./data";

const App = () => {
  return (
    <Modal>
      <LargeProductListItem product={products[0]} />
    </Modal>
  );
};

export default App;
