import React, { useState } from 'react';
import { DataGrid, GridValueGetterParams, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { carForm } from '../../components'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'make',
      headerName: 'Make',
      width: 160,
      editable: true,
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 160,
      editable: true,
    },
  ];
  
  export const DataTable = () =>{ 
    let { carData, getData } = useGetData();
    let [ open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
      setOpen(true);
    }
    let handleClose = () => {
      setOpen(false);
    }

    let deleteData = async () =>{
      for (let id in gridData){
        await server_calls.delete(id)
      }
      await server_calls.delete(`${gridData[0]}`)
      window.location.reload()
    }
    console.log(gridData)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={carData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={ (newSelectionModel ) => {setData(newSelectionModel);}}
      />
      <Button onClick={handleOpen}>Update Jalopy</Button>
      <Button variant='contained' color='secondary' onClick={deleteData}>Delete Jalopy</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Update Jalopy</DialogTitle>
        <DialogContent>
          <DialogContentText>Jalopy id: {gridData[0]}</DialogContentText>
          <CarForm id = {`${gridData[0]}`}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}