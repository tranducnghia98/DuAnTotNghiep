package poly.edu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Vehicles")
public class Vehicle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vehicleId;
    private String vehicleName;
    private Double rentByDay;
    private String image;
    private Boolean statusHiring; //trạng thái đã được thuê hay chưa
    private String description;
    @ManyToOne
    @JoinColumn(name = "StoreId")
    Store store;
    @JsonIgnore
    @OneToMany(mappedBy = "vehicle")
    List<HireVehicle> hireVehicles;
    @ManyToOne
    @JoinColumn(name = "BrandId")
    Brand brand;







}
