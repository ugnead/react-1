import './App.css';
import Header from './components/Header/Header';
import PostImages from './components/PostImages/PostImages';
import PostContents from './components/PostContents/PostContents';
import Boxes from './components/Boxes/Boxes';


function App() {
    return (
        <div className="container text-center">
            <Header 
                title="Pagrindine antraste"
                img="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
            />
            <PostImages />
            <PostContents />
            <Boxes />
        </div>
    );
}

export default App;
