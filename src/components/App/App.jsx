import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'
import Header from '../Header/Header'

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect( () => {
    getGallery();
  }, []);  // don't forget that []

  // getting data from server
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

  
  // this function will pass to GalleryList
  const loveIt = (id, gallery) => {
    axios({
      method: 'PUT',
      url:  `/gallery/like/${id}`,
      data: gallery
    })
    .then((res) => {
      console.log('in PUT /gallery app side', res);
      getGallery();
    })
    .catch((err) => {
      console.log('Error in PUT /gallery app side', err);
    })
  }; // end of loveIt


    return (
      <>
      <Header/>
      <GalleryList
        galleryList={galleryList}
        loveIt={loveIt}
      />
      </>
    );
}

export default App;
