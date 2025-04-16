import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbar = () => {
    return (
        <div className="main-bar">
            <form>
                <div className="searchbar-container">
                    {/* Search Icon */}
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        className="search-input"
                    />
                </div>
            </form>
        </div>
    );
};

export default Searchbar;
