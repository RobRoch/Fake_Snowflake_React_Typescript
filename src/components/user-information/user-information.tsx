import * as React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { IUser } from "../../mockAPI/interfaces";
export interface IUserInformationProps {
  user: IUser;
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
        <h2>Your current position: {user.rank}</h2>
        <Row className="my-4">
          <Col className="d-flex flex-column align-items-center">
            <h6 className="points-label">Total points</h6>
            <Button className="points-button">{user.points}</Button>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <h6 className="points-label">Points to next level</h6>
            <Button className="points-button">
              {user.nextLevelPoints > 200 ? "Rly?" : user.nextLevelPoints}
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}
