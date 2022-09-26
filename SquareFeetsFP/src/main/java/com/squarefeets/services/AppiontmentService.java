package com.squarefeets.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Appointment;
import com.squarefeets.repository.AppointmentRepository;

@Component
@Service
public class AppiontmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	public Appointment addAppointment(Appointment apt) {
		Appointment result = appointmentRepository.save(apt);
		return result;
	}
	
}
