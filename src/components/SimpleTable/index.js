import React, { Component } from "react";
import "./table.css";
import IconButton from "../IconButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import { withRouter } from "react-router-dom";

class SimpleTable extends Component {
  changeHandler(func, item, name, event) {
    func(item, name, event.target.value, this);
  }
  render() {
    return (
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            {this.props.headers.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.rows.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {this.props.headers.map((header, idx) => {
                let returnValue;
                switch (header.type) {
                  case "number":
                    returnValue = (
                      <td key={idx}>
                        <input
                          className="custom-input-number"
                          type="number"
                          min="0"
                          value={item[header.name]}
                          onChange={e =>
                            this.changeHandler(
                              header.action,
                              item,
                              header.name,
                              e
                            )
                          }
                        />
                      </td>
                    );
                    break;
                  case "img":
                    returnValue = (
                      <td key={idx}>
                        <img
                          className="custom-img-small"
                          alt="blank"
                          src={item[header.name]}
                        />
                      </td>
                    );
                    break;
                  case "action":
                    returnValue = (
                      <td key={idx}>
                        <IconButton
                          iconName={header.icon}
                          type={header.iconType}
                          action={() => header.action(item, this)}
                        />
                      </td>
                    );
                    break;
                  default:
                    returnValue = <td key={idx}>{item[header.name]}</td>;
                }
                return returnValue;
              })}
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
SimpleTable.defaultProps = {
  rows: [],
  headers: []
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SimpleTable)
);
