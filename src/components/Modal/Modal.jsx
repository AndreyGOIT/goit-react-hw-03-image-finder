import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends PureComponent {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal conmonentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    // console.log('Кликнули в бекдроп');

    // console.log('currentTarget:', event.currentTarget);
    // console.log('target:', event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    console.log(this.props);

    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          {this.props.children}
          <img
            src="https://pixabay.com/get/g112a55255d254c4b6c034856ee4359fede0e87f1a84f0808903449e5bd9e2875f2b414805eda5949b2ef8f2fde93fef43bf588aa0534e511f47524efa07ce845_1280.jpg"
            alt=""
          />
        </div>
      </div>,
      modalRoot
    );
  }
}
