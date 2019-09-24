import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            email: "",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e){
        this.setState({
            email: e.target.value
        })
    }

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }
    //this.setState({})

    render(){
        return (
            <div className="container">
                <div className="text-black-50">
                    <h1>Registro</h1>
                    
                    <form action="/hola">
                        <div className="row">
                            <div className="form-group col-6">
                                <label>Nombre completo</label>
                                <input type="text" onChange = {this.cambiarNombre} className="form-control"></input>
                            </div>
                            <div className="form-group col-6">
                                <label>Email</label>
                                <input type="email" onChange = {this.cambiarCorreo} className="form-control"></input>
                            </div>
                        </div>
                    </form>
                    <div className="card" id="element">
                        <div className="card-body">
                            Hola, {this.state.nombre}<br/>
                            Tu correo es: {this.state.email}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.intervaloFecha = setInterval(()=>{
            this.cambiarFecha()
        },1000)
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
    }
    componentWillUnmount(){
        clearInterval(this.intervaloFechap)
    }
}
export default Form