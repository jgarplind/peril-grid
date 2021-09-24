import styled from "@emotion/styled";
import { colorsV3 } from "@hedviginsurance/brand";

export interface IPeril {
  title: string;
  description: string;
  shortDescription: string;
  covered: string[];
  info: string;
  icon: { variants: { light: { svgUrl: string } } };
}

const Button = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  height: 160px;
  border: 1px solid ${colorsV3.gray900};
  border-radius: 0.375rem;
`;

export const Peril = ({ title, icon }: Pick<IPeril, "title" | "icon">) => {
  return (
    <Button>
      {`${title}`}
      <svg width="90" height="90">
        <image xlinkHref={icon.variants.light.svgUrl} width="90" height="90" />
      </svg>
    </Button>
  );
};
