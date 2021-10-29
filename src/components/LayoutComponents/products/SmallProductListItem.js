export const SmallProductListItem = (props) => {
    const { product } = props;
	const { name, price } = product;

	return <h3>{name} - {price}</h3>
}