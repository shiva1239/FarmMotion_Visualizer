package com.example.repositories;

import com.example.entities.Movement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovementRepository extends JpaRepository<Movement, Long> {
    // You can add additional query methods here if needed
}
