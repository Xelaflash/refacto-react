import { useParsedDomains } from '../../hooks/useParseddomains';

interface Props {
  domains?: string[];
}

const DomainFilter: React.FC<Props> = ({ domains = [] }) => {
  const { countries, classifications, subClassifications } = useParsedDomains(domains);

  return (
    <>
      <label htmlFor="countries">Countries: </label>
      <select name="countries" multiple>
        {countries.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
      <label htmlFor="classifications">classifications: </label>
      <select name="classifications" multiple>
        {classifications.map((classification) => (
          <option value={classification} key={classification}>
            {classification}
          </option>
        ))}
      </select>
      <label htmlFor="subClassifications">subClassifications: </label>
      <select name="subClassifications" multiple>
        {subClassifications.map((subClassification) => (
          <option value={subClassification} key={subClassification}>
            {subClassification}
          </option>
        ))}
      </select>
    </>
  );
};

export default DomainFilter;
