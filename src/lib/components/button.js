import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export default function Button(props) {
  const { className, disabled, label, type } = props;
  return (
    <button
      className={`${styles.btn} ${styles[className]}`}
      type={type === 'submit' ? 'submit' : 'submit'}
      disabled={disabled}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: styles.btn,
  disabled: false,
  type: 'button',
};
