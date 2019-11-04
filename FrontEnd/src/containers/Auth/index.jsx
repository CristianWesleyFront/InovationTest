import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Grid, Row, Col, Button, Form } from "react-bootstrap";
import Card from "components/Card/Card";
import { FormCard, Content } from "./styled";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { loginSuccess } from "../../redux/auth/action";

function Auth(props) {
  const { loginSuccess } = props;
  let history = useHistory();
  const onClickFunction = () => {
    loginSuccess();
    history.push("/");
  };
  return (
    <div className="wrapper" style={{ backgroundColor: "#212121" }}>
      <Content>
        <FormCard>
          <Card
            title={"Login"}
            hCenter
            content={
              <Form>
                <Grid fluid>
                  <Row>
                    <Col md={10} mdOffset={1}>
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Email",
                            type: "email",
                            bsClass: "form-control",
                            placeholder: "Digite o seu email",
                            defaultValue: "",
                            maxLength: 100,
                            onChange: () => console.log("helo"),
                            onInput: e => {
                              e.target.value =
                                e.target.value !== ""
                                  ? e.target.value.replace(/[^a-zA-Z]+/g, "")
                                  : "";
                            }
                          }
                        ]}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={10} mdOffset={1}>
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Senha",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "Digite a senha",
                            defaultValue: "",
                            maxLength: 100,
                            onChange: () => console.log("helo"),
                            onInput: e => {
                              e.target.value =
                                e.target.value !== ""
                                  ? e.target.value.replace(/[^a-zA-Z]+/g, "")
                                  : "";
                            }
                          }
                        ]}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col md={1} mdOffset={1}>
                      <Button>
                        <span>Cadastrar-se</span>
                      </Button>
                    </Col>
                    <Col md={3} mdOffset={5}>
                      <Button type={"submit"} onClick={() => onClickFunction()}>
                        <span>Entrar</span>
                      </Button>
                    </Col>
                  </Row>
                </Grid>
              </Form>
            }
          />
        </FormCard>
      </Content>
    </div>
  );
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginSuccess }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
