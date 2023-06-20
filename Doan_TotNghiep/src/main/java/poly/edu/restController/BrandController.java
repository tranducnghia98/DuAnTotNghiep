package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Brand;
import poly.edu.responsitory.BrandReps;
import poly.edu.service.BrandService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/brands")
public class BrandController {
    @Autowired
    private BrandService brandService;

<<<<<<< HEAD
    @GetMapping("getAll")
    public List<Brand> getAll(){
        return brandService.findAll();
    }

    @GetMapping("/findById/{brandId}")
    public Optional<Brand> findById(@PathVariable("brandId")Integer brandId){
        return brandService.findById(brandId);
    }
=======
>>>>>>> 94a3f1611b802d21aaa4e9398eba2a8541ca9ab5

}

