package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.model.Brand;
import poly.edu.model.HireVehicle;
import poly.edu.model.Store;
import poly.edu.model.Vehicle;

import java.util.List;

@Repository
public interface VehicleResp extends JpaRepository<Vehicle,Integer> {

//    @Query(value = "SELECT DISTINCT  top 10 vehicle_name \n" +
//            "            FROM vehicles  \n" +
//            "            INNER JOIN hire_vehicles\n" +
//            "            ON vehicles.vehicle_id = hire_vehicles.vehicle_id", nativeQuery = true)
//    List<String> findTop10VehicleNames();

    @Query(value = "select top 10 v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id,count(h.vehicle_id) as 'SL'  from vehicles v inner join hire_vehicles h on v.vehicle_id = h.vehicle_id\n" +
            "group by v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id", nativeQuery = true)
    List<Vehicle> findTop10();
    public List<Vehicle> findByVehicleNameContaining(String key);

    @Query(value = "Select v from Vehicle v where v.store.address like  ?1")
    public  List<Vehicle> searchByAddress(String  key);


    @Query("SELECT o FROM Vehicle o WHERE o.store.storeId = ?1")
    List<Vehicle> findByStore(Integer storeId);

    @Query("SELECT o FROM Vehicle o WHERE o.brand.brandId = ?1")
    List<Vehicle> findVehiclesBybrandId(Integer brandId);

//    @Query("select v.vehicleId,v.description,v.brand.brandId,v.image,v.rentByDay,v.statusHiring,v.vehicleName,v.store.storeId from Vehicle v inner join HireVehicle h on v.vehicleId = h.vehicle.vehicleId where h.customer.cusUsername like ?1 group by v.vehicleId,v.description,v.brand.brandId,v.image,v.rentByDay,v.statusHiring,v.vehicleName,v.store.storeId")
    @Query(value = "select v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id from vehicles v inner join hire_vehicles h on v.vehicle_id = h.vehicle_id where h.cus_username like ?1 group by v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id", nativeQuery = true)
    List<Vehicle> findByUsernameWasHire(String username);



}
