package com.example.services;

import com.example.entities.Movement;
import com.example.exceptions.ResourceNotFoundException;
import com.example.repositories.MovementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovementService {

    private final MovementRepository movementRepository;

    @Autowired
    public MovementService(MovementRepository movementRepository) {
        this.movementRepository = movementRepository;
    }

    public List<Movement> getAllMovements() {
        return movementRepository.findAll();
    }

    public List<String[]> getLocationDataForAllMovements() {
        return movementRepository.findAll()
                .stream()
                .map(movement -> new String[]{
                        movement.getNewOriginCity(),
                        movement.getNewOriginState(),
                        movement.getNewDestinationCity(),
                        movement.getNewDestinationState()
                })
                .collect(Collectors.toList());
    }

    public List<Double[]> getCoordinatesForAllMovements() {
        return movementRepository.findAll()
                .stream()
                .map(movement -> new Double[]{
                        movement.getOriginLat(),
                        movement.getOriginLon(),
                        movement.getDestinationLat(),
                        movement.getDestinationLon()
                })
                .collect(Collectors.toList());
    }

    public Movement getMovementById(Long id) {
        return movementRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Movement", "id", id));
    }

    public Movement createMovement(Movement movement) {
        return movementRepository.save(movement);
    }

    public Movement updateMovement(Long id, Movement movement) {
        if (movementRepository.existsById(id)) {
            movement.setId(id);
            return movementRepository.save(movement);
        } else {
            throw new ResourceNotFoundException("Movement", "id", id);
        }
    }

    public void deleteMovement(Long id) {
        if (movementRepository.existsById(id)) {
            movementRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Movement", "id", id);
        }
    }

    public void saveMovementsFromCSV(MultipartFile file) {
        List<Movement> movements = new ArrayList<>();

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
                String[] fields = manualSplitCSVLine(line);

                // Check if there are enough fields
                if (fields.length > 21) {
                    Movement movement = createMovementFromFields(fields);

                    // Add movement to the list
                    movements.add(movement);
                } else {
                    // Log or handle invalid CSV format
                    System.err.println("Invalid CSV format. Expected at least 22 columns, found: " + fields.length);
                }
            }
        } catch (IOException e) {
            // Log or handle exceptions
            System.err.println("Error reading CSV file");
            e.printStackTrace();
        }

        movementRepository.saveAll(movements);
    }

    private String[] manualSplitCSVLine(String line) {
        List<String> fields = new ArrayList<>();
        StringBuilder currentField = new StringBuilder();

        boolean inQuotes = false;

        for (char c : line.toCharArray()) {
            if (c == ',' && !inQuotes) {
                fields.add(currentField.toString().trim());
                currentField.setLength(0);
            } else if (c == '"') {
                inQuotes = !inQuotes;
            } else {
                currentField.append(c);
            }
        }

        fields.add(currentField.toString().trim());

        return fields.toArray(new String[0]);
    }

    private Movement createMovementFromFields(String[] fields) {
        Movement movement = new Movement();

        // Set fields based on CSV columns
        movement.setAccountCompany(fields[1]);
        movement.setNewMovementReason(fields[2]);
        movement.setNewSpecies(fields[3]);
        movement.setNewOriginAddress(fields[4]);
        movement.setNewOriginCity(fields[5]);
        movement.setNewOriginName(fields[6]);
        movement.setNewOriginPostalCode(fields[7]);
        movement.setNewOriginPremId(fields[8]);
        movement.setNewOriginState(fields[9]);
        movement.setNewDestinationAddress(fields[10]);
        movement.setNewDestinationCity(fields[11]);
        movement.setNewDestinationName(fields[12]);
        movement.setNewDestinationPostalCode(fields[13]);
        movement.setNewDestinationPremId(fields[14]);
        movement.setNewDestinationState(fields[15]);

        // Handle parsing exceptions for double values
        movement.setOriginLat(parseDoubleValue(fields[16]));
        movement.setOriginLon(parseDoubleValue(fields[17]));
        movement.setDestinationLat(parseDoubleValue(fields[18]));
        movement.setDestinationLon(parseDoubleValue(fields[19]));

        // Handle parsing exceptions for integer value
        movement.setNewNumItemsMoved(parseIntValue(fields[20]));

        // Assuming the last field is a date string, you may need to convert it to Date format
        try {
            movement.setNewShipmentsStartDate(parseDate(fields[21]));
        } catch (ParseException e) {
            // Log or handle the exception, depending on your requirements
            System.err.println("Error parsing date value: " + e.getMessage());
        }

        // Continue setting fields as needed

        return movement;
    }

    private double parseDoubleValue(String fieldValue) {
        if (isValidDouble(fieldValue)) {
            return Double.parseDouble(fieldValue);
        } else {
            // Log or handle the case where the value is not a valid double
            System.err.println("Invalid double value: " + fieldValue);
            return 0.0; // You might want to choose a default value or handle it differently
        }
    }

    private int parseIntValue(String fieldValue) {
        if (isValidInteger(fieldValue)) {
            return Integer.parseInt(fieldValue);
        } else {
            // Log or handle the case where the value is not a valid integer
            System.err.println("Invalid integer value: " + fieldValue);
            return 0; // You might want to choose a default value or handle it differently
        }
    }

    private boolean isValidDouble(String fieldValue) {
        try {
            Double.parseDouble(fieldValue);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private boolean isValidInteger(String fieldValue) {
        try {
            Integer.parseInt(fieldValue);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private Date parseDate(String dateString) throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yy-MM-dd");
        return dateFormat.parse(dateString);
    }
}
