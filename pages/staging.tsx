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

      <Footer />
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
      {/* @todo: concluir css do PasswordOptionsContainer*/}
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
        <a>
          <strong>Murilo</strong>
        </a>
      </p>
    </div>
  );
};
