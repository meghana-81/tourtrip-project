package com.cbitproject.intern.repository;

import com.cbitproject.intern.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
