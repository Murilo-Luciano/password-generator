import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import colors from "../styles/colors";
import articles from "../utils/articles";
import Head from "next/head";
import GeneratorSection from "../components/GeneratorSection";

export default function Staging() {
  return (
    <>
      <Head>
        <title>Passwords Generator</title>
        <meta name="description" content="Password generator" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <HeroSection />

      <GeneratorSection />

      <div style={{ height: 140 }} />

      <ArticlesSection articles={articles} />

      <Footer />
    </>
  );
}

const ArticlesSection = (props: {
  articles: { title: string; paragraphs: string[] }[];
}) => {
  return (
    <div className="articles-section">
      {props.articles.map((article, index) => (
        <article key={index}>
          <section>
            <h1>{article.title}</h1>
            {article.paragraphs.map((paragraph) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        </article>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.yellow,
        color: colors.black,
        fontSize: 18,
      }}
    >
      <p>
        Made by{" "}
        <a
          href="https://github.com/Murilo-Luciano"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <strong>Murilo</strong>
        </a>
      </p>
    </div>
  );
};
