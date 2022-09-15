package com.squarefeets.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Builder", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "builder_license"
        })
})
public class Builder implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "builder_id")
    private int builderId;

    @Column(name = "builder_license")
    private String builderLicense;

    @Column(name = "approval_status")
    private String approvalStatus;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_details_id")
    private User userDetails;

    public Builder() {
    }

    public Builder(String builderLicense, String approvalStatus) {
        this.builderLicense = builderLicense;
        this.approvalStatus = approvalStatus;
    }

    public int getBuilderId() {
        return builderId;
    }

    public void setBuilderId(int builderId) {
        this.builderId = builderId;
    }

    public String getBuilderLicense() {
        return builderLicense;
    }

    public void setBuilderLicense(String builderLicense) {
        this.builderLicense = builderLicense;
    }

    public String getApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(String approvalStatus) {
        this.approvalStatus = approvalStatus;
    }

    public User getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(User userDetails) {
        this.userDetails = userDetails;
    }
}
