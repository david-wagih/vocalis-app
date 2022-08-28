import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import DropZone from "../components/DropZone";
import styles from "../styles/Home.module.css";
import react from "React";

export default function solution() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DropZone />
      </div>
    </div>
  );
}
