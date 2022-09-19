package com.squarefeets.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "Property")
public @Data class Property implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "property_id")
	private int propertyId;
	
	@Column(name = "property_name")
	private String propertyName;
	
	@Column(name = "details")
	private String details;
	
	@Column(name = "price")
	private int price;
	
	@Column(name = "construction_status")
	private String constructionStatus;
	
	@Column(name = "RERA_reg")
	private String reraReg;
	
	@Column(name = "area")
	private String area;
	
	@Column(name = "rooms")
	private String rooms;
	
	@ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
    
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id")
    private User user;
    
    
    @ManyToOne(cascade = CascadeType.MERGE, fetch= FetchType.EAGER)
    @JsonIgnore
    @JoinColumn(name = "property_type_id")
    private Property_Type propertyType;
    
	/*
	@OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Property> property;
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Feedback> property_id;
    
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Payment_Gateway> paymentGateway;
    
    
    @OneToMany(mappedBy = "property_id", cascade = CascadeType.ALL)
    List<Property_Images> propertyImages;
    */
    

	public Property(String propertyName, String details, int price, String constructionStatus, String reraReg,
			String area, String rooms) {
		super();
		this.propertyName = propertyName;
		this.details = details;
		this.price = price;
		this.constructionStatus = constructionStatus;
		this.reraReg = reraReg;
		this.area = area;
		this.rooms = rooms;
	}
    
    
}
