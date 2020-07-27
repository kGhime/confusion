import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div classname="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comment) {
    if (comment != null) {
      const cmnts = this.props.dish.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author},
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                date: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul class="list-unstyled">{cmnts}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div class="container">
          <div className="row">
            {/* {this.renderDish(this.state.selectedDish)} */}
            {this.renderDish(this.props.dish)}

            {/* {this.renderComments(this.state.selectedDish)} */}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  //   render() {
  //     return (
  //       <div className="row">
  //         {/* {this.renderDish(this.state.selectedDish)} */}
  //         {this.renderDish(this.props.dish)}

  //         {/* {this.renderComments(this.state.selectedDish)} */}
  //         {this.renderComments(this.props.dish.comments)}
  //       </div>
  //     );
  //   }
}

export default Dishdetail;
