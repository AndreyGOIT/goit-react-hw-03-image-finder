import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
        this.props.onClose();
      }
    });
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
