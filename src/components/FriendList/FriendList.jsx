import css from './FriendList.module.css'
import {FriendListItem} from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
             {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}
                    key={friend.id}
                />
      ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired,
        })
      ).isRequired,
}