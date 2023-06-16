package poly.edu.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import poly.edu.model.Brand;

import java.util.List;

@Repository
public interface BrandReps extends JpaRepository<Brand,Integer> {
    public List<Brand> findByNameBrandContaining(String key);
}
