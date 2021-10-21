import Attribution from './Components/Attribution';
import FaqContainer from './Components/FaqContainer';
import MainImage from './Components/MainImage';
import './Sass/App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <MainImage />
        <FaqContainer />
      </div>
      <Attribution />
    </div>
  );
};

export default App;
