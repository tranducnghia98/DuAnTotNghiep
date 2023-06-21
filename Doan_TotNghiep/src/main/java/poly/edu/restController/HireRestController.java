package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.HireVehicle;
import poly.edu.service.HireVehicleService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("hireVehicle")
public class HireRestController {
    @Autowired
    HireVehicleService hireVehicleService;

    @PostMapping("/add")
    public HireVehicle create(@RequestBody HireVehicle hireVehicle){
        return hireVehicleService.saveAndFlush(hireVehicle);
    }

    @GetMapping("findHireByCusUsername/{cusUsername}")
    public List<HireVehicle> findHireByCusUsername(@PathVariable("cusUsername") String username){
        return hireVehicleService.findHireVehicleBycusUsername(username);
    }

}
