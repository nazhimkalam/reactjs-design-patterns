import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Pane = styled.div`
	flex: ${props => props.weight};
`;

export const SplitScreen = (props) => {
    const { children, leftWeight = 1, rightWeight = 1 } = props;
	const [left, right] = children;
    
	return (
		<Container>
			<Pane weight={leftWeight}>
				{left}
			</Pane>
			<Pane weight={rightWeight}>
				{right}
			</Pane>
		</Container>
	);
}