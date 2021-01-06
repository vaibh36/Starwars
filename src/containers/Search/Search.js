import React from 'react';
import './Search.css'

const Search = () => {

    const [planet, setPlanet] = React.useState('');
    const [details, setDetails] = React.useState({});
    const [status, setStatus] = React.useState(false);
    const [err, setError] = React.useState('')

    const search = async () => {
        try {
            const result = await fetch('https://swapi.dev/api/planets/' + planet + '/');
            result.json().then((res) => {
                setDetails(res);
                setStatus(true);
            })
        } catch (err) {
            setError(err)
        }

    }

    return (
        <div className="search">
            <h4>Enter Planet Id</h4>
            <input
                value={planet}
                onChange={(event) => setPlanet(event.target.value)}
                type="text"
            />
            <button disabled={planet.length === 0} onClick={search} className="search__Button">
                Search
            </button>
            {
                status && details.detail === 'Not found' && <p>No planets found</p>
            }
            {
                Object.keys(details).length > 0 && details.detail !== 'Not found' &&
                <div className="planet__details">
                    <p><b>Name:</b>{details.name}</p>
                    <p><b>Climate:</b>{details.climate}</p>
                    <p><b>Gravity:</b>{details.gravity}</p>
                    <p><b>Population:</b>{details.population}</p>
                    <p><b>Surface_water:</b> {details.surface_water}</p>
                    <p><b>diameter:</b> {details.diameter}</p>
                </div>
            }
        </div>
    )

}

export default Search;