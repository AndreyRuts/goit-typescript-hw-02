import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({handleLoadMore, isActive}) => {
    return (
            <div className={s.loadMoreBtn}>
                <button
                onClick={handleLoadMore}
                disabled={isActive}
                type="button">Load more
                </button>
            </div>
    );
}
export default LoadMoreBtn;