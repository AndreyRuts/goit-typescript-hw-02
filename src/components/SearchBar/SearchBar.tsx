import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface ISearchProps{
    onSubmit: (query: string) => void;
}

const SearchBar: React.FC<ISearchProps> = ({ onSubmit }) => {
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const customValue = evt.currentTarget;
        const customQuery = new FormData(customValue).get('customQuery') as string;

        if (!customQuery) {
            toast.error('Please enter the value you are looking for');
            return;
        }
        onSubmit(customQuery);
    };

    return (
        <header>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.wrapper}>
                    <input
                        className={s.input}
                        type="text"
                        name="customQuery"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
        </header>
    );
};

export default SearchBar;