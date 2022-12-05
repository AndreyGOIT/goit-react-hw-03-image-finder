import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal conmonentWillUnmount');
  }

  render() {
    return createPortal(
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {this.props.children}
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
