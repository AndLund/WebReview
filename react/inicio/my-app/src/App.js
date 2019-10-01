import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Estado from "./components/Estado";

const usuarios = [
	{ id: 1, nome: "Anderson Holanda", idade: 33, sexo: "Masculino" },
	{ id: 2, nome: "Holanda", idade: 23, sexo: "Masculino" }
];

function App() {
	return (
		<div className="App">
			<Header />
			{/* <Card nome="Anderson Holanda" idade="33" sexo="Masculino" /> */}
			{/* <Card nome="Antonia" idade="23" sexo="Feminino" /> */}
			{usuarios.map(usuario => (
				<Card
					key={usuario.id}
					nome={usuario.nome}
					idade={usuario.idade}
					sexo={usuario.sexo}
				/>
			))}
			<Estado />
		</div>
	);
}

export default App;
