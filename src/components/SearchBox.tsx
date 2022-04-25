import React from 'react';

interface Props {
  searchfield?: string,
    searchChange: React.ChangeEventHandler<HTMLInputElement>
    
}

const SearchBox = (props: Props) => {
    const {searchChange} = props
    return <div className='pa2' >
        <input className='' type='search' placeholder='search robots' onChange={searchChange} />
    </div>
}

export default SearchBox;