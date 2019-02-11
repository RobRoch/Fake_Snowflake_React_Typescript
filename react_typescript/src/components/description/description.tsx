import * as React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
export interface IDescriptionProps {}

export default class IDescription extends React.PureComponent<
  IDescriptionProps,
  any
> {
  public render() {
    return (
      <Tab.Container defaultActiveKey="1">
        <h3>Level description</h3>
        <h3>Attributes</h3>
        <Row>
          <Col sm="auto">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="nav-link" eventKey="1">
                  1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link" eventKey="2">
                  2
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link" eventKey="3">
                  3
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link" eventKey="4">
                  4
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link" eventKey="5">
                  5
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Tab.Content>
              <Tab.Pane className="description-tab" eventKey="1">
                {`liquam consectetur, orci ut fringilla bibendum, orci odio aliquet nisl, nec sagittis ex elit vitae quam. Sed consequatnunc eget feugiat mollis. Donec rutrum eros vitae quam consectetur semper sit amet ut erat. 
                
                Duis ipsum ipsum, imperdiet eget lectus quis, aliquam dictum urna. Vestibulum ac tincidunt turpis. Fusce id leo ex. Sed bibendum nibh a porttitor fermentum. 
                
                Donec metus felis, aliquet in nulla elementum, bibendum vestibulum mauris. Nam tempus nec nunc ac pulvinar.`}
              </Tab.Pane>
              <Tab.Pane className="description-tab" eventKey="2">
                {`liquam consectetur, orci ut fringilla bibendum, orci odio aliquet nisl, nec sagittis ex elit vitae quam. Sed consequatnunc eget feugiat mollis. Donec rutrum eros vitae quam consectetur semper sit amet ut erat. 
                
                Duis ipsum ipsum, imperdiet eget lectus quis, aliquam dictum urna. Vestibulum ac tincidunt turpis. Fusce id leo ex. Sed bibendum nibh a porttitor fermentum. 
                
                Donec metus felis, aliquet in nulla elementum, bibendum vestibulum mauris. Nam tempus nec nunc ac pulvinar.`}
              </Tab.Pane>
              <Tab.Pane className="description-tab" eventKey="3">
                {`liquam consectetur, orci ut fringilla bibendum, orci odio aliquet nisl, nec sagittis ex elit vitae quam. Sed consequatnunc eget feugiat mollis. Donec rutrum eros vitae quam consectetur semper sit amet ut erat. 
                
                Duis ipsum ipsum, imperdiet eget lectus quis, aliquam dictum urna. Vestibulum ac tincidunt turpis. Fusce id leo ex. Sed bibendum nibh a porttitor fermentum. 
                
                Donec metus felis, aliquet in nulla elementum, bibendum vestibulum mauris. Nam tempus nec nunc ac pulvinar.`}
              </Tab.Pane>
              <Tab.Pane className="description-tab" eventKey="4">
                {`liquam consectetur, orci ut fringilla bibendum, orci odio aliquet nisl, nec sagittis ex elit vitae quam. Sed consequatnunc eget feugiat mollis. Donec rutrum eros vitae quam consectetur semper sit amet ut erat. 
                
                Duis ipsum ipsum, imperdiet eget lectus quis, aliquam dictum urna. Vestibulum ac tincidunt turpis. Fusce id leo ex. Sed bibendum nibh a porttitor fermentum. 
                
                Donec metus felis, aliquet in nulla elementum, bibendum vestibulum mauris. Nam tempus nec nunc ac pulvinar.`}
              </Tab.Pane>
              <Tab.Pane className="description-tab" eventKey="5">
                {`liquam consectetur, orci ut fringilla bibendum, orci odio aliquet nisl, nec sagittis ex elit vitae quam. Sed consequatnunc eget feugiat mollis. Donec rutrum eros vitae quam consectetur semper sit amet ut erat. 
                
                Duis ipsum ipsum, imperdiet eget lectus quis, aliquam dictum urna. Vestibulum ac tincidunt turpis. Fusce id leo ex. Sed bibendum nibh a porttitor fermentum. 
                
                Donec metus felis, aliquet in nulla elementum, bibendum vestibulum mauris. Nam tempus nec nunc ac pulvinar.`}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
