import React, { useEffect, useState } from "react";
import "./SerchBar.css";

const SerchBarPrueba = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://countries.trevorblades.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query {
                countries {
                  code
                  name
                }
              }
            `,
          }),
        });

        const { data } = await response.json();
        setCountries(data.countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Search">
      <input
        key="searchInput"
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredCountries.map((country) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SerchBarPrueba;
