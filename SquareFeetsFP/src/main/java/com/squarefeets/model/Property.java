package com.squarefeets.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "Property")
public @Data class Property {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "property_id")
	private int propertyId;
	
	@Column(name = "property_name")
	private String property_name;
	
	@Column(name = "details")
	private String details;
	
	@Column(name = "price")
	private int price;
	
	@Column(name = "construction_status")
	private String construction_status;
	
	@Column(name = "RERA_reg")
	private String rERA_reg;
	
	@Column(name = "area")
	private String area;
	
	@Column(name = "rooms")
	private String rooms;
	
	@ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
    
	/*
    @ManyToOne
    @JoinColumn(name = "user_details_id")
    private User_Details userDetails;
    
    
    @ManyToOne
    @JoinColumn(name = "property_type_id")
    private Property_Type propertyType;
	
	@OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Property> property;
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Feedback> property_id;
    
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Payment_Gateway> paymentGateway;
    
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Property_Images> propertyImages;
    */
    

	public Property(String property_name, String details, int price, String construction_status, String rERA_reg,
			String area, String rooms) {
		super();
		this.property_name = property_name;
		this.details = details;
		this.price = price;
		this.construction_status = construction_status;
		this.rERA_reg = rERA_reg;
		this.area = area;
		this.rooms = rooms;
	}
    
    
}
