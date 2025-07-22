import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner';
// ishome is used as props for diff situation of sowing jobs at home page and on jobs page, by default its false so itll show all jobs but when the props is set to true showing 3 jobs at home page

// eslint-disable-next-line react/prop-types
const JobListings = ({isHome = false}) => {
    const [jobs , setJobs] = useState([]);//default value in useState is empty bcoz we will request using useEffect from the server and fill the empty array  

    const [loading , setLoading] = useState(true)// for loading animation while requesting and after the fetching the default value will be false

// fetching the data from the server and setting state of the job which currently empty(empty array) with the fetched data
    useEffect(() => {
        const fetchJobs = async () =>{
            // proxy usage
            const apiUrl = isHome ? 'https://recruit-json-api.onrender.com/jobs?_limit=3' : 'https://recruit-json-api.onrender.com/jobs' // _limit is the key here
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()//storing fetched data
                setJobs(data) //setting the state of the 'jobs' after the data being fetched
            } catch (error) {
                console.log('Error fetching data', error)
            }finally{
                setLoading(false) // always execute as 
            }
        } 
        fetchJobs()
    }, [isHome]);


  return (
    //  {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'Browse jobs'}
            </h2>

            
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* mapping the array from jobs.json using map method , prevents repetition of elements and outputting bunch pf html code */}
                        {jobs.map((job)=> (
                            // list requires a key value(unique) and another joblisting element for individual element
                            <JobListing key={job.id} job={job}/>
                        ))}
                    </div>    
                )}
                
            
        </div>
   </section>
  )
}

export default JobListings