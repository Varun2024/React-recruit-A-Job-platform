import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

// every react component will return jsx but you can only return only one element with as much as functioning inside it , it must be wrapped inside a single parent element
// wrapped in a fragment "<></>" 
// if need to add dynamic values in jsx , use {} and put whatever value inside that

const router = createBrowserRouter(
  // for home page 
  createRoutesFromElements(<Route index element/>)
)

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  );
};

export default App;