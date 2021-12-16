import s from './FriendItem.module.css';
import PropTypes from 'prop-types';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.onLine : s.ofLine}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
