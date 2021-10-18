import Attribution from './Components/Attribution';

import MainImage from './Components/MainImage';
import './Sass/App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <MainImage />
      </div>
      <Attribution />
    </div>
  );
};

export default App;
