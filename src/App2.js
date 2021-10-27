import { LargePersonListItem } from "./components/people/LargePersonListItem";
import { SmallPersonListItem } from "./components/people/SmallPersonListItem";
import { RegularList } from "./components/RegularList";
import { people } from "./data";

function App() {
  return (
    <>
      <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
      <RegularList items={people} resourceName="person" itemComponent={LargePersonListItem} />
    </>
  );
}

export default App;
