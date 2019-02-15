import * as React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { ITrack, IMilestone } from "../../mockAPI/interfaces";

export interface ILevelingBarsProps {
  tracks: ITrack[];
  editableLevels: boolean;
  handleLevelChange(track: ITrack, level: number): void;
  handleEditLevels(): void;
}

export default class ILevelingBars extends React.Component<
  ILevelingBarsProps,
  any
> {
  public render() {
    const {
      tracks,
      handleLevelChange,
      handleEditLevels,
      editableLevels
    } = this.props;
    return (
      <>
        <ButtonToolbar
          className="level-button-wrapper justify-content-center align-items-center"
          aria-label="Toolbar with button groups"
        >
          {tracks.map(track => (
            <ButtonGroup
              key={track.displayName}
              className="d-flex flex-column level-button-group"
              aria-label={`${track.displayName}-group`}
            >
              {track.milestones.map((milestone: IMilestone, index: number) => (
                <Button
                  onClick={() => {
                    handleLevelChange(track, index + 1);
                  }}
                  disabled={!editableLevels}
                  value={index + 1}
                  key={index}
                  className={`level-button level-button-${
                    track.category
                  } ${track.userLevel > index && "active"}`}
                />
              ))}
            </ButtonGroup>
          ))}
          <Button
            variant="light"
            className="level-button-edit"
            onClick={() => handleEditLevels()}
          >
            {editableLevels ? "Save" : "Edit"}
          </Button>
        </ButtonToolbar>
      </>
    );
  }
}
