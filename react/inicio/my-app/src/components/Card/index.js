import React from "react";
import "./card.css";
export default class Card extends React.Component {
	render() {
		const { nome, idade, sexo } = this.props;
		return (
			<div className="card-body">
				<h1>{nome}</h1>
				<div className="card-detalhes">
					<h2 className="idade">{`${idade} anos`}</h2>
					<h2 className="sexo">{sexo}</h2>
				</div>
			</div>
		);
	}
}
