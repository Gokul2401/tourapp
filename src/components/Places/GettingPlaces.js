// import React, { useState } from 'react';
// import axios from 'axios';

// const GeoapifyAPI = '63e02a6c7fee40da9747a8c828a3614a';

// const HotelsFinder = () => {
//   const [leftLongitude, setLeftLongitude] = useState(10.716463143326969);
//   const [topLatitude, setTopLatitude] = useState(48.755151258420966);
//   const [rightLongitude, setRightLongitude] = useState(10.835314015356737);
//   const [bottomLatitude, setBottomLatitude] = useState(48.680903341613316);
//   const [hotels, setHotels] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchHotels = async () => {
//     try {
//       const response = await axios.get(
        // `https://api.geoapify.com/v2/places?categories=tourism&filter=rect:${leftLongitude},${topLatitude},${rightLongitude},${bottomLatitude}&limit=20&apiKey=${GeoapifyAPI}`
//       );
//       console.log(response)
//       setHotels(response.data.features);
//     } catch (error) {
//       console.error(error);
//       setError('Error occurred while fetching hotels.');
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     fetchHotels();
//   };

//   return (
//     <div>
//       <h2>Hotels Finder</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Left Longitude:
//           <input
//             type="number"
//             step="any"
//             value={leftLongitude}
//             onChange={e => setLeftLongitude(parseFloat(e.target.value))}
//           />
//         </label>
//         <label>
//           Top Latitude:
//           <input
//             type="number"
//             step="any"
//             value={topLatitude}
//             onChange={e => setTopLatitude(parseFloat(e.target.value))}
//           />
//         </label>
//         <label>
//           Right Longitude:
//           <input
//             type="number"
//             step="any"
//             value={rightLongitude}
//             onChange={e => setRightLongitude(parseFloat(e.target.value))}
//           />
//         </label>
//         <label>
//           Bottom Latitude:
//           <input
//             type="number"
//             step="any"
//             value={bottomLatitude}
//             onChange={e => setBottomLatitude(parseFloat(e.target.value))}
//           />
//         </label>
//         <button type="submit">Search Hotels</button>
//       </form>

//       {error && <p>{error}</p>}

//       <h3>Hotels:</h3>
//       <ul>
//         {hotels.map(hotel => (
//           <li key={hotel.properties.place_id}>{hotel.properties.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HotelsFinder;


import React, { useState } from 'react';
import axios from 'axios';

const Autocomplete = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Call the Geoapify Places Autocomplete API
    try {
      const response = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=63e02a6c7fee40da9747a8c828a3614a`
      );

      setResults(response.data.features);
    } catch (error) {
      console.error('Error fetching autocomplete results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={query}
        onChange={handleChange}
      />
      <ul>
        {results.map((result) => (
          <li key={result.properties.osm_id}>{result.properties.formatted}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
