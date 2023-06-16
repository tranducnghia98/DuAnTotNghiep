package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import poly.edu.model.HireVehicle;

@Repository
public interface HireVehicleReps extends JpaRepository<HireVehicle,Integer> {
}
