import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal/Modal';
import css from './App.module.css';
import Loader from './Loader/Loader';
import * as API from 'services/api';
import Errors from './Errors/Errors';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [response, setResponse] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [button, setButton] = useState(false);
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const formSubmitHandler = input => {
    cleanState();
    setInputSearch(input);
  };

  const getFotos = async input => {
    setIsLoading(true);

    try {
      const fotoObj = await API.addFotoObj(inputSearch, pageNumber);
   
      // Проверка на первую загрузку галереи
      if (response.length === 0) {
        setResponse(fotoObj);
        setErrorMessage(false);
        setIsLoading(false);
      }

      // Если нет результата запроса, покажем уведомление
      if (fotoObj.length === 0) {
      setErrorMessage(true);
      setIsLoading(false);}
      // Добавляем новые обьекты к уже находящимся в State
      else {
        setResponse([...response, ...fotoObj]);
      }
      // Проверка на конец галереи
      if (fotoObj.length === 12) setButton(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleModal = event => {
    if (event === 'Escape' || event === undefined) {
      setModal(false);
    }
  };

  const onImageClick = largeImage => {
    setModal(true);
    setLargeImageUrl(largeImage);
  };

  const cleanState = () => {
    setResponse([]);
    setPageNumber(1);
    setButton(false);
  };

  useEffect(() => {
    if (inputSearch === '') {
          return;
    }
    getFotos(inputSearch);
  }, [pageNumber, inputSearch]);

  return (
    <div className={css.App}>
      <Searchbar clickSubmit={formSubmitHandler} />

      <Loader color="#4578e9" loading={isLoading} size={150} />

      {response && <ImageGallery images={response} clickImage={onImageClick} />}

      {errorMessage && <Errors />}

      {button && <Button clickMore={loadMore} />}

      {modal && <Modal clickModal={handleModal} imgUrl={largeImageUrl} />}
    </div>
  );
};

export default App;
