import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBTypography,
} from "mdb-react-ui-kit";


export function Conversations() {
    return (
        <>
            <MDBCol sm="3" className="w-100">
                <MDBCard>
                    <MDBCardBody>
                        <MDBTypography listUnStyled className="mb-0">
                            <li className="p-2 border-bottom">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row">
                                        <img
                                            src="/man1.png"
                                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                            width="60"
                                        />
                                        <div className="pt-1">
                                            <p className="fw-bold m-0" style={{ textAlign: "left" }}>Yash Pratapwar</p>
                                            <p className="small text-muted">
                                                I am working on it
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="small text-muted mb-1">Just now</p>
                                        <span className="badge bg-danger float-end">1</span>
                                    </div>
                                </div>
                            </li>
                            <li className="p-2 border-bottom">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row">
                                        <img
                                            src="/man2.png"
                                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                            width="60"
                                        />
                                        <div className="pt-1 text-left">
                                            <p className="fw-bold mb-0" style={{ textAlign: "left" }}>Sajal Suhane</p>
                                            <p className="small text-muted">
                                                Hey, do you have time to discuss?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="small text-muted mb-1">5 mins ago</p>
                                    </div>
                                </div>
                            </li>
                            <li className="p-2 border-bottom">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row">
                                        <img
                                            src="/woman1.png"
                                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                            width="60"
                                        />
                                        <div className="pt-1">
                                            <p className="fw-bold mb-0" style={{ textAlign: "left" }}>Apoorva Kamat</p>
                                            <p className="small text-muted">
                                                Any updates on #6350-1?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="small text-muted mb-1">Yesterday</p>
                                    </div>
                                </div>
                            </li>
                            <li className="p-2 border-bottom">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row">
                                        <img
                                            src="/woman2.png"
                                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                            width="60"
                                        />
                                        <div className="pt-1">
                                            <p className="fw-bold mb-0" style={{ textAlign: "left" }}>Anusri</p>
                                            <p className="small text-muted" style={{ textAlign: "left" }}>
                                                Okay
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="small text-muted mb-1">Yesterday</p>
                                    </div>
                                </div>
                            </li>
                        </MDBTypography>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}