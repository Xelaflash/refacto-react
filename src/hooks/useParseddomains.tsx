import { useMemo } from 'react';

interface ParsedDomains {
  countries: string[];
  classifications: string[];
  subClassifications: string[];
}

const parseDomains = (domains: string[]): ParsedDomains => {
  const result: ParsedDomains = {
    countries: [],
    classifications: [],
    subClassifications: [],
  };

  for (const domain of domains) {
    const country = domain.substring(0, 2);
    const classification = domain.substring(3, 5);
    const subClassification = domain.substring(6);

    if (!result.countries.includes(country)) {
      result.countries.push(country);
    }
    if (!result.classifications.includes(classification)) {
      result.classifications.push(classification);
    }
    if (!result.subClassifications.includes(subClassification)) {
      result.subClassifications.push(subClassification);
    }
  }

  return result;
};

export const useParsedDomains = (domains: string[] = []): ParsedDomains => {
  return useMemo(() => parseDomains(domains), [domains]);
};
