package com.squarefeets.rolebasedlogin.model;

import javax.persistence.*;

@Entity
@Table(name = "Address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Long addressId;

    @Column(name = "plot_no")
    private int plotNo;

    @Column(name = "street")
    private String street;

    @Column(name = "landmark")
    private String landmark;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "pincode")
    private int pincode;

    public Address() {
    }

    public Address(int plotNo, String street, String landmark, String city, String state, int pincode) {
        this.plotNo = plotNo;
        this.street = street;
        this.landmark = landmark;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public int getPlotNo() {
        return plotNo;
    }

    public void setPlotNo(int plotNo) {
        this.plotNo = plotNo;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }
}
