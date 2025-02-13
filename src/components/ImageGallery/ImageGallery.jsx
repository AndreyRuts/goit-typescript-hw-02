import s from './ImageGallery.module.css';
import ImageCard from './ImageCard/ImageCard';

const ImageGallery = ({ gallery, modalState }) => {	
    return (
        <ul className={s.list}>
	        {gallery.length > 0 ? (
				gallery.map(({ id, alt_description, urls}) => {
				if (!urls || !urls.small) {
					console.error("Invalid image data:", { id, urls });
					return null;
				}
				return (
					<li key={id}>
						<ImageCard
							urls={urls}
							alt_description={alt_description}
							modalState={modalState} />
					</li>
				);
				})
			) : (
				<p></p>
			)}
        </ul>
    );
}

export default ImageGallery;