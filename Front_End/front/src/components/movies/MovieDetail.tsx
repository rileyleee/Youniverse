import React, { useEffect, useState } from "react";
import { getMovie } from "../../apis/FrontendApi";
import Text from "../atoms/Text";
import styled from "styled-components";
import { FlexRowBetween } from "../../commons/style/SharedStyle";
import { StyledCardWrapper, StyledMoviePoster } from "./MovieItem";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie(4)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(movie);

  return (
    <StyledDetailWrapper>
      {/* 영화 포스터 */}
      <StyledCardWrapper $detail $cardWidth="30%">
        <StyledMoviePoster src="https://www.themoviedb.org/t/p/w440_and_h660_face/1YYL1OcgjPLjAGi6n0iZe1gdl9i.jpg" />
      </StyledCardWrapper>

      {/* 영화 상세 정보 */}
      <StyledMovieDetail>
        <div>
          <Text size="Large" color="Black" fontFamily="PyeongChang-Light">
            영화 제목
          </Text>
          <div>
            <div>별점 버튼</div>
            <div>좋아요 버튼</div>
          </div>
        </div>

        <div>키워드들 들어가는 공간</div>

        <div>영화 설명 들어가는 공간</div>

        <div>
          <div>감독</div>
          <div>감독 이름</div>
        </div>

        <div>
          <div>배우</div>
          <div>배우 이름</div>
        </div>

        <div>
          <div>OTT 행성</div>
          <div>OTT 행성</div>
          <div>OTT 행성</div>
        </div>
      </StyledMovieDetail>
    </StyledDetailWrapper>
  );
};

export default MovieDetail;

/** 영화 디테일 컴포넌트 전체 Wrap */
const StyledDetailWrapper = styled.div`
  ${FlexRowBetween}
  width: 90%;
  margin: 0 auto;
`;

/** 영화 디테일 컴포넌트 내 영화 정보 (포스터 제외) Wrap */
const StyledMovieDetail = styled.div`
  width: 55%;
`