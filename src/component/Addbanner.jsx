import React from "react";

class AddBanner extends React.Component {
  render() {
    return (
      <React.Fragment>
            <div id={this.props.id} Style={`max-width: ${this.props.Width}px; height: ${this.props.Height}px; margin:10px 0px;`}>
                 {
                  // googletag.cmd.push(function() { googletag.display('div-gpt-ad-2777236333604-88'); })
                }
          </div>
      </React.Fragment>
    )
  }
}

export default AddBanner;