import React, { Component } from "react";
import MenuToUser from "../Molecules/menu-to-user-component";
import axios from "axios";
import { SERVER } from "../../app.config";

class AppToUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      levels: [],
      scholarshipTypes: [],
      idScholarType:0,
      countries: [],
      univesities: [],
      idCountry: 0,
      careers: [],
      idCareer:0,
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
    axios.get(`${SERVER}/users/${this.props.match.params.user}`).then(res =>{
      console.log(res.data)
      this.setState({
        idUser:res.data
      })
    })
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
    }, ()=>{
      console.log(this.state)
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    const scholarship = {
      title: this.state.title,
      requirements_id: this.state.idRequirement,
      scholarship_detail_id: this.state.idDetail,
      quotas: this.state.quotas,
      scholar_id: this.state.idUser      
    }
    //console.log(scholarship)
    axios.post(`${SERVER}/scholarship`, scholarship).then( resp => {
      if(resp.status == 200){
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

  handleSubmitRequirement = (e) =>{
    e.preventDefault();
    const requirements = {
      academic_level_id: this.state.idLevel,
      paes_note: this.state.notePaes
    }

    axios.post(`${SERVER}/requirement`, requirements).then(res =>{
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
      idScholarType:0,
      countries: [],
      univesities: [],
      idCountry: 0,
      careers: [],
      idCareer:0,
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
    const { idCountry, idUniversity, idTerritory} = this.state;
    return (
      <>
        <MenuToUser />
        <br />
        <div className="container">
          <div className="card text-center">
            <div className="card-header">Llene la siguiente informacion</div>
            <div className="card-body">
              <h5 className="card-title">Requerimientos para crear la beca</h5>
              <div className="card-text">
                <div className="row">
                  <div className="card col-4">
                    <h3 className="card-title">Academico</h3>
                    <div className="card-body">
                      <label htmlFor="">Titulacion</label>
                      <select className="form-control form-control-sm" onChange={this.handleChange("idLevel")}>
                        <option>select...</option>
                        {this.state.levels.map(levelObj => (
                          <option key={levelObj.id} value={levelObj.id}>
                            {levelObj.academic_level}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="">Nota paes</label>
                      <input className="form-control" type="text" name="paes" onChange={this.handleChange("notePaes")}/>
                      <br/>
                      <button type="submit" 
                      className="btn btn-success" onClick={this.handleSubmitRequirement}>Guardar requerimientos</button>
                    </div>                    
                  </div>
                  <div className="card col-4">
                    <h3 className="card-title">Informacion de beca</h3>
                    <div className="card-body">
                        <label htmlFor="">Informacion</label>
                        <textarea className="form-control" rows="1" onChange={this.handleChange("information")}/>
                        <label htmlFor="">Territorio</label>
                        <select className="form-control form-control-sm" onChange={this.handleChange("idTerritory")}>
                          <option>select...</option>
                          {
                            this.state.territories.map(terr => (
                              <option key={terr.id} value={terr.id}>
                                {terr.territory}
                              </option>
                            ))
                          }                          
                        </select>                      
                        <label htmlFor="">Tipo de beca</label>                               
                        <select className="form-control form-control-sm" onChange={this.handleChange("idScholarType")}>
                          <option>select...</option>
                          {this.state.scholarshipTypes.map(scholar => (
                            <option key={scholar.id} value={scholar.id}>
                              {scholar.scholarship_type}
                            </option>
                          ))}                      
                        </select>
                        <label htmlFor="">Pais</label>                        
                        <select
                          className="form-control form-control-sm"
                          value={idCountry}
                          onChange={this.changeCountry}
                        >
                          <option>select...</option>
                          {this.state.countries.map(country => (
                            <option key={country.id} value={country.id}>
                              {country.country}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="">Universidades</label>
                        <select 
                        className="form-control form-control-sm" 
                        value={idUniversity} 
                        onChange={this.changeUniversity}
                        >
                          <option>select...</option>
                          {this.state.univesities.map(university => (
                            <option key={university.id} value={university.id}>
                              {university.university}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="">Carreras</label>
                        <select className="form-control form-control-sm" onChange={this.handleChange("idCareer")}>
                          <option>select...</option>
                          {this.state.careers.map(career => (
                            <option key={career.id} value={career.id}>
                              {career.career}
                            </option>
                          ))}
                        </select>
                        <br/>
                        <button type="submit" 
                        className="btn btn-success" onClick={this.handleSubmitDetail}>Guardar informacion</button>                   
                    </div>
                  </div>
                    <div className="card col-4">
                    <h3 className="card-title">Informacion de beca</h3>
                    <div className="card-body">
                        <label htmlFor="">Titulo</label>
                        <input type="text" className="form-control" onChange={this.handleChange("title")}/>
                        <label htmlFor="">Cupos</label>
                        <input className="form-control" type="text" onChange={this.handleChange("quotas")}/>
                    </div>
                  </div>                 
                </div>
              </div>
              <br/>
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                Crear oportunidad
              </button>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      </>
    );
  }
}

export default AppToUser;
