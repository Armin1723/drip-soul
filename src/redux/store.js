import { configureStore } from '@reduxjs/toolkit'
import verificationSlice from './features/captcha/verificationSlice'

export default configureStore({
  reducer: {
    isVerified: verificationSlice,
  },
})