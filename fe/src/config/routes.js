
const routes = {
    home: '/',
    singleVehicle: '/singleVehicle/:vehicleId',
    hireVehiclePage:'/hireVehicle/:vehicleId',
    profile: '/profile/:cusUsername',
    changeToStore: '/changeToStore/:cusUsername',
    store: '/store/:cusUsername',
    ManagerStore: '/managerStore/:storeId',
    StoreInformation: '/managerStore/information/:storeId',
    addVehicle: '/addVehicle/:storeId',
    search: '/search/:address/:minPrice/:maxPrice',
    history: '/history/:cusUsername',
    live: '/live',

}

export default routes;