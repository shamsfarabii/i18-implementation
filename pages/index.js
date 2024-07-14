import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "@/components/Navbar";


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["loginSignup"]))
    },
  };
}

export default function Home() {

  return (
    <div>
      <Navbar />
    </div>
  );
}
