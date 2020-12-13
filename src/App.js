import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Datas from './components/Data';
import Pagination from './components/Pagination';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  const [data,setdata]=useState([ ]);
  // const [email,setEmail]=useState([ ]);
  const [currentPage,setCurrentPage]=useState(1);
  const [dataPerPage]=useState(20);

  //Data fetching 
  useEffect(()=>{
      const fetchData=async()=>{
        const res=await axios.get('https://classmarker-app.herokuapp.com/mockData');
        // console.log(res.data[0]);
        setdata(res.data);
      }
      //It runs whenever a component mounts or update
  fetchData();
    },[]); 
    //Get current name
 const indexOfLastData=currentPage*dataPerPage;
 const indexOfFirstData=indexOfLastData-dataPerPage;
 const currentData=data.slice(indexOfFirstData,indexOfLastData);
 
//change page
const paginate=(pagenumber)=>{
  

  if(pagenumber==-1)
  {
    console.log(pagenumber);
    setCurrentPage(currentPage=>currentPage-1);
  }
  else if(pagenumber==0)
  {
    console.log(pagenumber);
    setCurrentPage(currentPage=>currentPage+1);
  }
  setCurrentPage(pagenumber);
}
// console.log(data);

  return (
       <div className="container mt-5 centerContent ">
        <h1 className="text-primary mb-3 center">Employee Data</h1>
        <Datas datas={currentData} />
        <Pagination dataPerPage={dataPerPage} totalData={data.length} paginate={paginate} />
      </div>
    );
};

export default App;