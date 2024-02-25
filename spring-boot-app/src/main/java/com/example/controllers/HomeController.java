package com.example.controllers;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;


import com.example.dto.LoginDto;
import com.example.dto.SignUpDto;
import com.example.entities.Role;
import com.example.entities.User;
import com.example.repositories.RoleRepository;
import com.example.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class HomeController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> authenticateUser(@RequestBody LoginDto loginDto) {
        Map<String, String> response = new HashMap<>();
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            response.put("message", "User login successfully!");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            response.put("message", "Invalid username");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            response.put("message", "Invalid username or password");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody SignUpDto signUpDto) {
        Map<String, String> response = new HashMap<>();

        // checking for username exists in a database
        if (userRepository.existsByUserName(signUpDto.getUsername())) {
            response.put("message", "Username is already exist!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        // checking for email exists in a database
        if (userRepository.existsByEmail(signUpDto.getEmail())) {
            response.put("message", "Email is already exist!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        // creating user object
        User user = new User();
        user.setName(signUpDto.getName());
        user.setUserName(signUpDto.getUsername());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        Role roles = roleRepository.findByName("ROLE_ADMIN").orElseThrow(() -> new RuntimeException("Role not found"));
        user.setRoles(Collections.singleton(roles));
        userRepository.save(user);

        response.put("message", "User is registered successfully!");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}