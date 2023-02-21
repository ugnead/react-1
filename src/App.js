import './App.css';
import PostContent from './components/PostContent/PostContent';
import Box from './components/Box/Box';
import Header from './components/Header/Header';
import PostImage from './components/PostImage/PostImage';


function App() {
  return (
    <div className="container text-center">
      <div className='row'>
        <div className='col'>
          <Header 
            title="Pagrindine antraste"
            img="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
          />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-4'>
          <PostImage 
            img="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
          />
        </div>
        <div className='col-4'>
          <PostImage 
            img="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
          />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-4'>
          <PostContent 
            title="Antraste 1"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
          />
        </div>
        <div className='col-4'>
          <PostContent 
            title="Antraste 2"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"/>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-3'>
          <Box 
            color="Box-bg-yellow"
          />
        </div>
        <div className='col-3'>
          <Box 
            color="Box-bg-green"
          />
        </div>
        <div className='col-3'>
          <Box 
            color="Box-bg-blue"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
