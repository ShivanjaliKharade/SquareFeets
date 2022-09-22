package com.squarefeets.payload;

public class JwtAuthenticationResponse {

    private String accessToken;
    private String tokenType = "Bearer";

    private String username;

    private String userRole;
    
    private Long userId;

    public JwtAuthenticationResponse(String accessToken, String username, String userRole, Long userId) {
        this.accessToken = accessToken;
        this.username = username;
        this.userRole = userRole;
        this.userId =userId;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
    
    
}
