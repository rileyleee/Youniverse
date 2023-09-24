package com.ssafy.youniverse.service;

import com.ssafy.youniverse.entity.GenreMovie;
import com.ssafy.youniverse.repository.GenreMovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class GenreMovieService {
    private final GenreMovieRepository genreMovieRepository;

    //생성
    public GenreMovie createGenreMovie(GenreMovie genreMovie) {
        return genreMovieRepository.save(genreMovie);
    }

    //조회
    public GenreMovie readGenreMovie(int genreMovieId) {
        Optional<GenreMovie> optionalGenreMovie = genreMovieRepository.findById(genreMovieId);
        if (!optionalGenreMovie.isPresent()) { //존재하지 않는 경우
            throw new RuntimeException("존재하지 않습니다."); //임시예외
        }
        return optionalGenreMovie.get();
    }

    //삭제
    public void deleteGenreMovie(int genreMovieId) {
        GenreMovie genreMovie = readGenreMovie(genreMovieId);
        genreMovieRepository.delete(genreMovie);
    }
}
