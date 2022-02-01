import React from "react";
import { BiNotepad } from "react-icons/bi";
import { FaFileCsv } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./RegularTables.css";
import Table from "../../../components/Table/Table";
import { Button } from "@material-ui/core";
import { CSVLink } from "react-csv";
import Pdf from "react-to-pdf";
import jsPDF from "jspdf";
import "jspdf-autotable";

function RegularTables({ history }) {
  const tableCss = {
    tableHeaderStyle: {
      backgroundColor: "transparent",
      // color: "rgb(156 39 176)",
      color: "black",
    },
  };

  // const childCss =table.tr`
  // nth-child(even){
  //     backgroundColor: "#f2f2f2";
  // }

  // `

  console.log(tableCss);

  const paint = [
    {
      id: "1",
      orderName: "Abc",
      orderNumber: "11",
      orderDate: "7",
      orderType: "a,b,c",
      orderContent: "22",
    },
    {
      id: "2",
      orderName: "Xyz",
      orderNumber: "11",
      orderDate: "7",
      orderType: "a,b,c",
      orderContent: "22",
    },
    {
      id: "3",
      orderName: "ZZZ",
      orderNumber: "11",
      orderDate: "7",
      orderType: "a,b,c",
      orderContent: "22",
    },
    {
      id: "4",
      orderName: "Ra",
      orderNumber: "11",
      orderDate: "7",
      orderType: "a,b,c",
      orderContent: "22",
    },
  ];

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Report";
    const headerspdf = [
      [
        "ID",
        "Order Name",
        "Order Number",
        "Order Date",
        "Order Type",
        "Order Content",
      ],
    ];

    const data = paint.map((e) => [
      e.id,
      e.orderName,
      e.orderNumber,
      e.orderDate,
      e.orderType,
      e.orderContent,
    ]);

    let content = {
      startY: 50,
      head: headerspdf,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  const reportLabel = [
    { label: "ID", key: "id" },
    { label: "Order Name", key: "orderName" },
    { label: "Order Number", key: "orderNumber" },
    { label: "Order Date", key: "orderDate" },
    { label: "Order Type", key: "orderType" },
    { label: "Order Content", key: "orderContent" },
  ];

  const csvReport = {
    filename: "Report.csv",
    headers: reportLabel,
    data: paint,
  };

  const ref = React.createRef();

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
    {
      Header: "Action(s)",
      accessor: "actions",
      Cell: ({ cell }) => (
        <>
          <div style={{ display: "flex" }}>
            {/* <Link to="/update-case"> */}
            <Button
              variant="contained"
              color="primary"
              size="small"
              value={cell.row.values.name}
              onClick={() => handleClickGroup(cell.row.original)}
            >
              Edit
            </Button>
            {/* </Link> */}
            &nbsp;
            <Button
              variant="contained"
              color="secondary"
              size="small"
              value={cell.row.values.name}
              onClick={() => console.log("delete")}
            >
              Delete
            </Button>
          </div>
        </>
      ),
    },
  ];

  const handleClickGroup = (value) => {
    history.push(`/case/${value._id}`);
  };

  return (
    <div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="card-box">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "-50px" }}>
                <IconContext.Provider value={{ className: "form-icon" }}>
                  <div
                    style={{
                      padding: 15,
                      backgroundColor: "#e91e63",
                      borderRadius: 3,
                    }}
                  >
                    <BiNotepad />
                  </div>
                </IconContext.Provider>
              </div>
              <h4>Simple Table</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CSVLink {...csvReport}>
                <Button variant="contained" color="secondary">
                  Export to Csv
                  <FaFileCsv size={30} />
                </Button>
              </CSVLink>

              <Button
                onClick={() => exportPDF()}
                variant="contained"
                color="secondary"
              >
                Generate Pdf
              </Button>
            </div>
          </div>

          <Table
            data={paint}
            column={COLUMNS}
            tableCss={tableCss}
            // history={history}
            //   error={error}
            //   loading={loading}
          />
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div
          className="card-box"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "-50px" }}>
              <IconContext.Provider value={{ className: "form-icon" }}>
                <div
                  style={{
                    padding: 15,
                    backgroundColor: "#e91e63",
                    borderRadius: 3,
                  }}
                >
                  <BiNotepad />
                </div>
              </IconContext.Provider>
            </div>
            <h4>Table On Plain Background</h4>
          </div>
          <Table
            data={paint}
            column={COLUMNS}
            tableCss={tableCss}
            //   history={history}
            //   error={error}
            //   loading={loading}
          />
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="card-box">
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "-50px" }}>
              <IconContext.Provider value={{ className: "form-icon" }}>
                <div
                  style={{
                    padding: 15,
                    backgroundColor: "#e91e63",
                    borderRadius: 3,
                  }}
                >
                  <BiNotepad />
                </div>
              </IconContext.Provider>
            </div>
            <h4>Regular Table With Colors</h4>
          </div>
          <Table
            data={paint}
            column={COLUMNS}
            tableCss={tableCss}
            //   history={history}
            //   error={error}
            //   loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default RegularTables;
