import './App.css';
import './navbar.css'
import Top from './components/Top';
import TopMinistry from './components/TopMinistry';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Herobelow from './Herobelow';
import Herobelowri from './Herobelowri';

function App() {
  return (
    <div className="App">
      <Top />
      <TopMinistry />
      <div>

        <Navbar />
      </div>

      <Hero />


      <div className='flex flex-row gap-'>

        <div className='lg:w-[50%]'>
          <Herobelow />
        </div>

        <div className='pr-5 lg:w-[50%]'>
          <Herobelowri />
        </div>
      </div>
    </div>
  );
}

export default App;
