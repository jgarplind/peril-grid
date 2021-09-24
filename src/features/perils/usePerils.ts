import { useEffect, useState } from "react";
import { IPeril } from "./Peril";

const BASE_URL = "https://hedvig-staging-rest-api.vercel.app/api";
const PERILS_URL = `${BASE_URL}/perils`;

type ContractType = "SE_APARTMENT_RENT" | "DK_APARTMENT_RENT";
type Locale = "en_SE" | "en_DK";

export const usePerils = ({
  contractType,
  locale,
}: {
  contractType: ContractType;
  locale: Locale;
}): { perils: IPeril[] } => {
  const [perils, setPerils] = useState<IPeril[]>([]);

  useEffect(() => {
    const fetchPerils = async (queryParameters: URLSearchParams) => {
      const perilsUrlWithQueryParameters = `${PERILS_URL}?${queryParameters.toString()}`;
      const response = await fetch(perilsUrlWithQueryParameters);
      const perils = await response.json();
      setPerils(perils);
    };

    let queryParameters = new URLSearchParams();
    queryParameters.append("contractType", contractType);
    queryParameters.append("locale", locale);
    fetchPerils(queryParameters);
  }, [contractType, locale]);

  return { perils };
};
