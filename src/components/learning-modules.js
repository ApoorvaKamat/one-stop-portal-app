import { Container } from "react-bootstrap";
import React from 'react';
import Form from 'react-bootstrap/Form';
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
} from "mdb-react-ui-kit";


export function LearningModules() {


    return (
        <>
            <Container >
                    <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#b9c2ed", textDecoration:"line-through" }}
                    >
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                            defaultChecked
                            style={{ width:"3em", height:"3em" }}
                        />
                        IT Compliance
                    </MDBListGroupItem>
                    <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#b9c2ed", textDecoration:"line-through" }}
                    >
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                            defaultChecked
                            style={{ width:"3em", height:"3em" }}
                        />
                        Tax compliance
                    </MDBListGroupItem>
                    <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#b9c2ed" }}
                    >
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                            disabled={true}
                            style={{ width:"3em", height:"3em" }}
                        />
                        React JS
                    </MDBListGroupItem>
                    <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#b9c2ed" }}
                    >
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                            disabled={true}
                            style={{ width:"3em", height:"3em" }}
                        />
                        AWS basics
                    </MDBListGroupItem>
            </Container>
        </>
    )
}