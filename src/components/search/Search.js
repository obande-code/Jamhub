import React from 'react'
import './Search.scss'
import useFetchJobs from '../useFetchJobs'
import { Container } from 'react-bootstrap'
import JobBoard from '../jobBoard/JobBoard'

const Search = () => {
    const { jobs, loading, error} = useFetchJobs ()
    return (

        <Container>
           {loading && <h1>Loading...</h1>}
           {error && <h1>Error. Try Refreshing.</h1>}
           {
               jobs.map( job =>(
                   <JobBoard job={job}  key={job.id} />
               ))
           }
        </Container>
        
    )
}

export default Search
