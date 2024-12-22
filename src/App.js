import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Cards from './Components/Cards';
import Filter from "./Components/Filter";
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(data);
        setCourses(output.data)

      }
      catch (error) {
        console.log("Error occured");
      }

    }
    fetchData();

  }, []);
  return (<div>
    <Navbar />
    <Filter filterData={filterData} />
    <Cards courses={courses} />
    <ToastContainer />
  </div>
  );

};

export default App;
