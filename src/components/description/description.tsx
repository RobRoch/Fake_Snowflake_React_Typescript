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
      shownLevel: 0
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

  private handleSelect = (key: number) => {
    this.setState({
      shownLevel: key
    });
  };

  public componentDidMount() {
    this.setState({
      shownLevel: this.props.currentTrack.userLevel
    });
  }
  public componentDidUpdate(prevProps: IDescriptionProps) {
    console.log("prevProps", prevProps.currentTrack.userLevel);
    console.log("now", this.props.currentTrack.userLevel);
    console.log("shown", this.state.shownLevel);
    if (
      prevProps.currentTrack.userLevel !== this.props.currentTrack.userLevel
    ) {
      console.log("changedState");
      this.setState({
        shownLevel: this.props.currentTrack.userLevel
      });
    }
    if (this.props.currentTrack.category !== prevProps.currentTrack.category) {
      this.setState({
        shownLevel: this.props.currentTrack.userLevel
      });
    }
    // if (this.props.currentTrack.userLevel !== this.state.shownLevel) {
    //   this.setState({
    //     shownLevel: this.props.currentTrack.userLevel
    //   });
    // }
    // this.setState(
    //   {
    //     shownLevel: this.props.currentTrack.userLevel
    //   },
    //   () => {
    //     console.log(this.state.shownLevel);
    //   }
    // );
  }

  public render() {
    const { currentTrack } = this.props;
    const { shownLevel } = this.state;
    const milestoneLength = currentTrack.milestones.length;
    return (
      <Tab.Container activeKey={shownLevel} onSelect={this.handleSelect}>
        <h3>Level description</h3>
        <p className="current-track-description">
          {currentTrack.displayName} - {currentTrack.description}
        </p>
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
