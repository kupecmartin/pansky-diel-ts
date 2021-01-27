import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import Logo from '../assets/logo-min.png'

interface Props {
}

const Navigation: React.FC<Props> = () => {
	return (
		<div>

			<nav className={styles.navigation}>
				<NavLink to={'/'}>
					<img src={Logo} alt="Domov"/>
				</NavLink>


				<NavLink to={'/'}>Domov</NavLink>
				<NavLink to={'/registration'}>Registrácia</NavLink>
				<NavLink to={'/results'}>Výsledky</NavLink>
				<NavLink to={'/gallery'}>Galéria</NavLink>
				<NavLink to={'/contact'}>Kontakt</NavLink>
			</nav>
		</div>
	)
}

export default Navigation



