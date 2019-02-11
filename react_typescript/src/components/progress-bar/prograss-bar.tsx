import * as React from "react";
import { ProgressBar } from "react-bootstrap";
export interface IProgressBarProps {}

export default class IProgressBar extends React.Component<
  IProgressBarProps,
  any
> {
  public render() {
    return (
      <ProgressBar>
        <ProgressBar className="progress-bar-part" now={20} key={1} />
        <ProgressBar className="progress-bar-part" now={30} key={2} />
        <ProgressBar className="progress-bar-part" now={20} key={3} />
      </ProgressBar>
    );
  }
}
