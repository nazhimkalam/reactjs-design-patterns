export const RegularList = (props) => {
  const { items, resourceName, itemComponent: ItemComponent } = props;
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
