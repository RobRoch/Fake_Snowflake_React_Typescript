import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IDescription from "../description/description";
import IProgressBar from "../progress-bar/prograss-bar";
import ICategories from "../categories/categories";

export interface IDashboardProps {}

export default class IDashboard extends React.Component<IDashboardProps, any> {
  public render() {
    return (
      <Container className="dashboard">
        <Row className="py-4">
          <Col>
            <IProgressBar />
          </Col>
          <Col>Snowflake</Col>
        </Row>
        <Row className="py-4">
          <Col>
            <ICategories />
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <IDescription />
          </Col>
        </Row>
        {/* //SLIDER
    //SNOWFLAKE
    //IMAGE
    //RANGE */}
      </Container>
    );
  }
}
