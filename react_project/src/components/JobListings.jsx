import jobs from '../jobs.json'
import JobListing from './JobListing'

// ishome is used as props for diff situation of sowing jobs at home page and on jobs page, by default its false so itll show all jobs but when the props is set to true showing 3 jobs at home page
// eslint-disable-next-line react/prop-types
const JobListings = ({isHome = false}) => {

   const jobListings = isHome ? jobs.slice(0,3) : jobs 
  return (
    //  {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse jobs'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* mapping the array from jobs.json using map method , prevents repetition of elements and outputting bunch pf html code */}
            {jobListings.map((job)=> (
                // list requires a key value(unique) and another joblisting element for individual element
                <JobListing key={job.id} job={job}/>
            ))}
            </div>   
        </div>
   </section>
  )
}

export default JobListings