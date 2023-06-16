package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Store;
import poly.edu.service.StoreService;

import java.util.List;

@Controller
@CrossOrigin("*")
@RequestMapping("/store")
public class StoreController {

    @Autowired
    private StoreService storeService;


    @PostMapping("/addStore")
    public ResponseEntity<Store> createStore(@RequestBody Store store) {
        Store savedStore = storeService.createStore(store);
        return new ResponseEntity<>(savedStore, HttpStatus.CREATED);
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
