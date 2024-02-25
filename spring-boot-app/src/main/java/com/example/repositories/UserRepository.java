package com.example.repositories;
import com.example.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    boolean existsByUserName(String username);

    boolean existsByEmail(String email);

    public abstract User findByUserNameOrEmail(String userName, String email);
}
