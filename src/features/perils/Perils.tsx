import { FluidGrid } from "../../components/FluidGrid";
import { Peril } from "./Peril";
import { usePerils } from "./usePerils";

export const Perils = () => {
  const { perils } = usePerils({
    contractType: "SE_APARTMENT_RENT",
    locale: "en_SE",
  });

  const perilElements = perils.map((perilProperties) => (
    <Peril {...perilProperties} />
  ));

  return (
    <section>
      <h1>Our coverage</h1>
      <FluidGrid items={perilElements} />
    </section>
  );
};
