package com.squarefeets.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squarefeets.model.Appointment;
import com.squarefeets.services.AppiontmentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AppointmentController {
	
	@Autowired
	private AppiontmentService appointmentService;

	 //add property
		 @PostMapping("/addAppointment")
		 public ResponseEntity<Appointment>addAppointment(@RequestBody Appointment appointment){
			 Appointment apt = null;
		
		 try {
		 apt = this.appointmentService.addAppointment(appointment);
		 System.out.println(appointment);
		 return ResponseEntity.status(HttpStatus.CREATED).build();
		 }
		 catch (Exception e) {
		 e.printStackTrace();
		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		 }
		
		
		 }
	
}
