package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Stores")
@Entity
public class Store implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer storeId;
    private String nameStore;
    private String address;
    private String image;
    private Long cartStore;
    private String phone;

    @JsonIgnore
    @OneToMany(mappedBy = "store")
    List<Vehicle> vehicles;

    @ManyToOne
    @JoinColumn(name = "cusUsername")
    Customer customer;

}
