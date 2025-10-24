const SearchBar = ({ filter, onFilterChange }) => {
    return ( 
        <div className="filter">
            <input className=" border-2 w-3/4 mx-0" type="text" value={filter}  placeholder="Filter pets by name" onChange={(e) => onFilterChange(e.target.value)}/>

        </div>
     );
}
 
export default SearchBar;