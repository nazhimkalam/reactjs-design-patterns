import { LargePersonListItem } from "./components/LayoutComponents/people/LargePersonListItem";
import { SmallPersonListItem } from "./components/LayoutComponents/people/SmallPersonListItem";
import { LargeProductListItem } from "./components/products/LargeProductListItem";
import { SmallProductListItem } from "./components/products/SmallProductListItem";
import { RegularList } from "./components/RegularList";
import { people, products } from "./data";
import { NumberedList } from "./components/NumberedList";

function App() {
  return (
    <>
      <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
      <NumberedList items={people} resourceName="person" itemComponent={LargePersonListItem} />
      <RegularList items={products} resourceName="product" itemComponent={SmallProductListItem} />
      <NumberedList items={products} resourceName="product" itemComponent={LargeProductListItem} />
    </>
  );
}

export default App;
