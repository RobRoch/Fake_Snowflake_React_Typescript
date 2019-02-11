import * as React from "react";
import { Badge } from "react-bootstrap";

export interface ICategoriesProps {}

export default class ICategories extends React.Component<
  ICategoriesProps,
  any
> {
  public render() {
    return (
      <div>
        <Badge pill className="categories-badge">
          Primary
        </Badge>
        <Badge pill className="categories-badge">
          Secondary
        </Badge>
        <Badge pill className="categories-badge">
          Success
        </Badge>
      </div>
    );
  }
}
