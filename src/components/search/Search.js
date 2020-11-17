import React from 'react'
import './Search.scss'
import useFetchJobs from '../useFetchJobs'
import { Container,Form } from 'react-bootstrap'
import JobBoard from '../jobBoard/JobBoard'

const Search = () => {
    const { jobs, loading, error} = useFetchJobs ()
    return (

        <Container>
            <Form className="mt-4">
                <Form.Row className=".d-inline-flex">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control type="text" placeholder="Search Job Type" />
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Search Location" />
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check style={{marginTop:'40px'}} type="checkbox" label="Only Full Time" />
                </Form.Group>
                </div>
                </Form.Row>
            </Form>
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
