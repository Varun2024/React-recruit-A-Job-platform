import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {

   const recentJobs = jobs.slice(0,3) 
  return (
    //  {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* mapping the array from jobs.json using map method , prevents repetition of elements and outputting bunch pf html code */}
            {recentJobs.map((job)=> (
                // list requires a key value(unique) and another joblisting element for individual element
                <JobListing key={job.id} job={job}/>
            ))}
            </div>   
        </div>
   </section>
  )
}

export default JobListings