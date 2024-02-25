package com.example.controllers;

import com.example.entities.Farm;
import com.example.services.FarmService;
import com.example.services.MovementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/farms")
public class FarmController {

    private final FarmService farmService;

    @Autowired
    public FarmController(FarmService farmService) {
        this.farmService = farmService;
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
            farmService.saveFarmsFromCSV(file);
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


    // Endpoint to get all farms
    @GetMapping("/all")
    public ResponseEntity<List<Farm>> getAllFarms() {
        List<Farm> farms = farmService.getAllFarms();
        return new ResponseEntity<>(farms, HttpStatus.OK);
    }

    // Endpoint to get a specific farm by ID
    @GetMapping("/{id}")
    public ResponseEntity<Farm> getFarmById(@PathVariable Long id) {
        Farm farm = farmService.getFarmById(id);
        return new ResponseEntity<>(farm, HttpStatus.OK);
    }

    // Endpoint to create a new farm
    @PostMapping("/create")
    public ResponseEntity<Farm> createFarm(@RequestBody Farm farm) {
        Farm createdFarm = farmService.createFarm(farm);
        return new ResponseEntity<>(createdFarm, HttpStatus.CREATED);
    }

    // Endpoint to update an existing farm
    @PutMapping("/update/{id}")
    public ResponseEntity<Farm> updateFarm(@PathVariable Long id, @RequestBody Farm farm) {
        Farm updatedFarm = farmService.updateFarm(id, farm);
        return new ResponseEntity<>(updatedFarm, HttpStatus.OK);
    }

    // Endpoint to delete a farm by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteFarm(@PathVariable Long id) {
        farmService.deleteFarm(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
