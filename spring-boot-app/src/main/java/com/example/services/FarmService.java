package com.example.services;

import com.example.entities.Farm;
import com.example.entities.Movement;
import com.example.exceptions.ResourceNotFoundException;
import com.example.repositories.FarmRepository;
import org.slf4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;



@Service
public class FarmService {


    private final FarmRepository farmRepository;

    @Autowired
    public FarmService(FarmRepository farmRepository) {
        this.farmRepository = farmRepository;
    }

    public List<Farm> getAllFarms() {
        return farmRepository.findAll();
    }

    public Farm getFarmById(Long id) {
        return farmRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Farm", "id", id));
    }

    public Farm createFarm(Farm farm) {
        // You may want to validate or perform additional operations before saving
        return farmRepository.save(farm);
    }

    public Farm updateFarm(Long id, Farm updatedFarm) {
        Farm existingFarm = farmRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Farm", "id", id));

        // Copy non-null properties from updatedFarm to existingFarm
        BeanUtils.copyProperties(updatedFarm, existingFarm, "id");

        return farmRepository.save(existingFarm);
    }

    public void deleteFarm(Long id) {
        if (!farmRepository.existsById(id)) {
            throw new ResourceNotFoundException("Farm", "id", id);
        }
        farmRepository.deleteById(id);
    }

    public void setMovements(Long farmId, List<Movement> movements) {
        Farm farm = getFarmById(farmId);
        farm.setMovements(movements);
        farmRepository.save(farm);
    }

    // Additional method to get all movements for a farm
    public List<Movement> getMovementsForFarm(Long farmId) {
        Farm farm = getFarmById(farmId);
        return farm.getMovements();
    }

    // Method to save farms from a CSV file into the database
    public void saveFarmsFromCSV(MultipartFile file) {
        List<Farm> farms = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            String line;
            boolean isFirstLine = true;

            while ((line = reader.readLine()) != null) {
                // Skip the header row
                if (isFirstLine) {
                    isFirstLine = false;
                    continue;
                }

                // Split the line into fields
                String[] fields = line.split(",");

                // Check if there are at least two fields
                if (fields.length >= 2) {
                    // Create a new Farm object
                    Farm farm = new Farm();

                    // Set the second column as premiseId
                    farm.setPremiseId(fields[1]);

                    // Assuming the third column is totalAnimal
                    farm.setTotalAnimal(Integer.parseInt(fields[2]));

                    // Set other fields as needed

                    // Add farm to the list
                    farms.add(farm);
                } else {
                    // Log or handle invalid CSV format
                    System.err.println("Invalid CSV format. Expected at least 2 columns, found: " + fields.length);
                }
            }
        } catch (IOException | NumberFormatException e) {
            // Log or handle exceptions
            System.err.println("Error reading or parsing CSV file");
            e.printStackTrace();
        }

        farmRepository.saveAll(farms);
    }

}
