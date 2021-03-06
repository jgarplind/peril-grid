import styled from "@emotion/styled";
import { colorsV3 } from "@hedviginsurance/brand";

export interface IPeril {
  title: string;
  shortDescription: string;
  info: string;
  icon: { variants: { light: { svgUrl: string } } };
}

const PerilCard = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 0.375rem;
  border: 1px solid ${colorsV3.gray100};
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font: inherit;
  height: 160px;
  justify-content: space-evenly;
  padding: 8px;
  transition: all 150ms ease-in-out;
  background-color: ${colorsV3.white};
  &:hover {
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075);
  }
  &:focus {
    border: 1px solid ${colorsV3.gray500};
    outline: none;
  }
`;

export const Peril = ({ title, icon, shortDescription, info }: IPeril) => {
  return (
    <PerilCard
      onClick={() =>
        alert(`You clicked ${title}\n${shortDescription}\n${info}`)
      }
    >
      {title}
      <svg width="60" height="60">
        <image xlinkHref={icon.variants.light.svgUrl} width="60" height="60" />
      </svg>
    </PerilCard>
  );
};
