package com.squarefeets.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Feedback;
import com.squarefeets.repository.FeedbackRepository;

@Service
public class FeedbackService {
	
	@Autowired
	FeedbackRepository feedbackRepository;

	public Feedback addFeedback(Feedback feedback) {
		Feedback result = feedbackRepository.save(feedback);
		return result;
	}


}
