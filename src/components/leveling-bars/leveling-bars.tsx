import * as React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

export interface ILevelingBarsProps {
  skills: any[];
  handleLevelChange(skill: any, level: number): void;
}

export default class ILevelingBars extends React.Component<
  ILevelingBarsProps,
  any
> {
  public render() {
    const { skills, handleLevelChange } = this.props;
    return (
      <ButtonToolbar
        className="level-button-wrapper"
        aria-label="Toolbar with button groups"
      >
        {skills.map(skill => (
          <ButtonGroup
            key={skill.displayName}
            className="d-flex flex-column level-button-group"
            aria-label={`${skill.displayName}-group`}
          >
            {skill.milestones.map((milestone: any, index: number) => (
              <Button
                onClick={() => {
                  handleLevelChange(skill, index + 1);
                }}
                value={index + 1}
                key={index}
                className={`level-button level-button-${
                  skill.category
                } ${skill.userLevel > index && "active"}`}
              />
            ))}
          </ButtonGroup>
        ))}
      </ButtonToolbar>
    );
  }
}
