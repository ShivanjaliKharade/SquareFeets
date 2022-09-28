package com.squarefeets.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squarefeets.model.Feedback;
import com.squarefeets.model.User;
import com.squarefeets.payload.AddPropertyForBuilder;
import com.squarefeets.repository.UserRepository;
import com.squarefeets.services.FeedbackService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class FeedbackController {
	
	
	@Autowired
	private FeedbackService feedbackService;
	
	// add property
		 @PostMapping("/postFeedback")
		 public ResponseEntity<Feedback>addFeedback(@RequestBody Feedback feedback){
		 Feedback feeds = null;
		
		 try {
//			 User user = userRepository.getById(id);
//			 Feedback feed = user.setFeedback(feed);
			 feeds = this.feedbackService.addFeedback(feedback);
		 System.out.println(feeds);
		 return ResponseEntity.status(HttpStatus.CREATED).build();
		 }
		 catch (Exception e) {
		 e.printStackTrace();
		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		 }
		
		
		 }

}
