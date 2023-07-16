import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline }) => (
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};
