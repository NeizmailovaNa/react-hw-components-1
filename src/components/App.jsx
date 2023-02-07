import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'



import {Profile} from 'components/Profile/Profile'
import {Statistics} from 'components/Statistics/Statistics'
import {FriendList} from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
      />

        <Statistics  title="Upload stats" stats={data} />
        <Statistics  stats={data} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions}></TransactionHistory>

    </div>
  );
};
