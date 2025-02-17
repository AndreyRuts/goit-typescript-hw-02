import s from './ImageGallery.module.css';
import ImageCard from './ImageCard/ImageCard';

interface IImage{
	id: string;
	alt_description: string;
	urls: {
		small: string;
		regular: string;
	};
};

interface IGalleryProps {
	gallery: IImage[];
	modalState: (scr: string, alt: string) => void;
};

const ImageGallery: React.FC<IGalleryProps> = ({ gallery, modalState }) => {	
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