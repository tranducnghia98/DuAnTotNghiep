package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import poly.edu.dto.HireDto;
import poly.edu.model.HireVehicle;
import poly.edu.service.HireVehicleService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("hireVehicle")
public class HireRestController {
    @Autowired
    HireVehicleService hireVehicleService;

    @PostMapping("/add")
    public HireVehicle create(@RequestBody HireVehicle hireVehicle){
        return hireVehicleService.save(hireVehicle);
    }

    @GetMapping("/findById/{hireId}")
    public Optional<HireVehicle> findById(@PathVariable("hireId") Integer hireId){
        return hireVehicleService.findById(hireId);
    }

    @GetMapping("/findHireByCusUsername/{cusUsername}")
    public List<HireVehicle> findHireByCusUsername(@PathVariable("cusUsername") String username){
        return hireVehicleService.findHireVehicleBycusUsername(username);
    }

    @GetMapping("/findHistoryByCusUsername/{cusUsername},{status}")
    public List<HireDto> findHistoryByCusUsername(@PathVariable("cusUsername") String username, @PathVariable("status") Boolean status){
        return hireVehicleService.findHistoryHireByCusUsername(username,status);
    }

}
