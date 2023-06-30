package poly.edu.restController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import poly.edu.dto.VehicleDto;
import poly.edu.model.Brand;
import poly.edu.model.User;
import poly.edu.model.Vehicle;
import poly.edu.responsitory.VehicleResp;
import poly.edu.service.BrandService;
import poly.edu.service.VehicleSerivce;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
   private VehicleResp vehicleResp;
    @Autowired
    private VehicleSerivce vehicleSerivce;

    @Autowired
    private BrandService brandService;


    @GetMapping("/search/{key}")
    public List<Vehicle>searchByAdd(@PathVariable("key") String key){
        return vehicleSerivce.searchByAddress("%" + key + "%");
    }
//    @GetMapping("/all")
//    public List<Vehicle> getAll(){
//        return vehicleSerivce.getAll();
//    }

    @GetMapping("/findTop8")
    public List<VehicleDto> getTop8(){
        return vehicleSerivce.findTop8();
    }

    @GetMapping("/getOne/{vehicleId}")
    public Optional<Vehicle> getOne(@PathVariable("vehicleId") Integer vehicleId){
        return vehicleSerivce.findById(vehicleId);
    }


    @GetMapping("/findById/{vehicleId}")
    public VehicleDto getVehicleDto(@PathVariable("vehicleId") Integer vehicleId){
        return vehicleSerivce.findVehicleDtoById(vehicleId);
    }

    @GetMapping("/findVehicleWithBrand/{brandId}")
    public List<Vehicle> getVehicleWithBrand(@PathVariable Integer brandId) {
       return vehicleSerivce.findVehiclesBybrandId(brandId);
    }

    @PostMapping("/add")
   public Vehicle add(@RequestBody Vehicle vehicle){
        return vehicleSerivce.saveAndFlush(vehicle);
    }

//    @PutMapping("update/{vehicleId}")
//    public  ResponseEntity<Vehicle>update(@PathVariable("vehicleId") Integer vehicleId, @RequestBody Vehicle vehicle){
//        return  new ResponseEntity<Vehicle>(vehicleSerivce.updateVehicle(vehicle),HttpStatus.OK);
//    }
    @GetMapping("/findBrandIdByVehicleId/{vehicleId}")
    public String getBrandId(@PathVariable("vehicleId") Integer vehicleId){
        return brandService.findBrandIdByVehicleId(vehicleId);
    }
    @GetMapping("/findByStoreId/{storeId}")
    public List<VehicleDto> getVehicleByStoreId(@PathVariable("storeId") Integer storeId){
        return vehicleSerivce.findByStoreId(storeId);
    }

    @GetMapping("/findVehicleByCustomerWasHire/{cusUsername}")
    public List<VehicleDto> getVehiclesByUsernameWasHire(@PathVariable("cusUsername") String username){
        return vehicleSerivce.findVehicleByCustomerWasHire(username);
    }

    @GetMapping("/findByAddress/{address}")
    public List<Vehicle> getByAddress(@PathVariable("address") String address){
        return vehicleSerivce.findByAddressContaining(address);
    }
    @GetMapping("/findByAddressAndPrice/{address},{minPrice},{maxPrice}")
    public List<Vehicle> getByAddressAndPrice(@PathVariable("address") String address,
                  @PathVariable("minPrice") Double minPrice,@PathVariable("maxPrice") Double maxPrice){
        return vehicleSerivce.findByAddressAndPrice("%"+address+"%",minPrice,maxPrice);
    }



}
