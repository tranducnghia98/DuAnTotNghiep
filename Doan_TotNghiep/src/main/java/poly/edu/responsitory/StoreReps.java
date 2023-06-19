package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.model.Brand;
import poly.edu.model.Customer;
import poly.edu.model.Store;
import poly.edu.model.Vehicle;

import java.util.List;

@Repository
public interface StoreReps extends JpaRepository<Store,Integer> {
    public List<Store> findByNameStoreContaining(String key);
    @Query("SELECT o FROM Store o WHERE o.customer.cusUsername like ?1")
    List<Store> findByCusUsername(String username);


}
