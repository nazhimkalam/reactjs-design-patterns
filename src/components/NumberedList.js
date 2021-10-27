export const NumberedList = (props) => {
  const { items, resourceName, itemComponent: ItemComponent } = props;

  return (
    <>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3>
          <ItemComponent key={index} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};
