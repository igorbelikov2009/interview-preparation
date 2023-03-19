import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { linksReferenceBooks } from "../data/referenceBooksData";

const ReferenceBooks = () => {
  return (
    <div>
      <PageLink links={linksReferenceBooks} title="Ссылки на справочники, директории" />
    </div>
  );
};

export default ReferenceBooks;
