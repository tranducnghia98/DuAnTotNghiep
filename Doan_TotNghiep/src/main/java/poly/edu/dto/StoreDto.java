package poly.edu.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import poly.edu.model.Customer;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StoreDto {

    private Integer storeId;
    private String nameStore;
    private String address;
    private String image;
    private Long cartStore;
    private String phone;
    Customer customer;
    Long sl;

}
