import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IDescription from "../description/description";
import IProgressBar from "../progress-bar/prograss-bar";
import ICategories from "../categories/categories";

import { tracks } from "../../mockAPI/tracks";

export interface IDashboardProps {
  title?: string;
}
export interface IDashboardState {
  userName: string;
  skills: any[];
}
export default class IDashboard extends React.Component<
  IDashboardProps,
  IDashboardState
> {
  public static defaultProps: IDashboardProps = {
    title: "Fake Snowflake"
  };

  public constructor(props: IDashboardProps) {
    super(props);

    this.state = {
      userName: "Random User",
      skills: []
    };
  }

  private createSkillset = () => {
    let allSkills: any[] = [];
    let tracksKeys = Object.keys(tracks);

    tracksKeys.forEach(key => {
      console.log(tracks[key]);
      allSkills.push(tracks[key]);
    });

    return allSkills;
  };

  public componentWillMount() {
    let allSkills = this.createSkillset();
    this.setState({
      skills: [...allSkills]
    });
  }

  public render() {
    const { title } = this.props;
    const { userName, skills } = this.state;
    // const createCategories = () => {
    //   let categories = [];
    //   for (let track in allTracks) {
    //     categories.push(allTracks[track].category);
    //   }

    //   return categories.filter(
    //     (value, index, categories) => categories.indexOf(value) === index
    //   );
    // };

    // const uniqueCategories = createCategories();

    // const createBadges = () => {
    //   let badges = [];
    //   for (let track in allTracks) {
    //     let name = allTracks[track].displayName;
    //     let cat = allTracks[track].category;
    //     badges.push({ name, cat });
    //   }
    //   return badges;
    // };

    // const uniqueBadges = createBadges();

    return (
      <Container className="dashboard">
        <Row>
          <Col>{title}</Col>
          <Col>{userName}</Col>
        </Row>
        <Row className="py-4">
          <Col>
            <IProgressBar />
          </Col>
        </Row>
        <Row className="py-4 ">
          <ICategories
            uniqueCategories={uniqueCategories}
            uniqueBadges={uniqueBadges}
          />
        </Row>
        <Row className="py-4">
          <Col>
            <IDescription />
          </Col>
        </Row>
      </Container>
    );
  }
}
