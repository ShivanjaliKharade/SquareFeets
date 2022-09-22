package com.squarefeets.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squarefeets.model.Property;
import com.squarefeets.model.User;
import com.squarefeets.services.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	//propertyList
	@GetMapping("/propertyList")
	public ResponseEntity<List<Property>> getProperty(){

		List<Property> propertyList = adminService.getAllPropertiesList();
		if(propertyList.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(propertyList);
	}
	
	//BuilderList
	@GetMapping("/builderList")
	public ResponseEntity<List<User>> getBuilder(){

		List<User> builderList = adminService.getAllBuildersList();
		if(builderList.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(builderList);
	}
	
	//Update Builder Approval Status
	@PutMapping("/builderApproval")
	public ResponseEntity<User>approveBuilder(@RequestBody User user){
		
		try {
			this.adminService.getBuilderApprovalStatus(user);
			return ResponseEntity.ok().body(user);
		}
		catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	
	//Delete Property
		@DeleteMapping("/removeProperty/{propertyName}")
		public ResponseEntity<Void>deleteProperty(@PathVariable("propertyName") String propertyName){
		
		try {
			this.adminService.deleteProperty(propertyName);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
		/*
	//Delete Builder
		@DeleteMapping("/removeBuilder/{username}")
		public ResponseEntity<Void>deleteBuilder(@PathVariable("username") String username){
		
		try {
			this.adminService.deleteBuilder(username);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	*/
	
}
	
