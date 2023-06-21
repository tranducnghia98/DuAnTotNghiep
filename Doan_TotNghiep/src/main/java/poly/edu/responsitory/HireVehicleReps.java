package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.model.HireVehicle;
import poly.edu.model.Vehicle;

import java.util.List;

@Repository
public interface HireVehicleReps extends JpaRepository<HireVehicle,Integer> {

    @Query("SELECT o FROM HireVehicle o WHERE o.customer.cusUsername like ?1")
    List<HireVehicle> findHireVehicleBycusUsername(String username);
}
