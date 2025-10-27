const SearchBar = ({ filter, onFilterChange }) => {
    return ( 
        <div style={{ margin: '1rem 0' }}>
            <input 
                type="text" 
                value={filter}  
                placeholder="Search by name, breed, or age" 
                onChange={(e) => onFilterChange(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            />
        </div>
     );
}
 
export default SearchBar;