import config from '~/config'

//Layouts
import {HeaderOnly} from '~/layouts'


//pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile'
import Live from '~/pages/Live'
import SingleVehicle from '~/pages/SingleVehicle/SingleVehicle'
import HireVehicle from '~/pages/HireVehicle/HireVehicle'



//Public router
const publicRouter = [
    {path: config.routes.home, component: Home},
    {path: config.routes.singleVehicle , component: SingleVehicle},
    {path: config.routes.hireVehiclePage , component: HireVehicle},
    {path: config.routes.upload, component: Upload, layout:HeaderOnly},
    {path: config.routes.search, component: Search, layout:null}
]
const privateRouter = [] 

export {publicRouter,privateRouter}