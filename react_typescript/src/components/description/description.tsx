import * as React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
export interface IDescriptionProps {
  currentTrack: any;
}

export default class IDescription extends React.PureComponent<
  IDescriptionProps,
  any
> {
  public constructor(props: IDescriptionProps) {
    super(props);

    this.state = {
      currentMilestone: 0
    };
  }

  private createNavigation = (milestoneLength: number, category: string) => {
    let nav = [];
    for (let i = milestoneLength; 0 < i; i--) {
      nav.push(
        <Nav.Item key={i}>
          <Nav.Link className={`nav-link nav-link-${category}`} eventKey={i}>
            {i}
          </Nav.Link>
        </Nav.Item>
      );
    }
    return nav;
  };

  private createTabPanels = (currentTrack: any) => {
    let tabPanels = currentTrack.milestones.map(
      (milestone: any, index: number) => (
        <Tab.Pane key={index} className="description-tab" eventKey={index + 1}>
          <p className="milestone-summary">
            Level {index + 1} {milestone.summary}
          </p>
          <ul>
            {milestone.signals.map((signal: string) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <ul>
            {milestone.examples.map((example: string) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </Tab.Pane>
      )
    );
    return tabPanels;
  };

  public render() {
    const { currentTrack } = this.props;
    console.log(currentTrack);
    const milestoneLength = currentTrack.milestones.length;
    return (
      <Tab.Container
        defaultActiveKey={currentTrack.userLevel}
        activeKey={currentTrack.userLevel}
      >
        <h3>Level description</h3>
        <p className="current-track-description">{currentTrack.description}</p>
        <h4>Attributes</h4>
        <Row>
          <Col sm="auto">
            <Nav variant="pills" className="flex-column">
              {this.createNavigation(milestoneLength, currentTrack.category)}
            </Nav>
          </Col>
          <Col>
            <Tab.Content>{this.createTabPanels(currentTrack)}</Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
