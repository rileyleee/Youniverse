package com.ssafy.youniverse.repository;

import com.ssafy.youniverse.entity.BestMovie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BestMovieRepository extends JpaRepository<BestMovie, Integer> {
}