package poly.edu.restController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Vehicle;
import poly.edu.responsitory.VehicleResp;
import poly.edu.service.VehicleSerivce;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
   private VehicleResp vehicleResp;
    @Autowired
    private VehicleSerivce vehicleSerivce;



    @GetMapping("/search/{key}")
    public List<Vehicle>searchByAdd(@PathVariable("key") String key){
        return vehicleSerivce.searchByAddress("%" + key + "%");
    }
    @GetMapping("/all")
    public List<Vehicle> getAll(){
        return vehicleSerivce.getAll();
    }

    @GetMapping("/getOne/{vehicleId}")
    public Optional<Vehicle> getOne(@PathVariable("vehicleId") Integer vehicleId){
        return vehicleSerivce.findById(vehicleId);
    }

    @PostMapping("/add")
   public Vehicle add(@RequestBody Vehicle vehicle){
        return vehicleSerivce.saveAndFlush(vehicle);
    }

    @PutMapping("update/{vehicleId}")
    public  ResponseEntity<Vehicle>update(@PathVariable("vehicleId") Integer vehicleId, @RequestBody Vehicle vehicle){
        return  new ResponseEntity<Vehicle>(vehicleSerivce.updateVehicle(vehicle),HttpStatus.OK);
    }

    @GetMapping("/findByStore/{storeId}")
    public List<Vehicle> getVehicleByStore(@PathVariable("storeId") Integer storeId){
        return vehicleSerivce.findByStore(storeId);
    }

}
