import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ModifiedTextField } from "../Theam/Theam";
import { useNavigate } from "react-router-dom";

export default function SalarySlipTemplate() {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          borderRadius: 6,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          marginLeft: 2,
          marginRight: 2,
          marginTop: 4,
          marginBottom: 4,
        }}
        elevation={2}
      >
        <Button
          variant="contained"
          sx={{
            marginTop: 4,
            marginLeft: 4,
            borderRadius: 5,
            paddingLeft: 2.5,
            paddingRight: 2.5,
            paddingTop: 1.2,
            paddingBottom: 1.2,
            backgroundColor: "rgb(216, 0, 50, 0.2)",
            color: "red",
            fontSize: 16,
            border: "1px solid red",
          }}
          onClick={() => {
            navigate("/Employee");
          }}
        >
          <b> {" < "} back </b>
        </Button>
        <Card
          sx={{
            borderRadius: 6,
            marginLeft: 2,
            marginRight: 2,
            marginTop: 4,
            marginBottom: 4,
          }}
          elevation={2}
        >
          <br />
          <Container
            style={{
              display: "flex",
              justifyContent: "right",
              marginTop: 1,
            }}
          >
            <br />
          </Container>
          <Container maxWidth="lg" sx={{ padding: 2 }}>
            <Stack spacing={3}>
              <div>
                <Typography variant="h4">SALARY SLIP</Typography>
                <br />
                <Divider />
              </div>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: "space-around" }}
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} margin={2}>
                  <Card
                    sx={{
                      borderRadius: 6,
                      justifyContent: "space-around",
                      margin: 2,
                    }}
                    elevation={10}
                  >
                    <CardContent>
                      <Typography variant="h4">SALARY SLIP</Typography>
                    </CardContent>
                    <Divider />
                    {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} margin={2}  > */}
                    <Box sx={{ margin: 3 }}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        margin={2}
                      >
                        <Typography>
                          Choose Template 1 &nbsp;&nbsp;&nbsp;&nbsp;
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{
                              flexDirection: "column",
                              justifyContent: "center",
                              textAlign: "center",
                              margin: "auto",
                              borderRadius: 3,
                            }}
                            onClick={() => {
                              navigate("/SalarySlipTemplateNo01");
                            }}
                          >
                            Select
                          </Button>
                        </Typography>
                        <br />
                        <br />
                        <table width="100%" border="1">
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <ul type="circle">
                                <li style={{ fontSize: "40px" }}>
                                  <b>Adeona Technologies (Private) Limited</b>
                                </li>
                                <li>
                                  14, Sir Baron Jayathilaka Mawatha, Colombo 01,
                                  Sri lanka
                                </li>
                                <li>
                                  Mob:(+94)777 888 665 Tel:(+94)117 033 272
                                </li>
                                <li>
                                  Web:https://adeonatech.net
                                  Email:info@adeonatech.net
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{ textAlign: "center", fontSize: "25px" }}
                            >
                              PAY SLIP FOR THE MONTH OF : MAY
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <ul>
                                <li>
                                  &nbsp; Employee
                                  ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                                <li>
                                  &nbsp; Name
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  :
                                </li>
                                <li>
                                  &nbsp; Designamtion &nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <ul>
                                <li
                                  style={{
                                    textAlign: "center",
                                    fontSize: "25px",
                                  }}
                                >
                                  DETAILS OF EARNINGS
                                </li>
                                <li>
                                  &nbsp; BASIC
                                  SALARY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  :
                                </li>
                                <li>
                                  &nbsp; TEMPLATE ALLOWANCE &nbsp;&nbsp; :
                                </li>
                                <li>
                                  &nbsp; OTHER
                                  ALLOWANCE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                                <br />
                                <li>
                                  &nbsp; NOPAY DEDUCATIONS
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                                <li>
                                  &nbsp; OTHER DEDUCATIONS
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              &nbsp; NET PAY
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              :
                            </td>
                          </tr>
                        </table>
                      </Grid>
                      <br />
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        margin={2}
                      >
                        <Typography>
                          Choose Template 2 &nbsp;&nbsp;&nbsp;&nbsp;
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{
                              flexDirection: "column",
                              justifyContent: "center",
                              textAlign: "center",
                              margin: "auto",
                              borderRadius: 3,
                            }}
                            onClick={() => {
                              navigate("/SalarySlipTemplateNo02");
                            }}
                          >
                            Select
                          </Button>
                        </Typography>
                        <br />
                        <br />
                        <table width="100%" border="1">
                          <tr>
                            <td style={{ textAlign: "center" }} colSpan={2}>
                              <ul type="circle">
                                <li style={{ fontSize: "40px" }}>
                                  <b>Adeona Technologies (Private) Limited</b>
                                </li>
                                <li>
                                  14, Sir Baron Jayathilaka Mawatha, Colombo 01,
                                  Sri lanka
                                </li>
                                <li>
                                  Mob:(+94)777 888 665 Tel:(+94)117 033 272
                                </li>
                                <li>
                                  Web:https://adeonatech.net
                                  Email:info@adeonatech.net
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={2}
                              style={{ textAlign: "center", fontSize: "25px" }}
                            >
                              PAY SLIP FOR THE MONTH OF : MAY
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <ul>
                                <li>
                                  &nbsp; Employee
                                  ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                                <li>
                                  &nbsp; Name
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  :
                                </li>
                                <li>
                                  &nbsp; Designamtion &nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <ul>
                                <li
                                  style={{
                                    textAlign: "center",
                                    fontSize: "25px",
                                  }}
                                >
                                  DETAILS OF EARNINGS
                                </li>
                                <li>
                                  &nbsp; BASIC
                                  SALARY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  :
                                </li>
                                <li>
                                  &nbsp; TEMPLATE ALLOWANCE &nbsp;&nbsp; :
                                </li>
                                <li>
                                  &nbsp; OTHER
                                  ALLOWANCE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                                <br />
                                <li>
                                  &nbsp; NOPAY DEDUCATIONS
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                                <li>
                                  &nbsp; OTHER DEDUCATIONS
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <ul>
                                <li>
                                  &nbsp; GROSS PAY
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  :
                                </li>
                                <li>&nbsp; E.P.F CONTRIBUTION(8%) :</li>
                                <li>
                                  &nbsp; PAY TAX
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  :
                                </li>
                                <li>
                                  &nbsp; NET PAY
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  :
                                </li>
                              </ul>
                            </td>
                            <ul>
                              <li
                                style={{
                                  textAlign: "center",
                                  fontSize: "25px",
                                }}
                              >
                                GROSS PAY
                              </li>
                              <li>&nbsp; E.P.F (8%) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</li>
                              <li>
                                &nbsp; E.T.F (3%)
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                :
                              </li>
                              <li>
                                &nbsp; TOTAL CONTRIBUTION
                                &nbsp;
                                :
                              </li>
                            </ul>
                          </tr>
                        </table>
                      </Grid>
                    </Box>
                    {/* </Grid> */}
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </Card>
      </Card>
    </>
  );
}
