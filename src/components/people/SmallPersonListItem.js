export const SmallPersonListItem = (props) => {
  const { person } = props;
  const { name, age } = person;

  return (
    <p> Name: {name}, Age: {age} years </p>
  );
};
