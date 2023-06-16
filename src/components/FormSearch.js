import React, { useState } from 'react';
import "./formSearch.scss";

const FormSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <div className="search">
                <input
                    type="text"
                    className=""
                    placeholder="Tìm kiếm"
                    value={searchTerm}
                    onChange={handleInputChange}

                />
                <i className="fas fa-search" onClick={handleSearch}></i>

            </div>
        </div>
    );
};
export default FormSearch;