import React from "react";

// Sets up the parameters for the search input box
function SearchForm(props) {
  return (
    <form className="searchForm justify-content-center form-inline m-2">
        <input
          value={props.searchString}
          onChange={props.handleInputChange}
          name="searchTerm"
          type="text"
          className="form-control form-control-lg"
          placeholder="Search Term"
          // disable the Enter key so a user hitting Enter doesn't accidentally reload the page with new data
          onKeyPress={e => {
            if (e.key === 'Enter') e.preventDefault();
          }}
        />
    </form>
  );
}

export default SearchForm;
