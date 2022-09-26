package com.squarefeets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

	Appointment getById(String appId);
		
}
