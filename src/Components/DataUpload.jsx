import './Upload.css';
import React, { useState, useReducer } from 'react';
import { Button } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import DataTable from './DataTable';
import Uploadcard from './Uploadcard';
import { useDispatch } from 'react-redux';


function DataUpload() {

         const [data,setData]=useState([]);
         const [reducerValue, forceupdate] = useReducer(x=>x+1,0);
         const dispatch=useDispatch();
         
         







  function refreshPage() {
    forceupdate();
   }


  return (
  <>
    <div className="UploadPage">


      <Uploadcard/>
   
      <Button variant="contained" className="btn" endIcon={<Refresh />} onClick={refreshPage}>
        REFRESH
      </Button>
    </div>

    <div id='table'>
     <DataTable value={reducerValue}/>
    </div>

  </>
  )
}
export default DataUpload;