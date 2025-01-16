// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cnt = ({ countries, sear, cat }) => {
  const searchValue = sear?.toString().toLowerCase() || '';
  const categoryValue = cat?.toString().toLowerCase() || '';

  return (
    <div className="hm">
      {countries
        .filter((cn) => {
          const matchesSearch =
            searchValue === '' || cn.name.common.toLowerCase().includes(searchValue);
          const matchesCategory =
            categoryValue === '' || cn.region.toLowerCase().includes(categoryValue);
          return matchesSearch && matchesCategory;
        })
        .map((cn) => (
          <div className="count" key={cn.cca2}>
            <Link to={`/countrie/${cn.cca2}`} className="link">
              <img src={cn.flags?.png} alt={`Flag of ${cn.name.common}`} />
              <h4>{cn.name.common}</h4>
              <p>Population: {cn.population || 'N/A'}</p>
              <p>Region: {cn.region || 'N/A'}</p>
              <p>Capital: {cn.capital || 'N/A'}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Cnt;
