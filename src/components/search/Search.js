import React from 'react'
import './Search.scss'
import useFetchJobs from '../useFetchJobs'
import { Container,Col,Form } from 'react-bootstrap'
import JobBoard from '../jobBoard/JobBoard'

const Search = () => {
    const { jobs, loading, error} = useFetchJobs ()
    return (

        <Container>
            <Form className="mt-4">
                <Form.Row className=".d-inline-flex">
                <Col>
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control type="text" placeholder="Search Job Type" />
                </Col>
                <Col>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Search Location" />
                </Col>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check style={{marginTop:'40px'}} type="checkbox" label="Only Full Time" />
                </Form.Group>
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
