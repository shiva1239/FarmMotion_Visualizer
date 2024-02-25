# Use the official OpenJDK image as base image
FROM openjdk:17.0

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file into the container
COPY target/FarmMotion-Visualizer-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port that the application runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
