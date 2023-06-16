package poly.edu.restController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Vehicle;
import poly.edu.responsitory.VehicleResp;
import poly.edu.service.VehicleSerivce;

import java.util.List;

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

    @PostMapping("/add")
    public ResponseEntity<Vehicle> addVehicle(@RequestBody Vehicle vehicle){
        return  new ResponseEntity<Vehicle>(vehicleSerivce.addVehicle(vehicle), HttpStatus.OK);
    }

    @PutMapping("update/{vehicleId}")
    public  ResponseEntity<Vehicle>update(@PathVariable("vehicleId") Integer vehicleId, @RequestBody Vehicle vehicle){
        return  new ResponseEntity<Vehicle>(vehicleSerivce.updateVehicle(vehicle),HttpStatus.OK);
    }
}
