import styled from "@emotion/styled";

const Grid = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

export const FluidGrid = ({ items }: { items: JSX.Element[] }) => {
  return (
    <Grid>
      {items.map((item) => (
        <>{item}</>
      ))}
    </Grid>
  );
};
