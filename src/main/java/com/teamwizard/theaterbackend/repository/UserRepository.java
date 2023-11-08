package com.teamwizard.theaterbackend.repository;

import com.teamwizard.theaterbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface User repository.
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {}
