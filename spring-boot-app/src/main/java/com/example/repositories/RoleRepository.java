package com.example.repositories;

import com.example.entities.Role;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entities.Role;
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(String name);
}