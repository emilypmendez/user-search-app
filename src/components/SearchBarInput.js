import React from "react"
import { FaSearch } from "react-icons/fa"

const SearchBarInput = () => {

          return (
               <>
                 <div className="Search">
                         <div className="SearchSpan">
                              <input
                                   className="SearchInput"
                                   type="text"
                                   placeholder="Search by name..."
                              />
                              <FaSearch/>
                         </div>
                 </div>
               </>
          )
}

export default SearchBarInput

// {data.filter((val) => {
//      if (searchTerm === '') {
//           return val
//      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase)) { // if current value is lowercase then return the values in the array
//           return val
//      }
// }).map((val,key) => {
//      return <div className="user" key={key}>
//      <p>{val.name}<br/></p>
//      </div>
// })}
