import {MdSearch} from 'react-icons/md';
import './SearchForm.css';

const SearchForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const {keyword} = e.target.elements;
        props.onFormSubmit(keyword.value);
    }

    return (
        <div className="form__outer">
            <form onSubmit={handleSubmit} className="form">
                <input name="keyword" className="form__filed"/>
                <button type="submit" className="form__button">
                    <MdSearch size="32px"/>
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
