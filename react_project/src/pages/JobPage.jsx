// import { useState , useEffect } from "react"
import { useParams , useLoaderData } from "react-router-dom"
import Spinner from "../components/Spinner"



const JobPage = () => {
  const {id} = useParams()
  const job =  useLoaderData() // using data loader 
  //block for data fetching using useeffect
  // const [job , setJob] = useState(null)
  // const [loading ,  setLoading ] = useState(true)
  
  // useEffect(() => {
  //   const fetchJobs = async () =>{
  //     try {
  //       const res = await fetch(`/api/jobs/${id}`)
  //       const data = await res.json()//storing fetched data
  //       console.log(data)
  //       setJob(data)
  //     } catch (error) {
  //         console.log('Error fetching data', error)
  //     }finally{
  //         setLoading(false) // always execute as 
  //     }
  //   }

  //   fetchJobs();
  // },[])

 
  return (
    <h1>{job.title}</h1>
  ) 
}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json()
  return data;
}

export {JobPage as default , jobLoader}