import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IDescription from "../description/description";
import IProgressBar from "../progress-bar/prograss-bar";
import ICategories from "../categories/categories";

import { tracks } from "../../mockAPI/tracks";
import ILevelingBars from "../leveling-bars/leveling-bars";
import IUserInformation from "../user-information/user-information";

export interface IDashboardProps {}
export interface IDashboardState {
  userName: string;
  skills: any[];
  currentTrack: {};
  userPoints: number;
  userLevel: string;
}
export default class IDashboard extends React.Component<
  IDashboardProps,
  IDashboardState
> {
  public constructor(props: IDashboardProps) {
    super(props);

    this.state = {
      userName: "Random User",
      skills: [],
      currentTrack: {},
      userPoints: 0,
      userLevel: ""
    };
  }

  private createSkillset = () => {
    let allSkills: any[] = [];
    let tracksKeys = Object.keys(tracks);
    let skill: { [k: string]: any };

    tracksKeys.forEach(key => {
      skill = tracks[key];
      skill.userLevel = 1;
      allSkills.push(skill);
    });
    return allSkills;
  };

  public handleTrackChange = (displayName: string): void => {
    let newTrack = this.state.skills.find(track => {
      return track.displayName === displayName;
    });
    this.setState({
      currentTrack: newTrack
    });
  };

  public handleLevelChange = (skill: any, level: number): void => {
    let newSkillsSetup = this.state.skills.map(oldSkill => {
      if (oldSkill === skill) {
        skill.userLevel = level;
        return skill;
      } else {
        return oldSkill;
      }
    });

    this.setState({
      skills: newSkillsSetup
    });
  };
  public componentWillMount() {
    let allSkills = this.createSkillset();
    this.setState({
      skills: [...allSkills],
      currentTrack: allSkills[0]
    });
  }

  public render() {
    const { userName, skills, currentTrack } = this.state;

    return (
      <Container className="dashboard">
        <Row>
          <Col>{userName}</Col>
        </Row>
        <Row className="py-4">
          <Col>
            <IUserInformation />
            <IProgressBar />
          </Col>
          <Col>
            <ILevelingBars
              skills={skills}
              handleLevelChange={this.handleLevelChange}
            />
          </Col>
        </Row>
        <Row className="py-4 ">
          <ICategories
            skills={skills}
            currentTrack={currentTrack}
            handleTrackChange={this.handleTrackChange}
          />
        </Row>
        <Row className="py-4">
          <Col>
            <IDescription currentTrack={currentTrack} />
          </Col>
        </Row>
      </Container>
    );
  }
}
