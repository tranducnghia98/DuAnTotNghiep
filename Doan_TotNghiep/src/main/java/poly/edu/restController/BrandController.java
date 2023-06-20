package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Brand;
import poly.edu.responsitory.BrandReps;
import poly.edu.service.BrandService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/brands")
public class BrandController {
    @Autowired
    private BrandService brandService;


}

