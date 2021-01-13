import {MdSearch} from 'react-icons/md';
import './SearchForm.css';

const SearchForm = () => {
    return (
        <div className="form__outer">
            <form className="form">
                <input name="keyword" className="form__filed"/>
                <button type="submit" className="form__button">
                    <MdSearch size="32px" />
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
