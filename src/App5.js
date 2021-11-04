import { useProducts } from "./components/customHooks/useProducts";

const App5 = () => {
  const products = useProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App5;
