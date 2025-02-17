import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

import { fetchData } from './services/api';
import { IImage } from './services/api';


const App = () => {
    const [gallery, setGallery] = useState<IImage[]>([]);
    const [searchData, setSearchData] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string>("");
    const [altDescription, setAltDescription] = useState<string>("");

    useEffect(() => {
        if (searchData === '') return;

        const getData = async () => {
            try {
                setIsLoading(true);
                setIsError(false);
                const  results  = await fetchData(searchData, page);  
                if (results.total === 0) return;
                setGallery((prevGallery) => {
                    return [...prevGallery, ...results.results];
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

    const handleQuery = (newQuery: string) => {
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
    const modalState = (src: string, alt: string) => {
        setModalImage(src);
        setAltDescription(alt);
        openModal();
    };


    return (
        <> 
            <SearchBar onSubmit={handleQuery}/>
            <ImageGallery
                gallery={gallery}
                modalState={modalState}
            />
            {isLoading && <Loader />}
            {isError && <ErrorMessage />}
            {gallery.length > 0 && !isLoading && !isError && (
                <LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
            )}
            <ImageModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                src={modalImage}
                alt={altDescription}
            />
            <Toaster position="top-left"/>
        </>
    );
};
export default App;