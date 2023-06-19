import config from '~/config'

//Layouts
import {HeaderOnly} from '~/layouts'


//pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile'
import SingleVehicle from '~/pages/SingleVehicle/SingleVehicle'
import HireVehicle from '~/pages/HireVehicle/HireVehicle'
import ChangeToStore from '~/pages/Profile/ChageToStore'
import Store from '~/pages/Store/Store'



//Public router
const publicRouter = [
    {path: config.routes.home, component: Home},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.singleVehicle , component: SingleVehicle},
    {path: config.routes.hireVehiclePage , component: HireVehicle},
    {path: config.routes.changeToStore , component: ChangeToStore},
    {path: config.routes.store , component: Store},
    // {path: config.routes.upload, component: Upload, layout:HeaderOnly},
    {path: config.routes.search, component: Search, layout:null}
]
const privateRouter = [] 

export {publicRouter,privateRouter}