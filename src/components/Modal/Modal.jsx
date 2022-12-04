import React, { Component } from 'react';
import styles from '../../components/Modal/Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal conmonentWillUnmount');
  }

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
