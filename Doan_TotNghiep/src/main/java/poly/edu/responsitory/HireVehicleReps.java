package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.dto.HireDto;
import poly.edu.model.HireVehicle;
import poly.edu.model.Vehicle;

import java.util.List;

@Repository
public interface HireVehicleReps extends JpaRepository<HireVehicle,Integer> {

    @Query("SELECT o FROM HireVehicle o WHERE o.customer.cusUsername like ?1")
    List<HireVehicle> findHireVehicleBycusUsername(String username);

    @Query("select new poly.edu.dto.HireDto(h.hireId,h.status,h.TotalMoney,h.hireDate,h.returnDate,h.vehicle." +
            "vehicleId,h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,h.vehicle.address,v.store) from HireVehicle h inner join Vehicle v " +
            "on h.vehicle.vehicleId=v.vehicleId where h.customer.cusUsername like ?1 and h.status=?2" +
            " group by h.hireId,h.status,h.TotalMoney,h.hireDate,h.returnDate,h.vehicle.vehicleId," +
            "h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,h.vehicle.address,v.store")
    List<HireDto> findHistoryHireByCusUsername(String cusUsername, Boolean status);

//    @Query("select v.vehicleId ,v.vehicleName,v.rentByDay,v.image,v.address,h.hireDate, h.returnDate,h.TotalMoney\n" +
//            "from HireVehicle h inner join Vehicle v on h.vehicle.vehicleId=v.vehicleId where h.customer.cusUsername like ?1 and h.status=?2\n" +
//            "group by v.vehicleId ,v.vehicleName,v.rentByDay,v.image,v.address,h.hireDate, h.returnDate,h.TotalMoney")
//    List<HireVehicle> findHistoryHireByCusUsername(String username);
}
