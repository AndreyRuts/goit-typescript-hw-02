import s from './LoadMoreBtn.module.css';

interface ILoadMoreProps {
    isActive: boolean;
    handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<ILoadMoreProps> = ({handleLoadMore, isActive}) => {
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