import styles from './modal.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { modal, close } from './modalSlice';
import { saveUser } from './userAction';
import { useState } from 'react';
export const modalTypes = {
  addExpense: 'addExpense', 
  login:'login'
}
const ModalController = () => {
  const modalValue = useSelector(modal)
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')

  const handleClose = e =>{
      e.stopPropagation();
    dispatch(close())
  }
  const onUserSubmit = e =>{
    const temp = saveUser(userInput)
    dispatch(temp)
  }

  const userLogin = (<div className={styles.login}>
      <input type="text" id='username' placeholder='Unique Name' onChange={e=>setUserInput(e.target.value)}/>
      <div className={styles.submitbtn} onClick={onUserSubmit}>LOGIN</div>
    </div>
  )

  const addExpense = (
    <div className={styles.addExpense}>
      <input type="text" id='ExpenseOn' placeholder='Expense On' />    
      <input type="date" id='Date' placeholder='Date' />
      <input type="number" id='Amount' placeholder='Amount' />
      <input type="text" id='Type' placeholder='Type' />
      <datalist for='Type'>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
      </datalist>
      <input type="text" id='Category' placeholder='Category' />    
      <datalist for='Category'>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
      </datalist>
      <div className={styles.submitbtn}>ADD</div>
    </div>
  )
  const renderModal = ()=>{
    if(modalValue.type === modalTypes.addExpense){
      return addExpense
    }else if(modalValue.type === modalTypes.login){
      return userLogin
    }else return null
  }

  if(modalValue?.open){
    return (<>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.close} onClick={handleClose}>x</div>
        {renderModal()}
      </div>
      </>
    )
  } else return null 
}

export default ModalController;
