import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IDescription from "../description/description";
import IProgressBar from "../progress-bar/prograss-bar";
import ICategories from "../categories/categories";
import { rank, points } from "../../mockAPI/levels";
import { tracks } from "../../mockAPI/tracks";
import ILevelingBars from "../leveling-bars/leveling-bars";
import IUserInformation from "../user-information/user-information";
import { ITrack, IUser } from "../../mockAPI/interfaces";

export interface IDashboardProps {}
export interface IDashboardState {
  user: IUser;
  tracks: ITrack[];
  currentTrack: ITrack;
  progressBar: {};
  editableLevels: boolean;
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
      currentTrack: {
        displayName: "",
        category: "",
        description: "",
        milestones: [],
        userLevel: 0
      },
      progressBar: {},
      editableLevels: false
    };
  }

  private getClosestKey(ranks: Record<number, string>, points: number): number {
    let prev = -1;
    let rank;
    for (rank in ranks) {
      let nRank = parseInt(rank);
      if (prev != -1 && points < nRank) return prev;
      else prev = nRank;
    }
    return 0;
  }

  private getNextLevelPoints(
    ranks: Record<number, string>,
    key: number
  ): number {
    let keys = Object.keys(ranks);
    let index = keys.indexOf(key.toString());
    return parseInt(keys[index + 1]);
  }

  private countUserPoints = (): number => {
    this.setProgressBarPoints();
    let userPoints = 0;
    this.state.tracks.map(track => {
      userPoints += points[track.userLevel];
    });
    return userPoints;
  };

  private updateUser = (): void => {
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

  private createTrackset = (): ITrack[] => {
    //TODO no idea how ot change type allTracks and newTrack.
    let allTracks: any[] = [];
    let tracksKeys = Object.keys(tracks);
    let newTrack: { [k: string]: number };
    tracksKeys.forEach(key => {
      newTrack = tracks[key];
      newTrack.userLevel = 1;
      allTracks.push(newTrack);
    });
    return allTracks;
  };

  private setProgressBarPoints = (): void => {
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
  private handleEditlevels = (): void => {
    console.log(this.state.editableLevels);
    this.setState({
      editableLevels: !this.state.editableLevels
    });
  };
  public handleTrackChange = (displayName: string): void => {
    let newTrack = this.state.tracks.find(track => {
      return track.displayName === displayName;
    });
    newTrack
      ? this.setState({
          currentTrack: newTrack
        })
      : console.log(`This track doesn't exist in db`);
  };

  public handleLevelChange = (track: ITrack, level: number): void => {
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
    let allTracks = this.createTrackset();
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
    const {
      user,
      tracks,
      currentTrack,
      progressBar,
      editableLevels
    } = this.state;
    const uniqueCategories: string[] = [
      ...new Set(tracks.map(track => track.category))
    ];
    return (
      <Container className="dashboard">
        <Row className="py-4">
          <Col className="d-flex flex-column justify-content-center">
            <IUserInformation user={user} />
            <IProgressBar
              nextLevel={user.nextLevelPoints}
              progressBar={progressBar}
            />
          </Col>
          <Col>
            <ILevelingBars
              editableLevels={editableLevels}
              tracks={tracks}
              handleLevelChange={this.handleLevelChange}
              handleEditLevels={this.handleEditlevels}
            />
          </Col>
        </Row>
        <Row className="py-4 ">
          <ICategories
            tracks={tracks}
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
