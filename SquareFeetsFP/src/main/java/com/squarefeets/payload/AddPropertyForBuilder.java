package com.squarefeets.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.UniqueElements;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class AddPropertyForBuilder {
	
	@NotBlank(message = "Please Enter Property Name")
	@UniqueElements
    @Size(min = 3, max = 15)
	private String propertyName;
	
	@NotBlank(message = "Please Enter Property Details")
    @Size(min = 3, max = 50)
	private String details;
	
	@NotBlank(message = "Please Enter Property Price")
    @Size(min = 3, max = 15)
	private int price;
	
	@NotBlank(message = "Please Enter Construction Status")
    @Size(min = 3, max = 15)
	private String constructionStatus;
	
	@Size(min = 0, max = 15)
	private String reraReg;
	
	@NotBlank(message = "Please Enter location")
    @Size(min = 3, max = 15)
	private String area;
	
	@NotBlank(message = "Please Enter type of room")
    @Size(min = 0, max = 15)
	private String rooms;
	
	@NotBlank(message = "Please Enter Plot No.")
	@Size(min = 0, max = 15)
    private String plotNo;

    @NotBlank(message = "Please Enter Street")
    @Size(min = 3, max = 15)
    private String street;

    @NotBlank(message = "Please Enter Landmark")
    @Size(min = 3, max = 15)
    private String landmark;

    @NotBlank(message = "Please Enter City")
    @Size(min = 3, max = 15)
    private String city;

    @NotBlank(message = "Please Enter State")
    @Size(min = 3, max = 15)
    private String state;

    @NotBlank(message = "Please Enter Pincode")
    @Size(min = 6, max = 6)
    private String pincode;
    
    @NotBlank(message = "Email is mandatory")
    @Email
    private String useremail;

    @NotBlank(message = "Please select Property Type")
    private String propertyTypeId;

    
}
