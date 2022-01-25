// import React from 'react';
// import TableHeader from './tableHeader';
// import Like from './like';
// import _ from 'lodash';


// const  Table =(props) =>{
//     const {columns, movies, onLike, onDelete,onSort, sortColumn} = props;

//     return (
//             <table className="table">
//             <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
//             {/* <TableBody data={movies} /> */}
//               <tbody>
//             {_.map(movies,(movie =>( 
//             <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>  
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td><Like onClick={()=>onLike(movie)} liked={movie.liked}/></td>
//                 <td><button onClick={()=> onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
//             </tr>)       
//              ))}
//         </tbody>
//     </table>
        
//     );
// }
// export default Table;

