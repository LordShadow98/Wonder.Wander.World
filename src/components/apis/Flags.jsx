import { gql, useQuery } from "@apollo/client";

const GET_ALL_COUNTRIES = gql`
  query countries {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
    }
    continents {
      name
    }
  }
`
;
function Countries() {
  const { data, loading, error } = useQuery(GET_ALL_COUNTRIES);
  if (loading) return <p>loading..</p>;
  if (error) return <p>Error..{error.menssage}</p>;

  return (
    <div className="container">
      <div className="row">
        {data.countries.map((country, index) => (
          <div className="col-md-3" key={index}>
            <div className="border">
              
              <div>
                {/* {country.languages.map((language, index) => (
                    <p key={index}>{language.name}</p>
                  ))}
                   */}
                <p>{country.continent.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="barra">
        <div className="row">
          <h2>Continents</h2>
          <div className="continents">
            <ul className="row">
              {data.continents.map((continent, index) => (
                <li key={index}>{continent.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Countries;
