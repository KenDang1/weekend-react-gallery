import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect( () => {
    getGallery();
  }, []);  // don't forget that []

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
      <GalleryList
        galleryList={galleryList}
      />
    );
}

export default App;
