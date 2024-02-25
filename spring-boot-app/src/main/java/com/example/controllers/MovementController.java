package com.example.controllers;


import com.example.entities.Movement;
import com.example.services.MovementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/movements")
public class MovementController {

    private final MovementService movementService;

    @Autowired
    public MovementController(MovementService movementService) {
        this.movementService = movementService;
    }
    // Default mapping for the root context ("/")
    @GetMapping
    public ResponseEntity<String> defaultMapping() {
        return new ResponseEntity<>("Welcome to the FarmMotion Visualizer!", HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> setDataInDB(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();

        try {
            System.out.println("Received file: " + file.getOriginalFilename());
            movementService.saveMovementsFromCSV(file);
            response.put("message", "Data uploaded successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception along with other relevant details
            e.printStackTrace();
            System.err.println("Error uploading file. Message: " + e.getMessage());
            response.put("message", "File upload failed. Please try again.");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    // Endpoint to get all movements
    @GetMapping("/all")
    public ResponseEntity<List<Movement>> getAllMovements() {
        List<Movement> movements = movementService.getAllMovements();
        return new ResponseEntity<>(movements, HttpStatus.OK);
    }

    @GetMapping("/location-data")
    public ResponseEntity<List<String[]>> getLocationDataForAllMovements() {
        List<String[]> locationData = movementService.getLocationDataForAllMovements();

        if (locationData != null && !locationData.isEmpty()) {
            return new ResponseEntity<>(locationData, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/coordinates")
    public ResponseEntity<List<Double[]>> getCoordinatesForAllMovements() {
        List<Double[]> coordinates = movementService.getCoordinatesForAllMovements();

        if (coordinates != null && !coordinates.isEmpty()) {
            return new ResponseEntity<>(coordinates, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to get a specific movement by ID
    @GetMapping("/{id}")
    public ResponseEntity<Movement> getMovementById(@PathVariable Long id) {
        Movement movement = movementService.getMovementById(id);
        return new ResponseEntity<>(movement, HttpStatus.OK);
    }

    // Endpoint to create a new movement
    @PostMapping("/create")
    public ResponseEntity<Movement> createMovement(@RequestBody Movement movement) {
        Movement createdMovement = movementService.createMovement(movement);
        return new ResponseEntity<>(createdMovement, HttpStatus.CREATED);
    }

    // Endpoint to update an existing movement
    @PutMapping("/update/{id}")
    public ResponseEntity<Movement> updateMovement(@PathVariable Long id, @RequestBody Movement movement) {
        Movement updatedMovement = movementService.updateMovement(id, movement);
        return new ResponseEntity<>(updatedMovement, HttpStatus.OK);
    }

    // Endpoint to delete a movement by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMovement(@PathVariable Long id) {
        movementService.deleteMovement(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
