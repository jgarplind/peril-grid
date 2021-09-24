export interface IPeril {
  title: string;
  description: string;
  shortDescription: string;
  covered: string[];
  info: string;
  icon: { variants: { light: { svgUrl: string } } };
}

export const Peril = ({ title, icon }: Pick<IPeril, "title" | "icon">) => {
  return <button>{`${title}`}</button>;
};
