import React from 'react'

const NestingJson = () => {
    const data = [
        {
          id: 1,
          country: 'India',
          states: [
            {
              id: 1,
              state: 'Maharashtra',
              cities: ['Mumbai', 'Pune', 'Thane', 'Nashik'],
            },
            {
              id: 2,
              state: 'Gujarat',
              cities: ['Ahmedabad', 'Baroda', 'Surat', 'Valsad'],
            },
          ],
        },
        {
          id: 2,
          country: 'Canada',
          states: [
            {
              id: 1,
              state: 'Calgary Metro',
              cities: ['Airdrie', 'Calgary', 'Chestermere', 'Calgary'],
            },
            {
              id: 2,
              state: 'Edmonton Metro',
              cities: [
                'St. Albert',
                'Fort Saskatchewan',
                'Edmonton',
                'Beaumont',
              ],
            },
          ],
        },
      ];
  return (
    <div>
      <h1>Nested Data in List View</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.map((country) => (
          <li style={{ marginBottom: '20px' }}>
            Country: {country.country}
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              {country.states.map((state) => (
                <li key={state.id} style={{ marginBottom: '10px' }}>
                    State: {state.state}
                  <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                    {state.cities.map((city) => (
                      <li>
                       City: {city}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NestingJson