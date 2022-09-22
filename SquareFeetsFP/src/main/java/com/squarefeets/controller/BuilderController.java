package com.squarefeets.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squarefeets.model.Builder;
import com.squarefeets.model.Property;
import com.squarefeets.payload.AddPropertyForBuilder;
import com.squarefeets.services.BuilderService;
import com.squarefeets.services.PropertyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class BuilderController {

	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private BuilderService builderService;
	
	//add property
		@PostMapping("/addProperty/builder")
		public ResponseEntity<Property>addProperty(@RequestBody AddPropertyForBuilder addPropertyForBuilder){
			Property property = null;
			try {
				property = propertyService.getPropertyFromPayload(addPropertyForBuilder);
				return ResponseEntity.status(HttpStatus.CREATED).build();
			}
			catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		
	//get property by Builder name
		@GetMapping("/builderproperty/{builderId}")
		public ResponseEntity<Optional<Builder>> getProperty(@PathVariable("builderId") Integer builderId){

			Optional<Builder> propertyList = builderService.getAllPropertiesOfBuilder(builderId);
			
			return ResponseEntity.status(HttpStatus.CREATED).body(propertyList);
		}
		
	//update property
		@PutMapping("/updateProperty/{propertyName}")
		public ResponseEntity<Property> approveBuilder(@RequestBody Property property, @PathVariable("propertyName") String propertyName){
			
			try {
				this.builderService.getBuilderApprovalStatus(property, propertyName);
				return ResponseEntity.ok().body(property);
			}
			catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		
		
}
