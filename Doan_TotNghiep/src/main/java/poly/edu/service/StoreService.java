package poly.edu.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import poly.edu.model.Store;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface StoreService {
    List<Store> findByNameStoreContaining(String key);

    List<Store> getAll();

    Store getStoreById(Integer storeId);

    Store createStore(Store store);

    Store updateStore(Integer storeId, Store updatedStore);

    void deleteStore(Integer storeId);

    List<Store> findAll();

    List<Store> findAll(Sort sort);

    List<Store> findAllById(Iterable<Integer> integers);

    <S extends Store> List<S> saveAll(Iterable<S> entities);

    void flush();

    <S extends Store> S saveAndFlush(S entity);

    <S extends Store> List<S> saveAllAndFlush(Iterable<S> entities);

    @Deprecated
    void deleteInBatch(Iterable<Store> entities);

    void deleteAllInBatch(Iterable<Store> entities);

    void deleteAllByIdInBatch(Iterable<Integer> integers);

    void deleteAllInBatch();

    @Deprecated
    Store getOne(Integer integer);

    @Deprecated
    Store getById(Integer integer);

    Store getReferenceById(Integer integer);

    <S extends Store> List<S> findAll(Example<S> example);

    <S extends Store> List<S> findAll(Example<S> example, Sort sort);

    Page<Store> findAll(Pageable pageable);

    <S extends Store> S save(S entity);

    Optional<Store> findById(Integer integer);

    boolean existsById(Integer integer);

    long count();

    void deleteById(Integer integer);

    void delete(Store entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Store> entities);

    void deleteAll();

    <S extends Store> Optional<S> findOne(Example<S> example);

    <S extends Store> Page<S> findAll(Example<S> example, Pageable pageable);

    <S extends Store> long count(Example<S> example);

    <S extends Store> boolean exists(Example<S> example);

    <S extends Store, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction);


}
