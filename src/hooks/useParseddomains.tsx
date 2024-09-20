import { useMemo } from 'react';

interface ParsedDomains {
  countries: string[];
  classifications: string[];
  subClassifications: string[];
}

const parseDomains = (domains: string[] = []): ParsedDomains => {
  const countriesSet = new Set<string>();
  const classificationsSet = new Set<string>();
  const subClassificationsSet = new Set<string>();

  for (const domain of domains) {
    countriesSet.add(domain.substring(0, 2));
    classificationsSet.add(domain.substring(3, 5));
    subClassificationsSet.add(domain.substring(6));
  }

  return {
    countries: Array.from(countriesSet),
    classifications: Array.from(classificationsSet),
    subClassifications: Array.from(subClassificationsSet),
  };
};

export const useParsedDomains = (domains: string[] = []): ParsedDomains => {
  return useMemo(() => parseDomains(domains), [domains]);
};
