package com.squarefeets.controller;

import com.squarefeets.model.User;
import com.squarefeets.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/getUserData/{userId}")
    public ResponseEntity<?> getUserData(@PathVariable("userId") String userId){
        User user = userRepository.findById((long)Integer.parseInt(userId)).get();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
