import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { useState, useEffect } from 'react';
import { fetchData } from './services/api';
import { Toaster } from 'react-hot-toast';


const App = () => {
    const [gallery, setGallery] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [altDescription, setAltDescription] = useState("");

    useEffect(() => {
        if (searchData === '') return;

        const getData = async () => {
            try {
                setIsLoading(true);
                setIsError(false);
                const { results } = await fetchData(searchData, page);  
                if (results.total === 0) return;
                setGallery((prevGallery) => {
                    return [...prevGallery, ...results];
                });
                setTotalPages(results.total_pages);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false)
            }
        };
        getData();
    }, [page ,searchData]);

    const handleQuery = (newQuery) => {
        setSearchData(newQuery);
        setGallery([]);
        setPage(1);
    };

    const handleLoadMore = () => {
        setPage(page + 1);
        
    };

    const isActive = page >= Math.ceil(totalPages / 15);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const modalState = (src, alt) => {
        console.log(src);
        
        setModalImage(src);
        setAltDescription(alt);
        openModal(true);
    };


    return (
        <> 
            <SearchBar onSubmit={handleQuery}/>
            <ImageGallery
                gallery={gallery}
                openModal={openModal}
                modalState={modalState}
            />
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
            {gallery.length > 0 && !isLoading && !isError && (
                <LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
            )}
            <ImageModal
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
                gallery={gallery}
                src={modalImage}
                alt={altDescription}
            />
            <Toaster position="top-left"/>
        </>
    );
};
export default App;