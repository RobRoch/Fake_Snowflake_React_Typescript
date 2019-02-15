import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IDescription from "../description/description";
import IProgressBar from "../progress-bar/prograss-bar";
import ICategories from "../categories/categories";
import { rank, points } from "../../mockAPI/levels";
import { tracks } from "../../mockAPI/tracks";
import ILevelingBars from "../leveling-bars/leveling-bars";
import IUserInformation from "../user-information/user-information";

export interface IDashboardProps {}
export interface IDashboardState {
  user: {
    name: string;
    points: number;
    rank: string;
    nextLevelPoints: number;
  };
  tracks: any[];
  currentTrack: {};
  progressBar: {};
}
export default class IDashboard extends React.Component<
  IDashboardProps,
  IDashboardState
> {
  public constructor(props: IDashboardProps) {
    super(props);

    this.state = {
      user: {
        name: "Random User",
        points: 0,
        rank: "",
        nextLevelPoints: 0
      },
      tracks: [],
      currentTrack: {},
      progressBar: {}
    };
  }

  private getClosestKey(array: any, points: any): number {
    let prev = -1;
    let i;
    for (i in array) {
      let n = parseInt(i);
      if (prev != -1 && points < n) return prev;
      else prev = n;
    }
    return 0;
  }

  private getNextLevelPoints(array: any, key: any): number {
    let keys = Object.keys(array);
    let index = keys.indexOf(key.toString());

    return parseInt(keys[index + 1]);
  }
  private countUserPoints = () => {
    this.setProgressBarPoints();
    let userPoints = 0;
    this.state.tracks.map(track => {
      userPoints += points[track.userLevel];
    });
    return userPoints;
  };
  private updateUser = () => {
    let userPoints = this.countUserPoints();
    let userRankKey = this.getClosestKey(rank, userPoints) || 0;
    let userNextLevelPoints = this.getNextLevelPoints(rank, userRankKey);
    this.setState({
      user: {
        ...this.state.user,
        points: userPoints,
        rank: rank[userRankKey],
        nextLevelPoints: userNextLevelPoints
      }
    });
  };

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
  private setProgressBarPoints = () => {
    let newProgressBar: any = {};
    let uniqueCategories = [
      ...new Set(this.state.tracks.map(track => track.category))
    ];
    this.state.tracks.map(track => {
      uniqueCategories.map(cat => {
        if (track.category === cat) {
          newProgressBar[cat] =
            (newProgressBar[cat] || 0) + points[track.userLevel];
        }
      });
    });
    this.setState({
      progressBar: newProgressBar
    });
  };
  public handleTrackChange = (displayName: string): void => {
    let newTrack = this.state.tracks.find(track => {
      return track.displayName === displayName;
    });
    this.setState({
      currentTrack: newTrack
    });
  };

  public handleLevelChange = (track: any, level: number): void => {
    let newTracksSetup = this.state.tracks.map(oldTrack => {
      if (oldTrack === track) {
        track.userLevel = level;
        return track;
      } else {
        return oldTrack;
      }
    });
    this.updateUser();
    this.setState({
      tracks: newTracksSetup
    });
  };

  public componentWillMount() {
    let allTracks = this.createSkillset();
    this.setState(
      {
        tracks: [...allTracks],
        currentTrack: allTracks[0]
      },
      () => {
        this.updateUser();
      }
    );
  }

  public render() {
    const { user, tracks, currentTrack, progressBar } = this.state;
    const uniqueCategories = [...new Set(tracks.map(track => track.category))];
    return (
      <Container className="dashboard">
        <Row className="py-4">
          <Col>
            <IUserInformation user={user} />
            <IProgressBar
              nextLevel={user.nextLevelPoints}
              progressBar={progressBar}
            />
          </Col>
          <Col>
            <ILevelingBars
              skills={tracks}
              handleLevelChange={this.handleLevelChange}
            />
          </Col>
        </Row>
        <Row className="py-4 ">
          <ICategories
            skills={tracks}
            currentTrack={currentTrack}
            uniqueCategories={uniqueCategories}
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
