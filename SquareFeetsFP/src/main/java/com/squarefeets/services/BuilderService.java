package com.squarefeets.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Builder;
import com.squarefeets.model.Property;
import com.squarefeets.repository.BuilderRepository;
import com.squarefeets.repository.PropertyRepository;

@Service
public class BuilderService {
	
	@Autowired
	private BuilderRepository builderRepository;
	
	@Autowired
	private PropertyRepository propertyRepository;

	//property by builder name
	
	public Optional<Builder> getAllPropertiesOfBuilder(Integer builderId) {
		Optional<Builder> builderPropertyList = this.builderRepository.findById(builderId);
		return builderPropertyList;
		
	}

	public void getBuilderApprovalStatus(Property property, String propertyName) {
		
		property.setPropertyName(propertyName);
		propertyRepository.save(property);
	}
	

	
	
}
