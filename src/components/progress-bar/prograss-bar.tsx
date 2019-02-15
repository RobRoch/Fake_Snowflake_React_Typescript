import * as React from "react";
import { ProgressBar } from "react-bootstrap";
export interface IProgressBarProps {
  progressBar: any;
  nextLevel: any;
}

export default class IProgressBar extends React.Component<
  IProgressBarProps,
  any
> {
  //TODO Why this function didn't work in render() {this.createProgressBar}. Props changed and it didn't rerender?
  // createProgressBar = () => {
  //   let displayProgressBars = Object.values(this.props.progressBar);

  //   let bars = displayProgressBars.map((bar, index) => (
  //     <ProgressBar
  //       className="progress-bar-part"
  //       now={Number(bar)}
  //       key={index}
  //     />
  //   ));
  //   return bars;
  // };

  public render() {
    const { nextLevel } = this.props;
    const displayProgressBars = Object.values(this.props.progressBar).map(
      (value: any) => {
        return (value * 100) / nextLevel;
      }
    );
    return (
      <ProgressBar>
        {displayProgressBars.map((bar, index) => (
          <ProgressBar
            className="progress-bar-part"
            now={Number(bar)}
            key={index}
          />
        ))}
      </ProgressBar>
    );
  }
}
