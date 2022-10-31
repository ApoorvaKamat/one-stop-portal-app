import { Container } from "react-bootstrap";
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
                        style={{ backgroundColor: "#b9c2ed" }}
                    >
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                        />
                        IT Compliance
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
                        />
                        AWS basics
                    </MDBListGroupItem>
            </Container>
        </>
    )
}