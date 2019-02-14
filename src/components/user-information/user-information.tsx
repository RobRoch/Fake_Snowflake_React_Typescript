import * as React from "react";
import { Button, Row, Col } from "react-bootstrap";
export interface IUserInformationProps {
  user: any;
}

export default class IUserInformation extends React.Component<
  IUserInformationProps,
  any
> {
  public render() {
    const { user } = this.props;
    return (
      <>
        <h1>Hello, {user.name}</h1>
        <h3>Your current position: {user.rank}</h3>
        <Row className="my-4">
          <Col className="d-flex flex-column align-items-center">
            <h6 className="points-label mb-0">Current</h6>
            <Button className="points-button">{user.points}</Button>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h6 className="points-label mb-0">Next level</h6>
            <Button className="points-button">{user.nextLevelPoints}</Button>
          </Col>
        </Row>
      </>
    );
  }
}
