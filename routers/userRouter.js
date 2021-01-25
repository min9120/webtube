import express from "express"
import { changePassword, editProfile, userDetail, users } from "../controller/userController";
import routes from '../routes'

const userRouter = express.Router();
userRouter.get(routes.users,users)
userRouter.get(routes.userDetail, userDetail)
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePassword, changePassword  )

//app 에서 userRouter에 접근할때 이미 URL은 localhost:4000/users 가 됨. 그래서 userDetail => localhost:4000/users/3

export default userRouter;
