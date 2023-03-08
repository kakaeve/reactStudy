//domain.com/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>뉴스페이지</h1>
      <ul>
        <li>
          <Link href="/news/first-name">첫번째 이름!</Link>
        </li>
        <li>
          <Link href="/news/second-name">두번째 이름!</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
