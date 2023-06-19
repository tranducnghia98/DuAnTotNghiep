package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Customer;
import poly.edu.model.HireVehicle;
import poly.edu.model.Store;
import poly.edu.service.CustomerService;
import poly.edu.service.StoreService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreService storeService;

    @Autowired
    private CustomerService customerService;


    @PostMapping("/add")
    public Store create(@RequestBody Store store){
        return storeService.save(store);
    }

    @GetMapping("/findByCustomer/{cusUsername}")
    public List<Store> findStoreByCustomer(@PathVariable("cusUsername")String cusUsername){
        return storeService.findByCusUsername(cusUsername);
    }

    @GetMapping("/getById/{storeId}")
    public ResponseEntity<Store> getStoreById(@PathVariable Integer storeId) {
        Store store = storeService.getStoreById(storeId);
        if (store != null) {
            return new ResponseEntity<>(store, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Store>> getAllStores() {
        List<Store> stores = storeService.getAll();
        return new ResponseEntity<>(stores, HttpStatus.OK);
    }

    @PutMapping("/update/{storeId}")
    public Store updateStore(@PathVariable Integer storeId, @RequestBody Store updateStore) {
        return storeService.updateStore(storeId,updateStore);
    }

    @DeleteMapping("/delete/{storeId}")
    public ResponseEntity<Void> deleteStore(@PathVariable Integer storeId) {
        storeService.deleteStore(storeId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
