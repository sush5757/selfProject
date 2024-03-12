import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Login").then((response) => {
      setListOfUsers(response.data); // Set the fetched data to the state
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  return (
    <div className="App">
      {listOfUsers.map((value, key) => (
        <div className='user' key={key}> {/* Added key prop to the mapped elements */}
          <div className='title'>{value.username} </div> {/* Fixed typo in value.username */}
          <div className='body'>{value.email} </div>
          <div className='footer'>{value.phone_number} </div>
        </div>
      ))}
    </div>
  );
}

export default App;
