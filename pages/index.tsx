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

        <link rel="icon" type="image/png" sizes="16x16" href="/icon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icon64.png" />

        <meta property="og:title" content="Get Strong Passwords in Seconds" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Never struggle to come up with a strong password again. Our password generator takes the guesswork out of security"
        />
        <meta
          property="og:url"
          content="https://www.passwords-generator.com/"
        />
        <meta property="og:site_name" content="Password generator" />
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
