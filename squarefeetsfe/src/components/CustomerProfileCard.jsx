import React from "react";
import Nav from "./Nav";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function CustomerProfileCard() {
  return (
    <div>
      <Nav />
      <div className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="container py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="12" xl="4">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle"
                      fluid
                      style={{ width: "100px" }}
                    />
                  </div>
                  <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
                  <MDBCardText className="text-muted mb-4">
                    City <span className="mx-2">|</span> <a href="#!">State</a>
                  </MDBCardText>
                  <div className="mb-4 pb-2">name@email.com</div>
                  <MDBBtn rounded size="lg">
                    Change Password
                  </MDBBtn>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div></div>
                    <div className="px-3"></div>
                    <div></div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
