package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.HireVehicle;
import poly.edu.service.HireVehicleService;

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

}
