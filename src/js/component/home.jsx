import React from "react";
import { useState } from "react";


//create your first component
const Home = () => {
	
	const [color, setColor] = useState("");
	return (
		<div className="wrapper">

		<div className="palo container d-flex flex-column justify-content-center align-items-center"></div>

		<div className="semaforo bg-dark container d-flex flex-column justify-content-center align-items-center">
		<button onClick={()=>setColor('rojo')} className={`btn-rojo bg-danger p-2 ${color=== "rojo" ? "brillandoRojo" : ""}`}></button>
		<button onClick={()=>setColor('amarillo')} className={`btn-amarillo bg-warning p-2 ${color === "amarillo" ? "brillandoAmarillo" : ""}`}></button>
		<button onClick={()=>setColor('verde')} className={`btn-verde bg-success p-2 ${color === "verde"? "brillandoVerde" : ""}`}></button>
		</div>
		
		<div className="mt-5 d-flex justify-content-center align-items-center">
		<button onClick={()=>setColor("")} className="bg-primary text-white fs-3 rounded ">Apagar</button>
		</div>
		
		</div>

	);
};

export default Home;
