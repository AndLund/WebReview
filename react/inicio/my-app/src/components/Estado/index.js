import React from "react";
import Card from "../Card";
export default class Estado extends React.Component {
	state = {
		//renderiza na página quando o estado eh alterado
		contador: 0,
		contaPessoas: 2,
		pessoas: [
			{ id: 0, nome: "Anderson", idade: "33", sexo: "Masculino" },
			{ id: 1, nome: "Anddfdsferson", idade: "93", sexo: "Masculino" }
		],
		inputNome: "",
		inputIdade: "",
		inputSexo: "",
		msg: ""
	};

	componentDidMount() {
		console.log("Mount");
	}

	componentDidUpdate(currentState, prevState) {
		const { contador } = this.state;
		if (contador !== prevState.contador) {
			console.log("Update");
		}
	}

	//arrow function utilizada para consertar o prob do this
	clicaBotao = () => {
		const { contador } = this.state;
		this.setState({ contador: contador + 1 });
	};

	enviaFormulario = () => {
		const { inputNome, inputIdade, inputSexo, contaPessoas } = this.state;
		let { pessoas } = this.state;
		pessoas.push({
			id: contaPessoas + 1,
			nome: inputNome,
			idade: inputIdade,
			sexo: inputSexo
		});
		this.setState({
			pessoas,
			contaPessoas: contaPessoas + 1,
			inputNome: "",
			inputIdade: "",
			inputSexo: "",
			msg: "Usuário criado com sucesso."
		});
	};

	render() {
		const {
			contador,
			pessoas,
			inputNome,
			inputIdade,
			inputSexo,
			msg
		} = this.state;
		return (
			<div>
				<h1>teste</h1>
				<p>Contador: {contador}</p>
				<button onClick={this.clicaBotao}>Clique em mim</button>
				{pessoas.map(pessoa => (
					<Card
						key={pessoa.id}
						nome={pessoa.nome}
						idade={pessoa.idade}
						sexo={pessoa.sexo}
					/>
				))}

				{msg !== "" ? <h3>{msg}</h3> : null}

				<div>
					<label>Nome</label>
					<input
						value={inputNome}
						onChange={e => this.setState({ inputNome: e.target.value })}
					/>
					<label>Idade</label>
					<input
						value={inputIdade}
						onChange={e => this.setState({ inputIdade: e.target.value })}
					/>
					<label>Sexo</label>
					<input
						value={inputSexo}
						onChange={e => this.setState({ inputSexo: e.target.value })}
					/>
					<button onClick={this.enviaFormulario}>Enviar</button>
				</div>
			</div>
		);
	}
}
