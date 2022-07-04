import style from './header.module.css'
import UsedelayEffect from '../UsedelayEffect';
import { useState } from 'react';

export default function Home(){
	const light1 = `${style.light} ${style.red}`
	const light2 = `${style.light} ${style.green}`
	const [showTotal, setShowTotal] = useState(false)

	const toggle = e =>{
		setShowTotal(!showTotal)
	}

	return (<>
		<div className={style.header}>
			<div className={style.fixscreen}>			
			<div className={style.row}>			
				<div className={style.lightbox}>
					<div className={light1}>{' '}</div>
					<div className={light2}>{' '}</div>
				</div>
				<div className={style.title}>Expense Tracker</div>
				<div className={style.balance}>
					<div className={style.month}>Rs. 25000</div>
					<UsedelayEffect
						show={!showTotal}
						setshow={setShowTotal}
						component={<div className={style.total} onClick={toggle}>
												Total Balance
											</div>}
						delay={900}
						showClass='show'
						hideClass='hide'
					/>
					<UsedelayEffect
						show={showTotal}
						setshow={setShowTotal}
						component={<div className={style.total} onClick={toggle}>
													Rs. 25000
											</div>}
						delay={900}
						showClass='show'
						hideClass='hide'
					/>					
				</div>
			</div>
			</div>
		</div>
		<hr className={style.navbar}/>
		</>
	)
}