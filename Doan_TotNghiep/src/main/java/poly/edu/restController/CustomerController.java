package poly.edu.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import poly.edu.model.Customer;
import poly.edu.service.CustomerService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/getAll")
    public List<Customer> getAllCustomer(@RequestBody Customer customer){
        return customerService.getAll();
    }

    // API để lấy thông tin của một khách hàng dựa trên cusUsername
    @GetMapping("/findById/{cusUsername}")
    public Optional<Customer> findById(@PathVariable("cusUsername")String username){
        return customerService.findById(username);
    }


    // API để tạo mới một khách hàng
    @PostMapping("/add")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        Customer createdCustomer = customerService.createCustomer(customer);
        return ResponseEntity.ok(createdCustomer);
    }

    // API để cập nhật thông tin khách hàng
    @PutMapping("/update/{cusUsername}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable String cusUsername, @RequestBody Customer customerDetails) {
        Customer updatedCustomer = customerService.updateCustomer(cusUsername, customerDetails);
        if (updatedCustomer != null) {
            return ResponseEntity.ok(updatedCustomer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // API để xóa một khách hàng
    @DeleteMapping("/delete/{cusUsername}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable String cusUsername) {
        boolean deleted = customerService.deleteCustomer(cusUsername);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

