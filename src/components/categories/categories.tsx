import * as React from "react";
import { Col } from "react-bootstrap";

export interface ICategoriesProps {
  skills: Array<any>;
  uniqueCategories: any;
  currentTrack: any;
  handleTrackChange(displayName: string): void;
}

export default class ICategories extends React.Component<
  ICategoriesProps,
  any
> {
  public render() {
    const {
      skills,
      handleTrackChange,
      currentTrack,
      uniqueCategories
    } = this.props;

    return (
      <>
        {uniqueCategories.map((uniqueCategory: any) => (
          <Col
            className="justify-content-center text-center"
            key={uniqueCategory}
          >
            <h3> {uniqueCategory}</h3>
            <div className="d-flex justify-content-center">
              {skills.map(skill => {
                if (skill.category === uniqueCategory) {
                  return (
                    <div className="category-wrapper" key={skill.displayName}>
                      <div
                        onClick={() => {
                          handleTrackChange(skill.displayName);
                        }}
                        className={`milestone-badge milestone-badge-${uniqueCategory} ${
                          currentTrack.displayName === skill.displayName
                            ? "active"
                            : ""
                        }`}
                      >
                        {skill.displayName}
                      </div>
                      <div
                        onClick={() => {
                          handleTrackChange(skill.displayName);
                        }}
                        className={`milestone-rating milestone-rating-${uniqueCategory} d-flex align-items-center justify-content-center ${
                          currentTrack.displayName === skill.displayName
                            ? "active"
                            : ""
                        }`}
                      >
                        <span>{skill.userLevel}</span>
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
