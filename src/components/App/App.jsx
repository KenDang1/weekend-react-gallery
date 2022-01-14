import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect( () => {
    getGallery();
  })

  const getGallery = () => {
    axios({
      method: 'GET',
      url:  '/gallery'
    })
      .then((response) => {
        setGalleryList(response.data)
      })
      .catch((err) => {
        console.log('Failed GET /gallery App side', err);
      })
  }; // end getGallery



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList item={galleryList}/>
      </div>
    );
}

export default App;
