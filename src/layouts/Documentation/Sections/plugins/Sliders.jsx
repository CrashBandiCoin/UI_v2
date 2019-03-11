import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Sliders extends React.Component {
  render() {
    return (
      <>
        <div className="ct-page-title">
          <h1 className="ct-title" id="content">
            Datepicker
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="ct-lead">
          Our customized noUiSlider is a lightweight JavaScript range slider
          library. It offers a wide selection of options and settings, and is
          compatible with a ton of (touch) devices, including those running iOS,
          Android, Windows 8/8.1/10, Windows Phone 8.1 and Windows Mobile 10.
        </p>
        <hr />
        <h2 id="slider">Slider</h2>
        <div className="ct-example">
          <div className="input-slider-container">
            <div
              className="input-slider"
              data-range-value-max="500"
              data-range-value-min="100"
              id="input-slider"
            />
            <Row className="mt-3 d-none">
              <Col xs="6">
                <span
                  className="range-slider-value"
                  data-range-value-low="100"
                  id="input-slider-value"
                />
              </Col>
            </Row>
          </div>
        </div>
        <h2 id="range-slider">Range slider</h2>
        <div className="ct-example">
          <div>
            <div
              data-range-value-max="500"
              data-range-value-min="100"
              id="input-slider-range"
            />
            <Row className="d-none">
              <Col xs="6">
                <span
                  className="range-slider-value value-low"
                  data-range-value-low="200"
                  id="input-slider-range-value-low"
                />
              </Col>
              <Col className="text-right" xs="6">
                <span
                  className="range-slider-value value-high"
                  data-range-value-high="400"
                  id="input-slider-range-value-high"
                />
              </Col>
            </Row>
          </div>
        </div>
        <h2 id="usage">Usage</h2>
        <p>
          In order to use this plugin on your page you will need to include the
          following script in the “Optional JS” area from the page’s footer:
        </p>
        <h3 id="initialization">Initialization</h3>
        <p>
          Simply copy one of the code examples demonstrated above and include it
          in your page. Afterwards, you can modify the slider’s values with the
          ones you need.
        </p>
      </>
    );
  }
}

export default Sliders;