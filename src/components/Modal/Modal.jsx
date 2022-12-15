import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends PureComponent {
  componentDidMount() {
    console.log('Modal componentDidMount');
    console.log(this.props);
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
    const largeImage = this.props.images[0].largeImageURL;

    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          {this.props.children}
          <img src={largeImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
