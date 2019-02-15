import * as React from "react";
import { Col } from "react-bootstrap";
import { ITrack } from "../../mockAPI/interfaces";

export interface ICategoriesProps {
  tracks: ITrack[];
  uniqueCategories: string[];
  currentTrack: ITrack;
  handleTrackChange(displayName: string): void;
}

export default class ICategories extends React.Component<
  ICategoriesProps,
  any
> {
  public render() {
    const {
      tracks,
      handleTrackChange,
      currentTrack,
      uniqueCategories
    } = this.props;

    return (
      <>
        {uniqueCategories.map((uniqueCategory: string) => (
          <Col
            className="justify-content-center text-center"
            key={uniqueCategory}
          >
            <h3> {uniqueCategory}</h3>
            <div className="d-flex justify-content-center">
              {tracks.map(track => {
                if (track.category === uniqueCategory) {
                  return (
                    <div className="category-wrapper" key={track.displayName}>
                      <div
                        onClick={() => {
                          handleTrackChange(track.displayName);
                        }}
                        className={`milestone-badge milestone-badge-${uniqueCategory} ${
                          currentTrack.displayName === track.displayName
                            ? "active"
                            : ""
                        }`}
                      >
                        {track.displayName}
                      </div>
                      <div
                        onClick={() => {
                          handleTrackChange(track.displayName);
                        }}
                        className={`milestone-rating milestone-rating-${uniqueCategory} d-flex align-items-center justify-content-center ${
                          currentTrack.displayName === track.displayName
                            ? "active"
                            : ""
                        }`}
                      >
                        <span>{track.userLevel}</span>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Col>
        ))}
      </>
    );
  }
}
