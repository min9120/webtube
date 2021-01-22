
//Global- 
const HOME = "/"
const JOIN = "/join"
const LOGIN = "/login"
const LOGOUT ="/logout"
const SEARCH = "/search"


//users
const USERS = "/users"
const EDIT_PROFILE = "/edit-profile"
const USER_DETAIL = "/:id"
const CHANGE_PASSWORD = "/change-password"

//videos
const VIDEOS = "/videos"
const UPLOAD = "/upload"
const VIDEO_DETAIL = "/:id"
const DELETE_VIDEO = "/:id/delete"
const EDIT_VIDEO = "/:id/edit"

const routes = {
    home:HOME, 
    join:JOIN, 
    login:LOGIN, 
    logout:LOGOUT,
    search:SEARCH,
    users:USERS, 
    editProfile:EDIT_PROFILE, 
    userDetail:USER_DETAIL, 
    changePassword:CHANGE_PASSWORD, 
    videos:VIDEOS,
    upload:UPLOAD, 
    videoDetail:VIDEO_DETAIL, 
    deleteVideo:DELETE_VIDEO, 
    editVideo:EDIT_VIDEO
}

export default routes;