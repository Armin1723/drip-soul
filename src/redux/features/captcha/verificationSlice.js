import { createSlice } from "@reduxjs/toolkit"

const localVerificationData = localStorage.getItem('isVerified')
console.log(localVerificationData)

const verificationSlice = createSlice({
    name : 'isVerified',
    initialState : {
        value : localVerificationData ? JSON.parse(localVerificationData).value : false,
        expiry : localVerificationData ? JSON.parse(localVerificationData).expiry : null
    },
    reducers : {
        verify : (state) => {
            state.value = true
            state.expiry = Date.now() + 1000 * 60 //1 minute
            localStorage.setItem('isVerified', JSON.stringify({
                value : state.value,
                expiry : state.expiry
            }))
        },
        reset : (state) => {
            state.value = false
            state.expiry = null
            localStorage.removeItem('isVerified')
        }
    }
})

export const { verify, reset } = verificationSlice.actions

export default verificationSlice.reducer