package com.cbitproject.intern.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.Scanner;

@Entity

public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String PackageName;
    private Integer Price;
    private Integer Capacity;
    private String Location;
    private String Places_covered;
    private Integer Ratings;
    private LocalDate Booking_date;
    private Integer No_of_days;
    private LocalDate Starting_date;
    private LocalDate Ending_date;




    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPackageName() {
        return PackageName;
    }

    public void setPackageName(String PackageName) {
        PackageName = PackageName;
    }

    public Integer getPrice() {
        return Price;
    }

    public void setPrice(Integer price) {
        Price = price;
    }

    public Integer getCapacity() {
        return Capacity;
    }

    public void setCapacity(Integer capacity) {
        Capacity = capacity;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public String getPlaces_covered() {
        return Places_covered;
    }

    public void setPlaces_covered(String places_covered) {
        Places_covered = places_covered;
    }

    public Integer getRatings() {
        return Ratings;
    }

    public void setRatings(Integer ratings) {
        Ratings = ratings;
    }

    public LocalDate getBooking_date() {
        return Booking_date;
    }

    public void setBooking_date(LocalDate booking_date) {
        Booking_date = booking_date;
    }

    public Integer getNo_of_days() {
        return No_of_days;
    }

    public void setNo_of_days(Integer no_of_days) {
        No_of_days = no_of_days;
    }

    public LocalDate getStarting_date() {
        return Starting_date;
    }

    public void setStarting_date(LocalDate starting_date) {
        Starting_date = starting_date;
    }

    public LocalDate getEnding_date() {
        return Ending_date;
    }

    public void setEnding_date(LocalDate ending_date) {
        Ending_date = ending_date;
    }

    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        User travelPlanner=new User();
        String startingInput=scanner.nextLine();
        try {
            LocalDate startingDate=LocalDate.parse(startingInput);
            travelPlanner.setStarting_date(startingDate);
        }catch (DateTimeParseException e){
            System.out.println("Please enter the date in YYYY-MM-DD format.");
            return;
        }
        String endingInput=scanner.nextLine();
        try {
            LocalDate endingdate=LocalDate.parse(endingInput);
            travelPlanner.setEnding_date(endingdate);
        }catch (DateTimeParseException e){
            System.out.println("Please enter the date in YYYY-MM-DD format");
            return;
        }

        String bookingInput=scanner.nextLine();
        try {
            LocalDate bookingdate=LocalDate.parse(bookingInput);
            travelPlanner.setEnding_date(bookingdate);
        }catch (DateTimeParseException e){
            System.out.println("Please enter the date in YYYY-MM-DD format");
            return;
        }
        System.out.println(travelPlanner.getStarting_date());
        System.out.println(travelPlanner.getEnding_date());
        System.out.println(travelPlanner.getBooking_date());
        scanner.close();
    }
}