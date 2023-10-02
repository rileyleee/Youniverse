import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  UserDetailInfoState,
  UserJoinInfoState,
} from "./../../pages/store/State";
import styled from "styled-components";
import { FlexRowBetween } from "../../commons/style/SharedStyle";
import Btn from "../atoms/Btn";
import Text from "../atoms/Text";
import MovieItem from "./MovieItem";

import { getAllMovies } from "../../apis/FrontendApi";

type Props = {
  filterOTT?: string | null;
  listType?: string;
  movies?: MovieType[];
  showMoreButton?: boolean; // 더보기 버튼 더보기 페이지에는 안보여야 하니까
  useSlider?: boolean;
};

type OTTType = {
  ottId: number;
  ottImage: string;
  ottName: string;
  ottPrice: number;
  ottUrl: string;
};

type ActorType = {
  actorId: number;
  actorImage: string;
  actorName: string;
};

type DirectorType = {
  directorId: number;
  directorImage: string;
  directorName: string;
};

type GenreType = {
  genreId: number;
  genreName: string;
};

type KeywordType = {
  keywordId: number;
  keywordName: string;
  source: number;
};

export type MovieType = {
  movieId: number;
  title: string;
  movieImage: string;
  rate: number;
  runtime: number;
  ottResDtos: OTTType[];
  overView: string;
  heartMovieResDtos: {
    heartMovieId: number;
    memberSimpleResDto: {
      memberId: number;
      memberImage: string | null;
      nickname: string;
    };
  }[];
  hateMovieResDtos: {
    hateMovieId: number;
    memberSimpleResDto: {
      memberId: number;
      memberImage: string | null;
      nickname: string;
    };
  }[];
  actorResDtos: ActorType[];
  directorResDtos: DirectorType[];
  keywordResDtos: KeywordType[];
  genreResDtos: GenreType[];
};

const convertOTTNameToId = (
  ottName: string | null | undefined
): number | null => {
  if (!ottName) return null;
  const ottList = [
    { name: "넷플릭스", id: 8 },
    { name: "디즈니플러스", id: 337 },
    { name: "왓챠", id: 97 },
    { name: "애플티비", id: 2 },
    { name: "애플티비플러스", id: 350 },
    { name: "웨이브", id: 356 },
  ];

  const ott = ottList.find((o) => o.name === ottName);
  return ott ? ott.id : null;
};

const sliderSettings = {
  infinite: true,
  slidesToShow: 5, // 한 번에 보여줄 아이템 수
  swipeToSlide: true,
  autoplay: true, // 자동 캐러셀
  autoplaySpeed: 3000,
  arrows: true, // 좌,우 버튼
  pauseOnHover: true, // hover시 정지
  // 다른 설정들도 추가 가능
};

const MovieItemList: React.FC<Props> = ({
  filterOTT,
  listType,
  movies: propMovies = [],
  showMoreButton,
  useSlider,
}) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<MovieType[]>([]);

  const memberId = useRecoilValue(UserDetailInfoState).memberId;
  const memberAge = useRecoilValue(UserJoinInfoState).age;
  const memberGender = useRecoilValue(UserJoinInfoState).gender;

  const handleMoreClick = () => {
    navigate(`/recommend/more`);
  };

  useEffect(() => {
    let requestParams: any = { page: 0, size: 20 };

    switch (listType) {
      case "선호도기반 추천 영화":
        requestParams = {
          ...requestParams,
          "member-id": memberId,
          sort: 1,
        };
        break;
      case `${memberAge}세 ${memberGender} 추천 영화`:
        requestParams = {
          ...requestParams,
          "member-id": memberId,
          sort: 2,
        };
        break;
      case "유튜브 기반 추천 영화":
        requestParams = {
          ...requestParams,
          "member-id": memberId,
          sort: 3,
        };
        break;
      default:
        break;
    }
    getAllMovies(requestParams)
      .then((response) => {
        console.log("API Response:", response); // API 응답 전체를 출력합니다.

        // 유튜브 기반 추천일 때 응답을 따로 확인합니다.
        if (listType === "선호도기반 추천") {
          console.log("선호도기반 추천:", response.data.content);
        }

        const targetOttId = convertOTTNameToId(filterOTT);

        const filteredMovies = response.data.content.filter(
          (movie: MovieType) => {
            if (!targetOttId) return true;
            return movie.ottResDtos.some(
              (ott: OTTType) => ott.ottId === targetOttId
            );
          }
        );

        console.log("Filtered Movies:", filteredMovies);
        setMovies(filteredMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filterOTT, listType, memberId]);

  return (
    <>
      {filterOTT}
      <StyledListBtn>
        <Text size="Large" color="White" fontFamily="PyeongChang-Bold">
          {listType}
        </Text>
        {showMoreButton && (
          <StyledBtn
            size="Medium"
            color="Black"
            onClick={() => handleMoreClick()}
          >
            더보기
          </StyledBtn>
        )}
      </StyledListBtn>
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <MovieItem key={movie.movieId} movie={movie} />
        ))}
      </Slider>
    </>
  );
};

export default MovieItemList;

const StyledListBtn = styled.div`
  ${FlexRowBetween}
`;

const StyledBtn = styled(Btn)`
  width: 100px;
`;
