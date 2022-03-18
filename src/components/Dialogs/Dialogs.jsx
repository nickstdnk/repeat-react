import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.scss';

const Dialog = (props) => {
  return (
    <div className={`${styles.dialog} ${styles.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <Dialog name={'Sergey'} id={1} />
      </div>
      <div className={styles.messages}>
        <Message message={'Hi'} />
      </div>
    </div>
  );
};

export default Dialogs;
