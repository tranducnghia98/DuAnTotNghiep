package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.dto.HireDto;
import poly.edu.model.HireVehicle;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface HireVehicleService {


    List<HireVehicle> findAll();

    List<HireVehicle> findAll(Sort sort);

    List<HireVehicle> findAllById(Iterable<Integer> integers);

    <S extends HireVehicle> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends HireVehicle> S saveAndFlush(S entity);

    <S extends HireVehicle> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<HireVehicle> entities);

    void deleteAllInBatch(Iterable<HireVehicle> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    HireVehicle getOne(Integer integer);

    @Deprecated
    HireVehicle getById(Integer integer);

    HireVehicle getReferenceById(Integer integer);

    <S extends HireVehicle> List<S> findAll(Example<S> example);

    <S extends HireVehicle> List<S> findAll(Example<S> example, Sort sort);

    Page<HireVehicle> findAll(Pageable pageable);

    <S extends HireVehicle> S save(S entity);

    Optional<HireVehicle> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(HireVehicle entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends HireVehicle> entities);

    void deleteAll();

    <S extends HireVehicle> Optional<S> findOne(Example<S> example);

    <S extends HireVehicle> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends HireVehicle> long count(Example<S> example);

    <S extends HireVehicle> boolean exists(Example<S> example);

    <S extends HireVehicle, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);

    @Query("SELECT o FROM HireVehicle o WHERE o.customer.cusUsername like ?1")
    List<HireVehicle> findHireVehicleBycusUsername(String username);


    @Query("select new poly.edu.dto.HireDto(h.hireId,h.status,h.TotalMoney,h.hireDate,h.returnDate,h.vehicle." +
            "vehicleId,h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,h.vehicle.address,v.store) from HireVehicle h inner join Vehicle v " +
            "on h.vehicle.vehicleId=v.vehicleId where h.customer.cusUsername like ?1 and h.status=?2" +
            " group by h.hireId,h.status,h.TotalMoney,h.hireDate,h.returnDate,h.vehicle.vehicleId," +
            "h.vehicle.vehicleName,h.vehicle.rentByDay,h.vehicle.image,h.vehicle.address,v.store")
    List<HireDto> findHistoryHireByCusUsername(String cusUsername, Boolean status);
}
