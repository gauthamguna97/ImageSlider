/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
import PropTypes from "prop-types";

class Index extends Component {
  constructor() {
    super();
    this.img = [
      {
        url: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
      },
      {
        url: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
      },
      {
        url: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
      },
      {
        url: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
      }
    ];
  }
  render() {
    return (
      <div>
        <ul
          style={{
            display: "block",
            whiteSpace: "nowrap",
            overflowX: "auto",
            background: "#fff",
            margin: "0 0 15px",
            scrollBehavior: "smooth",
            fontSize: "0",
            paddingBottom: "25px",
            width: "400%"
          }}
        >
          {this.img.map((item, idx) => (
            <li id="1" style={{ display: "inline-block", width: "100%" }}>
              <img src={item.url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Index;
