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
// import ViewAllJobs from './components/ViewAllJobs';



// every react component will return jsx but you can only return only one element with as much as functioning inside it , it must be wrapped inside a single parent element
// wrapped in a fragment "<></>" 
// if need to add dynamic values in jsx , use {} and put whatever value inside that

const router = createBrowserRouter(
  // for home page 
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      {/* <Route path='/add-job' element={< />} /> */}
    </Route>
    
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
