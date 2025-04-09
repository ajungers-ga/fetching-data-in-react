// // 1.1 Import dependencies and define API key
// import { useState } from 'react';
// const YOUR_API_KEY = '93926e8f19954ff8892185839241302';

// // 1.2 Define the component
// const App = () => {
//   // 1.3 Define state variables
//   const [city, setCity] = useState('');
//   const [location, setLocation] = useState('');
//   const [temperature, setTemperature] = useState('');
//   const [conditions, setConditions] = useState('');

//   // 2.1 Define event handlers
//   const handleChange = (event) => {
//     setCity(event.target.value);
//   }
// // 2.2 
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`
//       );
//       const JSONdata = await response.json();
//       console.log(JSONdata);

//       // 2.3 Update state with weather data
//       setLocation(JSONdata.location.name);
//       setTemperature(JSONdata.current.temp_f);
//       setConditions(JSONdata.current.condition.text);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   }

//   // 3. Return JSX
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         Please enter your city name for the weather:
//         <input type="text" onChange={handleChange} />
//         <input type="submit" value="Get my forecast!" />
//       </form>

//       <h1>Here's Your Weather Report:</h1>
//       <p>Location: {location}</p>
//       <p>Temperature: {temperature}</p>
//       <p>Conditions: {conditions}</p>
//     </>
//   );
// }

// // 4. Export the component
// export default App;



// // 1. Import dependencies and define API key
// import { useState, useEffect } from 'react';
// const YOUR_API_KEY = '93926e8f19954ff8892185839241302';

// // 2. Define the component
// const App = () => {
//   // 1. Define state variables
//   const [city, setCity] = useState('');
//   const [location, setLocation] = useState('');
//   const [temperature, setTemperature] = useState('');
//   const [conditions, setConditions] = useState('');

//   // 2. Define event handlers
//   const handleChange = (event) => {
//     setCity(event.target.value);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`
//       );
//       const JSONdata = await response.json();
//       console.log(JSONdata);

//       // Update state with weather data
//       setLocation(JSONdata.location.name);
//       setTemperature(JSONdata.current.temp_f);
//       setConditions(JSONdata.current.condition.text);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   }

//   // 3. Fetch default weather data on load (Philadelphia)
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=Philadelphia`
//         );
//         const JSONdata = await response.json();
//         console.log('Initial fetch (Philadelphia):', JSONdata);

//         setLocation(JSONdata.location.name);
//         setTemperature(JSONdata.current.temp_f);
//         setConditions(JSONdata.current.condition.text);
//       } catch (error) {
//         console.error("Error loading initial data:", error);
//       }
//     };

//     getData();
//   }, []);

//   // 4. Return JSX
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         Please enter your city name for the weather:
//         <input type="text" onChange={handleChange} />
//         <input type="submit" value="Get my forecast!" />
//       </form>

//       <h1>Here's Your Weather Report:</h1>
//       <p>Location: {location}</p>
//       <p>Temperature: {temperature}</p>
//       <p>Conditions: {conditions}</p>
//     </>
//   );
// }

// // 5. Export the component
// export default App;



// 1. Import dependencies
import { useState, useEffect } from 'react';

// 2. Define the component
const App = () => {
  // 1. Define state variables
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState('');
  const [conditions, setConditions] = useState('');

  // 2. Define event handlers
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/?city=${city}`);
      const JSONdata = await response.json();
      console.log(JSONdata);

      setLocation(JSONdata.location.name);
      setTemperature(JSONdata.current.temp_f);
      setConditions(JSONdata.current.condition.text);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // 3. Fetch default weather data on load (Philadelphia)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/?city=Philadelphia`);
        const JSONdata = await response.json();
        console.log("Initial load:", JSONdata);

        setLocation(JSONdata.location.name);
        setTemperature(JSONdata.current.temp_f);
        setConditions(JSONdata.current.condition.text);
      } catch (error) {
        console.error("Error loading initial data:", error);
      }
    };

    getData();
  }, []);

  // 4. Return JSX
  return (
    <>
      <form onSubmit={handleSubmit}>
        Please enter your city name for the weather:
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Get my forecast!" />
      </form>

      <h1>Here's Your Weather Report:</h1>
      <p>Location: {location}</p>
      <p>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </>
  );
};

// 5. Export the component
export default App;
