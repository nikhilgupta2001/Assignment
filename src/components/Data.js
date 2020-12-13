import React from 'react'

const Datas=({datas,loading})=>{
    if(loading){
        return <h2>loading</h2>
    }
   
    return(
    <div>
        {datas.map(data=>(
             <tr key={data.id}>
               <td>{data.name}</td>
               <td>{data.email}</td>
               <td>{data.company}</td>
               <td>{data.job}</td>
               <td>{data.city}</td>
               <td>{data.phone}</td>
               {/* <td>{data.FavMovie}</td> */}
            </tr>

       /* <li key={datas.id} className="list-group-item">
         {data.name+data.email}
       </li> */
    )
    )}
    </div>
    )
};
export default Datas;