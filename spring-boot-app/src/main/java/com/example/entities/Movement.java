package com.example.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name = "movement_table")
@Getter
@Setter
public class Movement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "movement_id")
    private Long id;

    @Column(name = "account_company")
    private String accountCompany;

    @Column(name = "new_movementreason")
    private String newMovementReason;

    @Column(name = "new_species")
    private String newSpecies;

    @Column(name = "new_originaddress")
    private String newOriginAddress;

    @Column(name = "new_origincity")
    private String newOriginCity;

    @Column(name = "new_originname")
    private String newOriginName;

    @Column(name = "new_originpostalcode")
    private String newOriginPostalCode;

    @Column(name = "new_originpremid")
    private String newOriginPremId;

    @Column(name = "new_originstate")
    private String newOriginState;

    @Column(name = "new_destinationaddress")
    private String newDestinationAddress;

    @Column(name = "new_destinationcity")
    private String newDestinationCity;

    @Column(name = "new_destinationname")
    private String newDestinationName;

    @Column(name = "new_destinationpostalcode")
    private String newDestinationPostalCode;

    @Column(name = "new_destinationpremid")
    private String newDestinationPremId;

    @Column(name = "new_destinationstate")
    private String newDestinationState;

    @Column(name = "origin_Lat")
    private Double originLat;

    @Column(name = "origin_Lon")
    private Double originLon;

    @Column(name = "destination_Lat")
    private Double destinationLat;

    @Column(name = "destination_Long")
    private Double destinationLon;

    @Column(name = "new_numitemsmoved")
    private int newNumItemsMoved;

    @Column(name = "new_shipmentsstartdate")
    private Date newShipmentsStartDate;

    // Default constructor
    public Movement() {
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccountCompany() {
        return accountCompany;
    }

    public void setAccountCompany(String accountCompany) {
        this.accountCompany = accountCompany;
    }

    public String getNewMovementReason() {
        return newMovementReason;
    }

    public void setNewMovementReason(String newMovementReason) {
        this.newMovementReason = newMovementReason;
    }

    public String getNewSpecies() {
        return newSpecies;
    }

    public void setNewSpecies(String newSpecies) {
        this.newSpecies = newSpecies;
    }

    public String getNewOriginAddress() {
        return newOriginAddress;
    }

    public void setNewOriginAddress(String newOriginAddress) {
        this.newOriginAddress = newOriginAddress;
    }

    public String getNewOriginCity() {
        return newOriginCity;
    }

    public void setNewOriginCity(String newOriginCity) {
        this.newOriginCity = newOriginCity;
    }

    public String getNewOriginName() {
        return newOriginName;
    }

    public void setNewOriginName(String newOriginName) {
        this.newOriginName = newOriginName;
    }

    public String getNewOriginPostalCode() {
        return newOriginPostalCode;
    }

    public void setNewOriginPostalCode(String newOriginPostalCode) {
        this.newOriginPostalCode = newOriginPostalCode;
    }

    public String getNewOriginPremId() {
        return newOriginPremId;
    }

    public void setNewOriginPremId(String newOriginPremId) {
        this.newOriginPremId = newOriginPremId;
    }

    public String getNewOriginState() {
        return newOriginState;
    }

    public void setNewOriginState(String newOriginState) {
        this.newOriginState = newOriginState;
    }

    public String getNewDestinationAddress() {
        return newDestinationAddress;
    }

    public void setNewDestinationAddress(String newDestinationAddress) {
        this.newDestinationAddress = newDestinationAddress;
    }

    public String getNewDestinationCity() {
        return newDestinationCity;
    }

    public void setNewDestinationCity(String newDestinationCity) {
        this.newDestinationCity = newDestinationCity;
    }

    public String getNewDestinationName() {
        return newDestinationName;
    }

    public void setNewDestinationName(String newDestinationName) {
        this.newDestinationName = newDestinationName;
    }

    public String getNewDestinationPostalCode() {
        return newDestinationPostalCode;
    }

    public void setNewDestinationPostalCode(String newDestinationPostalCode) {
        this.newDestinationPostalCode = newDestinationPostalCode;
    }

    public String getNewDestinationPremId() {
        return newDestinationPremId;
    }

    public void setNewDestinationPremId(String newDestinationPremId) {
        this.newDestinationPremId = newDestinationPremId;
    }

    public String getNewDestinationState() {
        return newDestinationState;
    }

    public void setNewDestinationState(String newDestinationState) {
        this.newDestinationState = newDestinationState;
    }

    public Double getOriginLat() {
        return originLat;
    }

    public void setOriginLat(Double originLat) {
        this.originLat = originLat;
    }

    public Double getOriginLon() {
        return originLon;
    }

    public void setOriginLon(Double originLon) {
        this.originLon = originLon;
    }

    public Double getDestinationLat() {
        return destinationLat;
    }

    public void setDestinationLat(Double destinationLat) {
        this.destinationLat = destinationLat;
    }

    public Double getDestinationLon() {
        return destinationLon;
    }

    public void setDestinationLon(Double destinationLon) {
        this.destinationLon = destinationLon;
    }

    public int getNewNumItemsMoved() {
        return newNumItemsMoved;
    }

    public void setNewNumItemsMoved(int newNumItemsMoved) {
        this.newNumItemsMoved = newNumItemsMoved;
    }

    public Date getNewShipmentsStartDate() {
        return newShipmentsStartDate;
    }

    public void setNewShipmentsStartDate(Date newShipmentsStartDate) {
        this.newShipmentsStartDate = newShipmentsStartDate;
    }
}
