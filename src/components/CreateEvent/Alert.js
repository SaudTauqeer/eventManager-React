import React from 'react';
import { Alert } from 'reactstrap';

class AlertBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
    window.location.reload();
  }

  render() {
    return (
      <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
        Please fill all required fields :(
      </Alert>
    );
  }
}

export default AlertBox;