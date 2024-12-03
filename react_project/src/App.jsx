/* eslint-disable no-unused-vars */
// router setup
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import AddJobPage from './pages/AddJobPage';
import JobPage , { jobLoader } from './pages/JobPage';
// import ViewAllJobs from './components/ViewAllJobs';



// every react component will return jsx but you can only return only one element with as much as functioning inside it , it must be wrapped inside a single parent element
// wrapped in a fragment "<></>" 
// if need to add dynamic values in jsx , use {} and put whatever value inside that



const App = () => {
  // add new job when the user clicks submit
  // add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      // data will go under the headers in the body
      body : JSON.stringify(newJob)
    })
    return
  }

  // delete job
  const deleteJob = async (id) => {
    // delete request
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE'

    })
    return
  }


  const router = createBrowserRouter(
    // for home page 
    createRoutesFromElements(
      // mainlayout parent route
      <Route path='/' element={<MainLayout/>}>
        {/* components routes nested in the mainlayouts routes */}
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} /> {/* page containing all jobs */}
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} /> {/* page containing all add job section and function addjob is passed as a prop in the addjob page*/}
        <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob }/>} loader= {jobLoader}/> {/* page containing singular jobs */}
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/add-job' element={< />} /> */}
  
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
