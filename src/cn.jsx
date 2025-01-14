// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cnt = ({ countries, sear, cat }) => {
   
    return (
        <div className="hm">
            {
                // eslint-disable-next-line react/prop-types
                countries
                .filter((cn) => {
                    const matchesSearch = sear === '' || cn.name.toLowerCase().includes(sear.toLowerCase());
                    const matchesCategory = cat === '' || cn.region.toLowerCase().includes(cat.toLowerCase());
                    return matchesSearch && matchesCategory;
                })
                .map((cn) => (
                    <div className="count" key={cn.name}>
                        <Link to={`/countrie/${cn.alpha2Code}`} className="link">
                            <img src={cn.flags.png} alt={`Flag of ${cn.name}`} />
                            <h4>{cn.name}</h4>
                            <p>Population: {cn.population}</p>
                            <p>Region: {cn.region}</p>
                            <p>Capital: {cn.capital}</p>
                        </Link>
                    </div>
                ))
            
            }
        </div>
    );
}

export default Cnt;
