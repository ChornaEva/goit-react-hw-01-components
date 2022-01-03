import "./App.css";

import user from "./datas/social-profile/user.json";
import data from "./datas/statistics/data.json";
import friends from "./datas/friend-list/friends.json";
import transactions from "./datas/transaction-history/transactions.json";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="App">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
