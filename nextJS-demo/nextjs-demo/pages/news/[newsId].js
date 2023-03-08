import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  return <h1>{newsId} 페이지</h1>;
}
export default DetailPage;
