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
      countries: [],
      univesities: [],
      idCountry: 0,
      careers: [],
      territories: [],
      idUniversity: 0,
      notePaes: 0,
      yearContract: "",
      contractAmount: "",
      information: "",
      benefiteds: "",
      idTerritory: 0
    };
  }

  componentDidMount() {
    const routes = ["academiclevel", "scholarshiptype", "countries", "territories"];
    const requests = routes.map(route => axios.get(`${SERVER}/${route}`));

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

  changeTerritory = e => {
    const idTerritorys = e.target.value;
    this.setState({
      idTerritory: idTerritorys
    })
  }

  handleChange = (key) => {
    return (e) => this.setState({
      [key]: e.target.value
    }, ()=>{
      console.log(this.state)
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const contract = {
      territory_id: this.state.idTerritory,
      year_contract: this.state.yearContract
    }
  }
  
  render() {
    const { idCountry, idUniversity } = this.state;
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
                      <select className="form-control form-control-sm">
                        {this.state.levels.map(levelObj => (
                          <option key={levelObj.id} value={levelObj.id}>
                            {levelObj.academic_level}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="">Nota paes</label>
                      <input className="form-control" type="text" name="paes" />
                    </div>
                  </div>
                  <div className="card col-4">
                    <h3 className="card-title">Informacion de beca</h3>
                    <div className="card-body">                      
                        <label htmlFor="">Tipo de beca</label>                               
                        <select className="form-control form-control-sm">
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
                          <option>seleccion</option>
                          {this.state.univesities.map(university => (
                            <option key={university.id} value={university.id}>
                              {university.university}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="">Carreras</label>
                        <select className="form-control form-control-sm">
                          <option>seleccion</option>
                          {this.state.careers.map(career => (
                            <option key={career.id} value={career.id}>
                              {career.career}
                            </option>
                          ))}
                        </select>                      
                    </div>
                  </div>
                  <div className="card col-4">
                    <h3 className="card-title">Informacion del contrato</h3>
                    <div class="alert alert-danger" role="alert">
                      Enviar este formulario primero!
                    </div>
                    <div className="card-body">
                        <label htmlFor="">Territorio</label>
                        <select className="form-control form-control-sm">
                        {this.state.territories.map(territory => (
                            <option key={territory.id} value={territory.id}>
                              {territory.territory}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="">Año contrato</label>
                        <input className="form-control" type="text" name="year" onChange={this.handleChange("yearContract")}/>
                        <label htmlFor="">Monto del contrato</label>
                        <input className="form-control" type="text" name="monto" onChange={this.handleChange("contractAmount")}/>
                        <label htmlFor="">Informacion</label>
                        <input className="form-control" type="text" name="year" onChange={this.handleChange("information")}/>
                        <label htmlFor="">Beneficiados</label>
                        <input type="text" name="benefiteds" className="form-control" onChange={this.handleChange("benefiteds")}/>
                        <br/>             
                        <button className="btn btn-success">
                          Crear contrato
                        </button>
                    </div>                              
                  </div>
                </div>
              </div>
              <br/>
              <button className="btn btn-primary">
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
