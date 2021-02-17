import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import UserPosts from './components/UserPosts/UserPosts';

function App() {
  return (
    <div className="App">
      <ProgressBar scroll="20%"/>
      <UserPosts />
    </div>
  );
}

export default App;
