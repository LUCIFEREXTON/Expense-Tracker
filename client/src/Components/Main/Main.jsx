import styles from './main.module.css'
import Table from './../Table/Table';
import { useDispatch } from 'react-redux';
import { open } from '../../Pages/ModalController/modalSlice';
import { modalTypes } from './../../Pages/ModalController/ModalController';

const Main = () => {
	const dispatch = useDispatch()
	const onAddClicked = e => {
		dispatch(open(modalTypes.addExpense))
	}
	return (
		<div className={styles.fixscreen}>
			<div className={styles.actions}>
				<div className={styles.addbtn} onClick={onAddClicked}>+</div>
				<div className={styles.search}>
					<input type="text" placeholder="Search"/>
				</div>
			</div>
			<Table/>
		</div>
	);
}

export default Main;
