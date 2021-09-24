export const FluidGrid = ({ items }: { items: JSX.Element[] }) => {
  return (
    <div>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};
