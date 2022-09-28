package com.squarefeets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
	
}
