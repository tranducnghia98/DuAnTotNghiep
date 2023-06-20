package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.model.Vehicle;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface  VehicleSerivce {
    List<Vehicle> findByVehicleNameContaining(String key);

    @Query("Select v  from vehicles v inner join stores on v.store_id = stores.store_id where stores.address like ?1")
    List<Vehicle> searchByAddress(String key);

    Vehicle addVehicle(Vehicle vehicle);

    List<Vehicle> getAll();

    Vehicle updateVehicle(Vehicle vehicle);

    void delete(Integer vehicleId);

    Vehicle getVehicleById(Integer vehicleId);

    List<Vehicle> searchVehicleByKey(String key);

    @Query(value = "select top 10 v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id,count(h.vehicle_id) as 'SL'  from vehicles v inner join hire_vehicles h on v.vehicle_id = h.vehicle_id\n" +
            "group by v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id", nativeQuery = true)
    List<Vehicle> findTop10();

    List<Vehicle> findAll();

    List<Vehicle> findAll(Sort sort);

    List<Vehicle> findAllById(Iterable<Integer> integers);

    <S extends Vehicle> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Vehicle> S saveAndFlush(S entity);

    <S extends Vehicle> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Vehicle> entities);

    void deleteAllInBatch(Iterable<Vehicle> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Vehicle getOne(Integer integer);

    @Deprecated
    Vehicle getById(Integer integer);

    Vehicle getReferenceById(Integer integer);

    <S extends Vehicle> List<S> findAll(Example<S> example);

    <S extends Vehicle> List<S> findAll(Example<S> example, Sort sort);

    Page<Vehicle> findAll(Pageable pageable);

    <S extends Vehicle> S save(S entity);

    Optional<Vehicle> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Vehicle entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Vehicle> entities);

    void deleteAll();

    <S extends Vehicle> Optional<S> findOne(Example<S> example);

    <S extends Vehicle> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Vehicle> long count(Example<S> example);

    <S extends Vehicle> boolean exists(Example<S> example);

    <S extends Vehicle, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);

    @Query("SELECT o FROM Vehicle o WHERE o.store.storeId = ?1")
    List<Vehicle> findByStore(Integer storeId);
}
