import s from './ImageCard.module.css';

interface ICardProps{
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    modalState: (url: string, description: string) => void;
}

const ImageCard: React.FC<ICardProps> = ({urls, alt_description, modalState}) => { 
    return (
        <div>
            <img
                className={s.image}
                src={urls.small}
                alt={alt_description}
                onClick={()=>{modalState(urls.regular, alt_description)}}/>
        </div>
    );
}

export default ImageCard;