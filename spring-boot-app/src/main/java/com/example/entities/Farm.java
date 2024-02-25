package com.example.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "farm_table")
@Getter
@Setter
public class Farm implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "farm_id")
    private Long id;

    @Column(name = "premise_id")
    private String premiseId;

    @Column(name = "total_animal")
    private int totalAnimal;

    @OneToMany
    private List<Movement> movements;

    // Constructors
    public Farm() {
        // Default constructor needed by JPA
    }

    public Farm(String premiseId, int totalAnimal) {
        this.premiseId = premiseId;
        this.totalAnimal = totalAnimal;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPremiseId() {
        return premiseId;
    }

    public void setPremiseId(String premiseId) {
        this.premiseId = premiseId;
    }

    public int getTotalAnimal() {
        return totalAnimal;
    }

    public void setTotalAnimal(int totalAnimal) {
        this.totalAnimal = totalAnimal;
    }

    public List<Movement> getMovements() {
        return movements;
    }

    public void setMovements(List<Movement> movements) {
        this.movements = movements;
    }
}
