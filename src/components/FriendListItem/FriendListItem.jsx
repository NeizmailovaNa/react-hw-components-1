import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.statusOnline}></span>
      ) : (
        <span className={css.statusOffline}></span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};