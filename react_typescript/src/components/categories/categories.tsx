import * as React from "react";
import { Badge, Col, Row } from "react-bootstrap";

export interface ICategoriesProps {
  uniqueCategories: Array<any>;
  uniqueBadges: Array<any>;
}

export default class ICategories extends React.Component<
  ICategoriesProps,
  any
> {
  public render() {
    const { uniqueBadges, uniqueCategories } = this.props;

    return (
      <>
        {uniqueCategories.map(category => (
          <Col className="justify-content-center" key={category}>
            <div className="text-center">
              <Badge pill className="categories-badge">
                {category}
              </Badge>
            </div>
            <div className="d-flex justify-content-center">
              {uniqueBadges.map(badge => {
                if (badge.cat === category) {
                  return (
                    <div className="text-center" key={badge.name}>
                      <div
                        className={`milestone-badge milestone-badge-${
                          badge.cat
                        }`}
                      >
                        {badge.name}
                      </div>
                      <div
                        className={`milestone-rating milestone-rating-${
                          badge.cat
                        } d-flex align-items-center justify-content-center`}
                      >
                        <span>1</span>
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
