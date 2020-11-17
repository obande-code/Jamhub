import React from 'react'
import { Card, Badge, Button, Accordion,  } from 'react-bootstrap'
import ReactMarkdown from "react-markdown"

const JobBoard = ({ job }) => {
    return (
        <div className="job">
            <Card className="my-3">
                <Card.Body>
                   <div className="d-flex justify-content-between">
                       <Card.Title>
                          {job.title}   <span className="text-muted font-weight-lighter">{job.company}</span>
                       </Card.Title>
                       <img  className="d-none d-md-block" height="50px" src={job.company_logo} alt={job.company} />
                   </div>
                   <Card.Subtitle className="font-weight-lighter font-italic">
                       {new Date(job.created_at).toLocaleDateString()}
                   </Card.Subtitle>
                       <Badge variant="info" className="mr-2">{job.type} </Badge>
                       <Badge variant="primary" className="clearfix">{job.location} </Badge>
                       <div>
                       <ReactMarkdown source={job.how_to_apply} />
                       </div>
                       <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                View More!!!
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>{job.description}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion> 
                         </Card.Body>
                   </Card>
        </div>
    )
}

export default JobBoard
