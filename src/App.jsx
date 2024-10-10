import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import ProfileData from './components/Data/ProfileData.json';
import friends from './components/Data/FriendList.json';
import transactions from './components/Data/TransactionHistory.json';



const App = () => {
  return (
    <>
      <Profile
        name={ProfileData.username}
        tag={ProfileData.tag}
        location={ProfileData.location}
        image={ProfileData.avatar}
        stats={ProfileData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
