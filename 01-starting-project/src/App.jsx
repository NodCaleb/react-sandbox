
import Header from './components/Header/Header.jsx';
import Welcome from './components/Welcome.jsx';
import CourceGoal from './components/CourceGoal.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() { 

  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
        <Welcome />
        <ul>
          <CourceGoal title="Learn React" description="Core concepts and architecture" />
          <CourceGoal title="Prepare for React Native" description="Cause REact knoweledge is required" />
        </ul>
      </main>
    </>
  );
}

export default App;
