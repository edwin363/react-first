import React from "react";
import Card from "../Atoms/card-component";
import Menu from "./menu-component";

const becas = [
    {
        "id":1,
        "title":"Beca de prueba",
        "requirements_id":1,
        "scholarship_detail":1,
        "state": "vacio",
        "contract_id":1,
        "quotas":50,
        "scholar_id":1
    },
    {
        "id":2,
        "title":"Beca de prueba",
        "requirements_id":2,
        "scholarship_detail":2,
        "state": "vacio",
        "contract_id":2,
        "quotas":50,
        "scholar_id":2
    },
    {
        "id":3,
        "title":"Beca de prueba",
        "requirements_id":3,
        "scholarship_detail":3,
        "state": "vacio",
        "contract_id":3,
        "quotas":50,
        "scholar_id":3
    },
    {
        "id":4,
        "title":"Beca de prueba",
        "requirements_id":4,
        "scholarship_detail":4,
        "state": "vacio",
        "contract_id":4,
        "quotas":50,
        "scholar_id":4
    }
]

const cardGrid = () =>(
    <>
    <Menu/>
    <br/>
        <div className="container">
        <div className="row">
            {becas.map(b => <Card 
                title={b.title} 
                subtitle={b.state}
                link={b.quotas}
                contract={b.contract_id}
                quotas={b.quotas}
                scholar={b.scholar_id} 
            />)}
        </div>
    </div>
    </>
)

export default cardGrid