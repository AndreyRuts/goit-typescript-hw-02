import s from './ImageCard.module.css';

const ImageCard = ({urls, alt_desciption, modalState}) => { 
    return (
        <div>
            <img
                className={s.image}
                src={urls.small}
                alt={alt_desciption}
                onClick={()=>{modalState(urls.regular, alt_desciption)}}/>
        </div>
    );
}

export default ImageCard;