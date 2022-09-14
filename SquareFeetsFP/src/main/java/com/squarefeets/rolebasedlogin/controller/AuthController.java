package com.squarefeets.rolebasedlogin.controller;

import com.squarefeets.rolebasedlogin.exception.AppException;
import com.squarefeets.rolebasedlogin.model.*;
import com.squarefeets.rolebasedlogin.payload.*;
import com.squarefeets.rolebasedlogin.repository.RoleRepository;
import com.squarefeets.rolebasedlogin.repository.UserRepository;
import com.squarefeets.rolebasedlogin.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtTokenProvider tokenProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/signup/customer")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequestForCustomer signUpRequestForCustomer) {
        if(userRepository.existsByUsername(signUpRequestForCustomer.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userRepository.existsByEmail(signUpRequestForCustomer.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
//        User user = new User(SignUpRequestForCustomer.getUsername(),
//                SignUpRequestForCustomer.getEmail(), SignUpRequestForCustomer.getPassword());

        User user = new User(signUpRequestForCustomer.getUsername(),
                signUpRequestForCustomer.getPassword(),
                signUpRequestForCustomer.getEmail(),
                signUpRequestForCustomer.getMobileNo(),
                signUpRequestForCustomer.getAadharNo());

        Address address = new Address(Integer.parseInt(signUpRequestForCustomer.getPlotNo()),
                signUpRequestForCustomer.getStreet(),
                signUpRequestForCustomer.getLandmark(),
                signUpRequestForCustomer.getCity(),
                signUpRequestForCustomer.getState(),
                Integer.parseInt( signUpRequestForCustomer.getPincode()));

        user.setAddress(address);

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.ROLE_CUSTOMER)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/customer/{username}")
                .buildAndExpand(result.getUsername()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }

    @PostMapping("/signup/builder")
    public ResponseEntity<?> registerBuilder(@Valid @RequestBody SignUpRequestForBuilder signUpRequestForBuilder){
        if(userRepository.existsByUsername(signUpRequestForBuilder.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userRepository.existsByEmail(signUpRequestForBuilder.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        User user = new User(signUpRequestForBuilder.getUsername(),
                signUpRequestForBuilder.getPassword(),
                signUpRequestForBuilder.getEmail(),
                signUpRequestForBuilder.getMobileNo(),
                signUpRequestForBuilder.getAadharNo());

        Address address = new Address(Integer.parseInt(signUpRequestForBuilder.getPlotNo()),
                signUpRequestForBuilder.getStreet(),
                signUpRequestForBuilder.getLandmark(),
                signUpRequestForBuilder.getCity(),
                signUpRequestForBuilder.getState(),
                Integer.parseInt(signUpRequestForBuilder.getPincode()));

        Builder builder = new Builder(signUpRequestForBuilder.getBuilderLicense(),
                signUpRequestForBuilder.getApprovalStatus());

        user.setAddress(address);
        user.setBuilder(builder);

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.ROLE_BUILDER)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/builder/{username}")
                .buildAndExpand(result.getUsername()).toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }
}