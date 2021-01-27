import React from 'react'
import {NavLink} from 'react-router-dom'

interface Props {}

const Navigation: React.FC<Props> = () => {
	return (
		<div>
			<nav>
				<NavLink to={"/"}>Domov</NavLink>
				<NavLink to={"/registration"}>Registrácia</NavLink>
				<NavLink to={"/results"}>Výsledky</NavLink>
				<NavLink to={"/gallery"}>Galéria</NavLink>
				<NavLink to={"/contact"}>Kontakt</NavLink>
			</nav>
		</div>
	)
}

export default Navigation



