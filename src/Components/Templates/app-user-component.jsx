import React, { Component } from "react";
import MenuToUser from "../Molecules/menu-to-user-component";
import axios from "axios";
import { SERVER } from "../../app.config";
import { Accordion, Card, Button } from "react-bootstrap";
//import MultiStep from "react-multistep";

class AppToUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      levels: [],
      scholarshipTypes: [],
      idScholarType: 0,
      countries: [],
      univesities: [],
      idCountry: 0,
      careers: [],
      idCareer: 0,
      territories: [],
      idUniversity: 0,
      notePaes: 0,
      information: "",
      benefiteds: "",
      idTerritory: 0,
      title: "",
      idLevel: 0,
      idAcademicLevel: 0,
      idRequirement: 0,
      quotas: 0,
      idUser: 0,
      idDetail: 0
    };
  }

  componentDidMount() {
    const routes = ["academiclevel", "scholarshiptype", "countries", "territories"];
    const requests = routes.map(route => axios.get(`${SERVER}/${route}`));
    //console.log(this.props.match.params.user)
    /*axios.get(`${SERVER}/users/${this.props.match.params.user}`).then(res =>{
      console.log(res.data)
      this.setState({
        idUser:res.data
      })
    })*/
    Promise.all(requests)
      .then(([dataLevels, dataScholarshipTypes, dataCountries, dataTerritories]) => [
        dataLevels.data,
        dataScholarshipTypes.data,
        dataCountries.data,
        dataTerritories.data
      ])
      .then(([levels, scholarshipTypes, countries, territories]) =>
        this.setState({ levels, scholarshipTypes, countries, territories })
      );
  }

  changeCountry = e => {
    const idCountry = e.target.value;
    this.setState({ idCountry }, () => {
      console.log(this.state.idCountry)
      axios(`${SERVER}/universities/country/${idCountry}`).then(res =>
        this.setState({ univesities: res.data })
      );
    });
  };

  changeUniversity = e => {
    const idUniversity = e.target.value;
    this.setState({ idUniversity }, () => {
      axios(`${SERVER}/careers/university/${idUniversity}`).then(res =>
        this.setState({ careers: res.data })
      );
    });
  };

  handleChange = (key) => {
    return (e) => this.setState({
      [key]: e.target.value
    }, () => {
      console.log(this.state)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const scholarship = {
      title: this.state.title,
      requirements_id: this.state.idRequirement,
      scholarship_detail_id: this.state.idDetail,
      quotas: this.state.quotas,
      scholar_id: this.state.idUser
    }
    //console.log(scholarship)
    axios.post(`${SERVER}/scholarship`, scholarship).then(resp => {
      if (resp.status == 200) {
        this.props.history.push(`/dashboard/${this.props.match.params.user}`);
      }
    })
  }

  handleSubmitDetail = e => {
    e.preventDefault();
    const sholarDetail = {
      information: this.state.information,
      territory_id: this.state.idTerritory,
      scholarship_type_id: this.state.idScholarType,
      country_id: this.state.idCountry,
      university_id: this.state.idUniversity,
      career_id: this.state.idCareer
    }
    console.log(sholarDetail)
    axios.post(`${SERVER}/scholarship_detail`, sholarDetail)
      .then(res => {
        console.log(res.data)
        this.setState({
          idDetail: res.data
        })
      })
  }

  handleSubmitRequirement = (e) => {
    e.preventDefault();
    const requirements = {
      academic_level_id: this.state.idLevel,
      paes_note: this.state.notePaes
    }

    axios.post(`${SERVER}/requirement`, requirements).then(res => {
      console.log(res)
      console.log(res.data)
      this.setState({
        idRequirement: res.data
      })
    })
  }

  resetState = () => {
    this.setState({
      levels: [],
      scholarshipTypes: [],
      idScholarType: 0,
      countries: [],
      univesities: [],
      idCountry: 0,
      careers: [],
      idCareer: 0,
      territories: [],
      idUniversity: 0,
      notePaes: 0,
      information: "",
      benefiteds: "",
      idTerritory: 0,
      title: "",
      idLevel: 0,
      idAcademicLevel: 0,
      idRequirement: 0,
      quotas: 0,
      idUser: 0,
      idDetail: 0
    })
  }

  render() {
    const { idCountry, idUniversity, idTerritory } = this.state;

    return (
      <>
        <MenuToUser />
        <br />
        <div className="container">
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Button variant="dark">Primer paso</Button>
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Button variant="dark">Segundo paso</Button>
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </>
    );
  }
}

export default AppToUser;
