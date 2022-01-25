import React, { Component } from 'react'
import _ from 'lodash';
export class TableBody  extends Component {
    renderCell = (item,column)=>{
        if(column.content) return column.content(item)

        return _.get(item,column.path);
    };
    render() {
        const {data ,columns} = this.props;
        return (
           <tbody>
               {_.map(data,(item=>
               <tr key={item._id}>
                   {_.map(columns,(column=><td key={item._id+(column.path || column.key)}>{this.renderCell(item,column)}</td>))}
               </tr> ))}   
           </tbody>
        //    <tbody>
        //        {data.map(item=>
        //        <tr>
        //             {/* console.log("now working"); */}
        //            {columns.map(column=><td>{this.renderCell(item,column)}</td>)}
        //            {/* {_.map(columns,(column=><td>{this.renderCell(item,column)}</td>))} */}
        //        </tr> )}   
        //    </tbody>
        );
    }
}

export default TableBody;
