import React, { Component } from 'react';
import _ from 'lodash';
// import Like from 'like';
// import TableHeader from './Common/tableHeader';


export class TableBody extends Component {
    render() {
        // const {data, columns} = this.props;
        return (
        //    <tbody>
        //        {data.map(item=>(
                <div>Hello</div>
        //             <tr>
        //            {columns.map(column=>(<td>{_.get(item, column.path)}</td>))}
        //             </tr>
        //        ))}
        //    </tbody>
        )
        console.log("hello");
    }
}

// function TableBody(movies) {
//     console.log("This is a data");
//     console.log(movies);
//     const {data,params} = params;
//     return (
//         console.log("data ends");
//         //       <tbody>
//         //     {movies.data.map(movie =>( 
//         //     <tr key={movie._id}>
//         //         <td>{movie.title}</td>
//         //         <td>{movie.genre.name}</td>
//         //         <td>{movie.numberInStock}</td>
//         //         <td>{movie.dailyRentalRate}</td>
//         //         {/* <td><Like onClick={()=>onLike(movie)} liked={movie.liked}/></td> */}
//         //         {/* <td><button onClick={()=> onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td> */}    
//         //     </tr>)       
//         //      )}
//         // </tbody> 

//         // movies.data.map((item)=>{
//         //     console.log(item);
//         //     return <h1>item.title</h1>
//         // })     

//     );
// }

export default TableBody;
