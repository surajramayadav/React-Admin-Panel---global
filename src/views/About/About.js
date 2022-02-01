import React from 'react'
import Table from '../../components/Table/Table' 

export default function About() {
    const caseData = [
          {
            id: "1",
            orderName: "Abc",
            orderNumber: "11",
            orderDate: "7",
            orderType: "a,b,c",
            orderContent: "22",
          },
          {
            id: "1",
            orderName: "Abc",
            orderNumber: "11",
            orderDate: "7",
            orderType: "a,b,c",
            orderContent: "22",
          },
          {
            id: "1",
            orderName: "Abc",
            orderNumber: "11",
            orderDate: "7",
            orderType: "a,b,c",
            orderContent: "22",
          },
        ];
 const paint ={
     datavalue:[
        {
          id: "1",
          orderName: "Abc",
          orderNumber: "11",
          orderDate: "7",
          orderType: "a,b,c",
          orderContent: "22",
        },
        {
          id: "1",
          orderName: "Abc",
          orderNumber: "11",
          orderDate: "7",
          orderType: "a,b,c",
          orderContent: "22",
        },
        {
          id: "1",
          orderName: "Abc",
          orderNumber: "11",
          orderDate: "7",
          orderType: "a,b,c",
          orderContent: "22",
        },
      ],
      Tableheadercolor:"black"

 }
        const COLUMNS = [
            {
              accessor: "id",
              Header: "ID",
            },
            {
              accessor: "orderName",
              Header: "Order Name",
            },
            {
              accessor: "orderNumber",
              Header: "Order Number",
            },
            {
              accessor: "orderDate",
              Header: "Order Date",
            },
            {
              accessor: "orderType",
              Header: "Order Type",
            },
            {
              accessor: "orderContent",
              Header: "Order Content",
            },
            
          ];

         
    return (
        <div>
            <h1>About</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <label>Table data (0)</label>
                <button class="btn btn-primary">Add Data</button>
            </div>
            <Table
              data={paint}
              column={COLUMNS}
              
            //   history={history}
            //   error={error}
            //   loading={loading}
            />
        </div>
    )
}
