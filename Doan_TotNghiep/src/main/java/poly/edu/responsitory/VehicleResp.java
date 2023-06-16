package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.model.Brand;
import poly.edu.model.HireVehicle;
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
}