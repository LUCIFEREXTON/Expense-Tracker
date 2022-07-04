import axios from 'axios'
import { modalTypes } from './ModalController'
import { close, open } from './modalSlice'
import { save } from './userSlice'

export const saveUser = (user) => async(dispatch) => {
    try {
        const res = await axios.post('http://localhost:3001/api/login', { user })
        console.log(res.data)
        dispatch(save(res.data.user))
        dispatch(close())
    } catch (err) {
        console.error(err)
        dispatch(open(modalTypes.login))
    }
}