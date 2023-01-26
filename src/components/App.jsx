import React from 'react';
import Modal from './Modal/Modal';
import css from './App.module.css';
import Loader from './Loader/Loader';
import * as API from 'services/api';
import Errors from './Errors/Errors';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    inputSearch: 'random',
    response: [],
    loading: false,
    pageNumber: 1,
    button: false,
    modal: false,
    largeImageUrl: '',
    errorMessage: false,
    isLoading: false,
  };

  formSubmitHandler = input => {
    this.cleanState();

    this.setState({
      inputSearch: input,
    });

    if (this.state.inputSearch === '') {
      this.setState({
      inputSearch: 'random',
    });
    }
  };

  getFotos = async input => {
    this.setState({ loading: true });
    try {
      const fotoObj = await API.addFotoObj(input, this.state.pageNumber);

      // Проверка на первую загрузку галереи
      if (this.state.response.length === 0) {
        this.setState({
          response: fotoObj,
          errorMessage: false,
          isLoading: false
          
        });

        // Если нет результата запроса, покажем уведомление
        if (fotoObj.length === 0) {
          this.setState({
            errorMessage: true,
          });
        }
      }
      // Добавляем новые обьекты к уже находящимся в State
      else {
        this.setState(prevState => ({
          response: [...prevState.response, ...fotoObj],
          isLoading: false
        }));
      }
      // Проверка на конец галереи
      if (fotoObj.length === 12) {
        this.setState({
          button: true,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  loadMore = () => {
    // добавляем +1 страницу к запросу
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  handleModal = event => {
    if (event === 'Escape' || event === undefined) {
      this.setState({ modal: false });
    }
  };

  onImageClick = largeImage => {
    this.setState({
      modal: true,
      largeImageUrl: largeImage,
    });
  };

  cleanState = () => {
     this.setState({
      response: [],
      pageNumber: 1,
      button: false,
    });
  };

 componentDidUpdate(prevProps, prevState) {
   const { pageNumber, inputSearch } = this.state;
   
    if (
        prevState.pageNumber !== pageNumber ||
        prevState.inputSearch !== inputSearch
    ) {
      if (!this.state.isLoading) {
        this.setState({isLoading: true}, () => {
          this.getFotos(inputSearch);
        });
      }
    }
}

  render() {
    const { loading, response, largeImageUrl, button, modal, errorMessage } =
      this.state;
    return (
      <div className={css.App}>
        <Searchbar clickSubmit={this.formSubmitHandler} />

        <Loader color="#4578e9" loading={loading} size={150} />

        {response && (
          <ImageGallery images={response} clickImage={this.onImageClick} />
        )}

        {errorMessage && <Errors />}

        {button && <Button clickMore={this.loadMore} />}

        {modal && (
          <Modal clickModal={this.handleModal} imgUrl={largeImageUrl} />
        )}
      </div>
    );
  }
}
