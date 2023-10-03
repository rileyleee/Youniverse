import RecommendYouTube from "./RecommendYouTube";
import MovieItemList from "./MovieItemList";

const RecommendSection = () => {
  return (
    <>
      <RecommendYouTube />
      <MovieItemList
        showMoreButton={true}
        listType="유튜브 기반 추천 영화"
      />
    </>
  );
};

export default RecommendSection;
