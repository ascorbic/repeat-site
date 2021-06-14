import React from "react";
import { useRouter } from "next/router";
import RepeatHead from "../_components/global/head";
import RepeatHeader from "../_components/global/header";
import RepeatFooter from "../_components/global/footer";
import RepeatPolicy from "../_components/policy";

export default function HomePage() {
  const router = useRouter();
  const { policy } = router.query;
  return (
    <React.Fragment>
      <RepeatHead />
      <a className="absolute -top-6 left-0 z-50 focus:-top-0" href="#maincontent">
        Skip to main
      </a>
      <RepeatHeader />
      <RepeatPolicy policy={policy} />
      <RepeatFooter />
    </React.Fragment>
  );
}
