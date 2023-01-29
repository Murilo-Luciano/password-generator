// 33 ... 126
// 48 ... 57 -> number
// 65 ... 90 -> uppercase alphabetic
// 97 ... 122 -> lowercase alphabetic
// 33 ... 47 -> symbol
// 58 ... 64 -> symbol
// 91 ... 96 -> symbol

import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

export interface PasswordOptionProps {
  hasNumber: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasSymbol: boolean;
}

const initialOptions = {
  hasNumber: true,
  hasUppercase: true,
  hasLowercase: true,
  hasSymbol: true,
};

function passwordGenerator(
  length: number,
  options: PasswordOptionProps = initialOptions
): string {
  const charCodePossibilities = handleOptions(range(33, 126), options);

  function charGenerator(): string {
    const char = String.fromCharCode(
      charCodePossibilities[getRandomOnRange(max, min)]!
    );

    return char === "\x00" ? charGenerator() : char;
  }

  const min = Math.ceil(0);
  const max = Math.floor(
    charCodePossibilities[charCodePossibilities.length - 1]!
  );
  const password = [];
  for (let i = 0; i < length; i++) {
    password.push(charGenerator());
  }
  return password.join("");
}

function handleOptions(possibility: number[], options: PasswordOptionProps) {
  const symbolsCharRanges = [
    range(33, 48),
    range(58, 65),
    range(91, 97),
    range(123, 126),
  ];

  if (!options.hasNumber) {
    possibility = removePossibilities(possibility, range(48, 57));
  }
  if (!options.hasLowercase) {
    possibility = removePossibilities(possibility, range(97, 122));
  }
  if (!options.hasUppercase) {
    possibility = removePossibilities(possibility, range(65, 90));
  }
  if (!options.hasSymbol) {
    symbolsCharRanges.forEach(
      (range) => (possibility = removePossibilities(possibility, range))
    );
  }

  return possibility;
}

function range(start: number, stop: number) {
  const result = Array.from({ length: stop - start + 1 });

  return result.map((x, i) => {
    return (x = start + i);
  });
}

function removePossibilities(possibility: number[], removeOptions: number[]) {
  return possibility.filter((element) => removeOptions.indexOf(element) == -1);
}

function getRandomOnRange(max: number, min: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    const { length, hasUppercase, hasLowercase, hasNumber, hasSymbol } =
      req.query;

    if (!length) {
      res.status(400).send(undefined);
      return;
    }

    const password = passwordGenerator(_.toInteger(length), {
      hasUppercase: hasUppercase === "true",
      hasLowercase: hasLowercase === "true",
      hasNumber: hasNumber === "true",
      hasSymbol: hasSymbol === "true",
    });

    res.status(200).json({ password });
  }
}

// http://localhost:3000/api/passwordGenerator?teste=true
// http://localhost:3000/api/passwordGenerator?length=10&hasUppercase=true&hasLowercase=true&hasNumber=true&hasSymbol=true
