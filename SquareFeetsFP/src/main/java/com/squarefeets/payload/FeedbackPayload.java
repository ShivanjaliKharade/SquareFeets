package com.squarefeets.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class FeedbackPayload {
	 
	 @Size(max = 500)
	 private String comments;
	 
	@NotBlank(message = "Email is mandatory")
    @Email
    private String useremail;
	 
	 
	
}
