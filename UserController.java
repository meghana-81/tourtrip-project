package com.cbitproject.intern.controller;
import com.cbitproject.intern.exception.UserNotFoundException;
import com.cbitproject.intern.model.User;
import com.cbitproject.intern.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){return userRepository.save(newUser);}
    @GetMapping("/users")
    List<User> getAllUsers(){return userRepository.findAll();}
    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            user.setPackageName(newUser.getPackageName());
            user.setPrice(newUser.getPrice());
            user.setCapacity(newUser.getCapacity());
            user.setLocation(newUser.getLocation());
            user.setPlaces_covered(newUser.getPlaces_covered());
            user.setRatings(newUser.getRatings());
            user.setNo_of_days(newUser.getNo_of_days());
            user.setBooking_date(newUser.getBooking_date());
            user.setStarting_date(newUser.getStarting_date());
            user.setEnding_date(newUser.getEnding_date());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
    @GetMapping("/finduser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/deleteUser/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "deleted user";
    }
}
