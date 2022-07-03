import { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { getPhotos } from "./services/pixabayAPI";

export default class App extends Component {
  state = {
    searchWord: "",
    items: [],
    error: null,
    page: 1,
    isLoading: false,
    modalOpen: false,
    modalContent: {}
  };

 

  componentDidUpdate(prevProps, prevState) {
    const { searchWord, page } = this.state;
    if (searchWord !== prevState.searchWord) {
        this.setState({
          items: [],
          page: 1
        });
          this.fetchPhotos();
    }

    if (page > prevState.page) {
      this.fetchPhotos();
    }
  }

  handleFormSubmit = (input) => {
    this.setState({
      searchWord: input
    })
  };

  async fetchPhotos() {
    this.setState({
        isLoading: true
    })
    const { searchWord, page } = this.state;
      try {
        const data = await getPhotos(searchWord, page);
        this.setState(({items}) => {
            return {
                items: [...items, ...data.hits],
            }
        })
      } catch (error) {
        this.setState({
            error: error
        })
      }
      finally {
        this.setState({ isLoading: false })
      }          
  }

  loadMore = () => {
    this.setState(({ page }) => {
        return {
            page: page + 1,
            isLoading: true
        }
    })
  }

  showModal = (modalImage, alt) => {
    this.setState({
        modalOpen: true,
        modalContent: {
          src: modalImage,
          alt
        }
    })
}

  closeModal = () => {
    this.setState({
        modalOpen: false
    })
}

  render() {
    const {loadMore, handleFormSubmit, showModal, closeModal } = this;
    const {searchWord, error, items, isLoading, modalOpen, modalContent} = this.state;
    return (
      <div className='App'>
        {modalOpen && <Modal close={closeModal} data={modalContent}/>}
        <Searchbar onSubmit={handleFormSubmit} />
        {error && <p>Cant load photos</p>}
        {searchWord && items.length === 0 && !isLoading && <h2 className='wrongWord'>No matches with tag "{searchWord}", try another one</h2>}
        {searchWord && items.length > 0 && <ImageGallery items={items} onClick={showModal} >
          <Button onClick={loadMore}/>
        </ImageGallery>}
        {isLoading &&<Loader />}
      </div>
    );
  }
}