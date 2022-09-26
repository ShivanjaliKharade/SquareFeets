package com.squarefeets.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Builder;
import com.squarefeets.model.Property;
import com.squarefeets.model.User;
import com.squarefeets.repository.BuilderRepository;
import com.squarefeets.repository.PropertyRepository;
import com.squarefeets.repository.UserRepository;

@Service
public class AdminService {

	@Autowired
	private PropertyRepository propertyRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BuilderRepository builderRepository;

	//get property list
	public List<Property> getAllPropertiesList() {
		List<Property> propertyList = (List<Property>)this.propertyRepository.findAll();
		return propertyList;
	}
	
	//get builder list
	public List<User> getAllBuildersList() {
		List<User> builderList = (List<User>)this.userRepository.findAll();
		return builderList;
	}
	
	
	//delete Property
	public void deleteProperty(int propertyId) {
		Property p = propertyRepository.getById(propertyId);
		propertyRepository.delete(p);
	}
	
	/*
	//delete Builder
	public void deleteBuilder(String username) {
		User user = userRepository.findByUsername(username);
		userRepository.delete(user);
	}
	*/
	
	
	//update approval status of builder
	public void updateApprovalStatus(Builder builder, String approvalStatus) {
		
		builder.setApprovalStatus(approvalStatus);
		builderRepository.save(builder);
	}




}
