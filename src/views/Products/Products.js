import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "views/Products/ProductTable";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Products() {
  const classes = useStyles();

  const [data,setData] = useState([])

  useEffect(()=>{

      axios.get('https://live.allgame365.online/products',{}).then((res)=>{
          console.log(res.data)
          setData(res.data.items)
      }).catch((err)=>{
          console.log(err)
      })

  },[])

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Product List</h4>
              <p className={classes.cardCategoryWhite}>
                  New Order List
              </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Products ID", "Name", "Price" , "Old Price", "Category"]}
              tableData={data}
            />
          </CardBody>
        </Card>
      </GridItem>
      {/*<GridItem xs={12} sm={12} md={12}>*/}
      {/*  <Card plain>*/}
      {/*    <CardHeader plain color="primary">*/}
      {/*      <h4 className={classes.cardTitleWhite}>*/}
      {/*        Table on Plain Background*/}
      {/*      </h4>*/}
      {/*      <p className={classes.cardCategoryWhite}>*/}
      {/*        Here is a subtitle for this table*/}
      {/*      </p>*/}
      {/*    </CardHeader>*/}
      {/*    <CardBody>*/}
      {/*      <Table*/}
      {/*        tableHeaderColor="primary"*/}
      {/*        tableHead={["ID", "Name", "Country", "City", "Salary"]}*/}
      {/*        tableData={[*/}
      {/*          ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],*/}
      {/*          ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],*/}
      {/*          ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],*/}
      {/*          [*/}
      {/*            "4",*/}
      {/*            "Philip Chaney",*/}
      {/*            "$38,735",*/}
      {/*            "Korea, South",*/}
      {/*            "Overland Park"*/}
      {/*          ],*/}
      {/*          [*/}
      {/*            "5",*/}
      {/*            "Doris Greene",*/}
      {/*            "$63,542",*/}
      {/*            "Malawi",*/}
      {/*            "Feldkirchen in Kärnten"*/}
      {/*          ],*/}
      {/*          ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]*/}
      {/*        ]}*/}
      {/*      />*/}
      {/*    </CardBody>*/}
      {/*  </Card>*/}
      {/*</GridItem>*/}
    </GridContainer>
  );
}
