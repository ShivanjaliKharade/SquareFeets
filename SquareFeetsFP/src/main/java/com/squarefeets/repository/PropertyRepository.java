package com.squarefeets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Integer> {
	
	public void deleteById(Integer propertyId);
	
}