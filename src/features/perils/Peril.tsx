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

const PerilCard = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 0.375rem;
  border: 1px solid ${colorsV3.gray900};
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font: inherit;
  height: 160px;
  justify-content: space-evenly;
  padding: 8px;
`;

const Heading = styled.h2`
  font-size: 18px;
  margin: 0;
  text-align: center;
`;

export const Peril = ({ title, icon }: Pick<IPeril, "title" | "icon">) => {
  return (
    <PerilCard>
      <Heading>{title}</Heading>
      <svg width="60" height="60">
        <image xlinkHref={icon.variants.light.svgUrl} width="60" height="60" />
      </svg>
    </PerilCard>
  );
};
