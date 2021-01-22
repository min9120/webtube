import express from "express"
import routes from '../routes'

const userRouter = express.Router();
userRouter.get(routes.users, (req, res)=> res.send("users"))
userRouter.get(routes.userDetail, (req, res)=> res.send("userDetail"))
userRouter.get(routes.editProfile, (req, res)=> res.send("editProfile"))
userRouter.get(routes.changePassword, (req, res)=> res.send("changePassword"))

//app 에서 userRouter에 접근할때 이미 URL은 localhost:4000/users 가 됨. 그래서 userDetail => localhost:4000/users/3

export default userRouter;
