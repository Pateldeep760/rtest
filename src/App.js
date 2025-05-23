
import './App.css';
import UserCard from './UserCard/UserCard';
import pic11 from './Asset/1.jpg';
import pic21 from './Asset/2.jpg';  

function App() {
  return (
    <div className="App">
      <h1>User Card </h1>
      
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
        profilePicture= {pic11}
      />
      <UserCard
        name="Deepak Kumar"
        email="deepakkumar@example.com"
        profilePicture= {pic21}
      />
    </div>
  );
}

export default App;
