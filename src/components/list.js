import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: props.list
      };
    }
}
