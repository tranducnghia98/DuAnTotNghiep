package poly.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import poly.edu.model.Vehicle;
import poly.edu.responsitory.VehicleResp;
import poly.edu.service.VehicleSerivce;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class VehicleServiceImpl implements VehicleSerivce {

    @Autowired
    private VehicleResp vehicleResp;


    @Override
    public List<Vehicle> findByVehicleNameContaining(String key) {
        return vehicleResp.findByVehicleNameContaining(key);
    }

    @Override
    @Query("Select v  from vehicles v inner join stores on v.store_id = stores.store_id where stores.address like ?1")
    public List<Vehicle> searchByAddress(String key) {
        return vehicleResp.searchByAddress(key);
    }


    @Override
    public Vehicle addVehicle(Vehicle vehicle) {
        return vehicleResp.save(vehicle);
    }

    @Override
    public List<Vehicle> getAll() {
        return vehicleResp.findAll();
    }

    @Override
    public Vehicle updateVehicle(Vehicle vehicle) {
        Vehicle newVehicle = vehicleResp.findById(vehicle.getVehicleId()).orElse(null);
        if (newVehicle != null) {
            newVehicle.setVehicleName(vehicle.getVehicleName());
            newVehicle.setHireVehicles(vehicle.getHireVehicles());
            newVehicle.setBrand(vehicle.getBrand());
            newVehicle.setImage(vehicle.getImage());
            newVehicle.setStore(vehicle.getStore());
            newVehicle.setDescription(vehicle.getDescription());
            newVehicle.setStatusHiring(vehicle.getStatusHiring());

            vehicleResp.save(newVehicle);
        }
        return newVehicle;
    }

    @Override
    public void delete(Integer vehicleId) {
        vehicleResp.deleteById(vehicleId);
    }

    @Override
    public Vehicle getVehicleById(Integer vehicleId) {
        return vehicleResp.findById(vehicleId).orElse(null);
    }

    @Override
    public List<Vehicle> searchVehicleByKey(String key) {
        List<Vehicle> allVehicle = vehicleResp.findAll();

        List<Vehicle> searchResults = new ArrayList<>();

        for (Vehicle vehicle : allVehicle
        ) {
            if (vehicle.getVehicleName().toLowerCase().contains(key.toLowerCase())) {
                searchResults.add(vehicle);
            }

        }
        searchResults.sort(Comparator.comparing(Vehicle::getVehicleName));
        return searchResults.stream().limit(5).collect(Collectors.toList());
    }

    @Override
    @Query(value = "select top 10 v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id,count(h.vehicle_id) as 'SL'  from vehicles v inner join hire_vehicles h on v.vehicle_id = h.vehicle_id\n" +
            "group by v.vehicle_id,v.description,v.brand_id,v.image,v.rent_by_day,v.status_hiring,v.vehicle_name,v.store_id", nativeQuery = true)
    public List<Vehicle> findTop10() {
        return vehicleResp.findTop10();
    }

    @Override
    public List<Vehicle> findAll() {
        return vehicleResp.findAll();
    }

    @Override
    public List<Vehicle> findAll(Sort sort) {
        return vehicleResp.findAll(sort);
    }

    @Override
    public List<Vehicle> findAllById(Iterable<Integer> integers) {
        return vehicleResp.findAllById(integers);
    }

    @Override
    public <S extends Vehicle> List<S> saveAll(Iterable<S> entities) {
        return vehicleResp.saveAll(entities);
    }

    @Override
    public void flush() {
        vehicleResp.flush();
    }

    @Override
    public <S extends Vehicle> S saveAndFlush(S entity) {
        return vehicleResp.saveAndFlush(entity);
    }

    @Override
    public <S extends Vehicle> List<S> saveAllAndFlush(Iterable<S> entities) {
        return vehicleResp.saveAllAndFlush(entities);
    }

    @Override
    @Deprecated
    public void deleteInBatch(Iterable<Vehicle> entities) {
        vehicleResp.deleteInBatch(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Vehicle> entities) {
        vehicleResp.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {
        vehicleResp.deleteAllByIdInBatch(integers);
    }

    @Override
    public void deleteAllInBatch() {
        vehicleResp.deleteAllInBatch();
    }

    @Override
    @Deprecated
    public Vehicle getOne(Integer integer) {
        return vehicleResp.getOne(integer);
    }

    @Override
    @Deprecated
    public Vehicle getById(Integer integer) {
        return vehicleResp.getById(integer);
    }

    @Override
    public Vehicle getReferenceById(Integer integer) {
        return vehicleResp.getReferenceById(integer);
    }

    @Override
    public <S extends Vehicle> List<S> findAll(Example<S> example) {
        return vehicleResp.findAll(example);
    }

    @Override
    public <S extends Vehicle> List<S> findAll(Example<S> example, Sort sort) {
        return vehicleResp.findAll(example, sort);
    }

    @Override
    public Page<Vehicle> findAll(Pageable pageable) {
        return vehicleResp.findAll(pageable);
    }

    @Override
    public <S extends Vehicle> S save(S entity) {
        return vehicleResp.save(entity);
    }

    @Override
    public Optional<Vehicle> findById(Integer integer) {
        return vehicleResp.findById(integer);
    }

    @Override
    public boolean existsById(Integer integer) {
        return vehicleResp.existsById(integer);
    }

    @Override
    public long count() {
        return vehicleResp.count();
    }

    @Override
    public void deleteById(Integer integer) {
        vehicleResp.deleteById(integer);
    }

    @Override
    public void delete(Vehicle entity) {
        vehicleResp.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {
        vehicleResp.deleteAllById(integers);
    }

    @Override
    public void deleteAll(Iterable<? extends Vehicle> entities) {
        vehicleResp.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        vehicleResp.deleteAll();
    }

    @Override
    public <S extends Vehicle> Optional<S> findOne(Example<S> example) {
        return vehicleResp.findOne(example);
    }

    @Override
    public <S extends Vehicle> Page<S> findAll(Example<S> example, Pageable pageable) {
        return vehicleResp.findAll(example, pageable);
    }

    @Override
    public <S extends Vehicle> long count(Example<S> example) {
        return vehicleResp.count(example);
    }

    @Override
    public <S extends Vehicle> boolean exists(Example<S> example) {
        return vehicleResp.exists(example);
    }

    @Override
    public <S extends Vehicle, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return vehicleResp.findBy(example, queryFunction);
    }

    @Override
    @Query("SELECT o FROM Vehicle o WHERE o.store.storeId = ?1")
    public List<Vehicle> findByStore(Integer storeId) {
        return vehicleResp.findByStore(storeId);
    }

    @Override
    @Query("SELECT o FROM Vehicle o WHERE o.brand.brandId = ?1")
    public List<Vehicle> findVehiclesBybrandId(Integer brandId) {
        return vehicleResp.findVehiclesBybrandId(brandId);
    }

}
