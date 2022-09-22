package com.squarefeets.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Property;

public interface PropertyRepository extends JpaRepository<Property, String> {
	
	public Property findByPropertyName(String propertyName);


}