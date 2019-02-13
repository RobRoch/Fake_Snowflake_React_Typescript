import * as React from "react";
import { Container, Row, Jumbotron } from "react-bootstrap";

export interface IWelcomeHeaderProps {}

export default class IWelcomeHeader extends React.Component<
  IWelcomeHeaderProps,
  any
> {
  public render() {
    return (
      <Jumbotron className="welcome-header-jumbo" fluid>
        <h1>Fake snowflake</h1>
        <p>This application was created to learn basics of typescript.</p>
      </Jumbotron>
    );
  }
}
