import s from './FriendList.module.css';
import FriendItem from '../FriendListItem/FriendItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <div className={s.friendList}>
      <ul key={friends.id}>
        {friends.map(friend => (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
