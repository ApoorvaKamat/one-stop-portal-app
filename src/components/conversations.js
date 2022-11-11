import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from 'react';
import { ChatModal } from "./chat-modal";

const people = [
    {
        name: "Yash Pratapwar",
        msg: " I am working on it"
    },
    {
        name: "Sajal Suhane",
        msg: " Hey, do you have time to discuss?"
    },
    {
        name: "Anusri Yarlagadda",
        msg: " Okay"
    },
    {
        name: "Apoorva Kamat",
        msg: " Any updates on #645-1"
    }
]


export function Conversations() {
    return (
        <>
            <MDBCol sm="3" className="w-100">
                <MDBCard>
                    <MDBCardBody>
                        <MDBTypography listUnStyled className="mb-0">
                            {
                                people.map(i => {
                                    return <ChatModal 
                                                name = {i.name} 
                                                msg = {i.msg}
                                            />
                                })
                            }
                        </MDBTypography>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}