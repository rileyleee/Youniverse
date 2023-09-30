package com.ssafy.youniverse.entity;

import com.ssafy.youniverse.util.Auditable;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Movie extends Auditable {

    @Id
    private Integer movieId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 2, nullable = false)
    private String language;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String overView;

    @Column(nullable = false)
    private Float rate;

    @Column(nullable = false)
    private Integer runtime;

    @Column(length = 255, nullable = false)
    private String movieImage;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<HeartMovie> heartMovies = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<HateMovie> hateMovies = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BestMovie> bestMovies = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OttMovie> ottMovies = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<KeywordMovie> keywordMovies = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ActorMovie> actorMovies = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GenreMovie> genreMovies = new ArrayList<>();

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DirectorMovie> directorMovies = new ArrayList<>();

}
