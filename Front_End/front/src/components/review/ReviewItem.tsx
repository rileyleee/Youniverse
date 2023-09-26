import { ReviewType } from "../../pages/recommend/ContentDetailPage";
import { deletReview } from "../../apis/FrontendApi";
import { DELETE } from "../../commons/constants/String";
import Btn from "../atoms/Btn";

interface ReviewItemProps {
  review: ReviewType;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  const handleReviewDel = async () => {
    try {
      await deletReview(review.reviewId);
      alert("리뷰삭제완");
    } catch (error) {
      console.log("리뷰삭제안됨여", error);
      alert("리뷰삭제실패");
    }
  };
  return (
    <div>
      <p>작성자: {review.memberSimpleResDto.nickname}</p>
      <p>별점: {review.reviewRate}</p>
      <p>리뷰: {review.reviewContent}</p>
      <p>ReviewId: {review.reviewId}</p>
      <Btn size="Medium" color="White" onClick={handleReviewDel}>
        {DELETE}
      </Btn>
    </div>
  );
};
export default ReviewItem;
