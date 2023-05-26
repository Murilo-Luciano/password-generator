import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import InitialButton from "../components/InitialButton";
import PasswordDisplayContainer from "../components/PasswordDisplayContainer";
import PasswordOptionsContainer from "../components/PasswordOptionsContainer";
import colors from "../styles/colors";
import articles from "../utils/articles";

const STRENGTH_LEVELS = {
  veryGood: {
    color: colors.veryGood,
    interjection: "Great job!",
  },
  strong: {
    color: colors.strong,
    interjection: "Well done!",
  },
  medium: {
    color: colors.medium,
    interjection: "Not bad!",
  },
  weak: {
    color: colors.weak,
    interjection: "Oops!",
  },
  veryWeak: {
    color: colors.veryWeak,
    interjection: "Uh oh!",
  },
};

export default function Staging() {
  const [initialState, setInitialState] = useState(false);
  const [strengthLevel, setStrengthLevel] = useState(STRENGTH_LEVELS.veryGood);

  return (
    <>
      <style jsx global>{`
        :root {
          background: #101b30;
        }
      `}</style>

      <GeneratorSection
        initialState={initialState}
        strengthLevel={strengthLevel}
      />

      <div style={{ height: 100 }} />

      <ArticlesSection articles={articles} />

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
        <a>
          Made by{" "}
          <a>
            <strong>Murilo</strong>
          </a>
        </a>
      </div>
    </>
  );
}

const GeneratorSection = (props: {
  initialState: boolean;
  strengthLevel: { color: string; interjection: string };
}) => {
  return (
    <div>
      <HeroSection />

      {props.initialState ? (
        <InitialButton />
      ) : (
        // @todo: use context
        <PasswordDisplayContainer strengthLevel={props.strengthLevel} />
      )}

      {/* @todo: use context */}
      <PasswordOptionsContainer
        initialState={props.initialState}
        strengthLevel={props.strengthLevel}
      />
    </div>
  );
};

const ArticlesSection = (props: {
  articles: { title: string; paragraphs: string[] }[];
}) => {
  /**@todo: receive articles and display */
  /**@todo: text styles */

  return (
    <div
      style={{
        backgroundColor: colors.whiteBackground,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontWeight: 600,
        fontSize: 24,
        color: colors.black,
      }}
    >
      {props.articles.map((article) => (
        <article style={{ marginBottom: 80 }}>
          <section style={{ maxWidth: 896 }}>
            <h1>{article.title}</h1>
            {article.paragraphs.map((paragraph) => (
              <p
                style={{
                  textAlign: "initial",
                  fontSize: 16,
                }}
              >
                {paragraph}
              </p>
            ))}
          </section>
        </article>
      ))}
    </div>
  );
};
