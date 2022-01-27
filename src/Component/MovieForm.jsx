import React from 'react';

const MovieForm = ({match,history})=>{
    return (
        <div className='container my-5'>
        <h3>The movie Id is {match.params.id}</h3>
        <button className='btn btn-primary' onClick={()=>history.push('/movies')}>Save</button>
        </div>
    );
}
export default MovieForm;