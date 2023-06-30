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
    @Column(columnDefinition = "nvarchar(100) not null")
    private String vehicleName;
    private Double rentByDay;
    private String image;
    private String image2;
    private String image3;
    private Boolean statusHiring; //trạng thái đã được thuê hay chưa
    @Column(columnDefinition = "nvarchar(100) not null")
    private String description;
    @Column(columnDefinition = "nvarchar(100) not null")
    private String address;
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
