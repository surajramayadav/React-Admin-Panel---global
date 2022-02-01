import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import DataTable from "../../../components/DataTable/DataTable";
import { getAllUser, setIsLogged } from "../../../Redux/Slice/loginSlice";

export default function DataTablePage() {
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  

  const login = useSelector((state) => state.login);
  console.log(login)
  const { isLogged } = login;
  console.log(isLogged);

  
  const isLoggedin = dispatch(setIsLogged({isLogged : true}));
  console.log(isLoggedin)
 



  React.useEffect(() => {
    const data = dispatch(getAllUser());
    console.log(data);
    setUserData(data.results);
  }, []);

  return (
    <div style={{ margin: 50 }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          color: "#000",
          height: "100%",
          marginTop: 5,
        }}
        spacing={5}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ height: "inherit" }}
        >
          <DataTable data={userData} />
        </Grid>
      </Grid>
    </div>
  );
}
