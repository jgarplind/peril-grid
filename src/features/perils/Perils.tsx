import { FluidGrid } from "../../components/FluidGrid";
import { Peril } from "./Peril";
import { usePerils } from "./usePerils";
import styled from "@emotion/styled";

export const Perils = () => {
  const { perils } = usePerils({
    contractType: "SE_APARTMENT_RENT",
    locale: "en_SE",
  });

  const perilElements = perils.map((perilProperties) => (
    <Peril {...perilProperties} />
  ));

  const Heading = styled.h1`
    text-transform: uppercase;
  `;

  return (
    <section>
      <Heading>Our coverage</Heading>
      <FluidGrid items={perilElements} />
    </section>
  );
};
