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

function calculatePasswordPossibilities(
  length: number,
  options: PasswordOptionProps = initialOptions
): number {
  const charCodePossibilities = handleOptions(range(33, 126), options);
  return Math.pow(charCodePossibilities.length, length);
}

enum UnitOfTime {
  Year = "year",
  Month = "month",
  Day = "day",
  Hour = "hour",
  Minute = "minute",
  Second = "second",
}

const getEstimates = (password: string, options: PasswordOptionProps) => {
  var bruteForceTriesPerSecond = 2800000000;

  var possibleCombinations = calculatePasswordPossibilities(
    password.length,
    options
  );
  var totalSecondsToBreak = possibleCombinations / bruteForceTriesPerSecond;

  const { value, unit } = getEstimatedTime(totalSecondsToBreak);
  let timeEstimativeText: string;
  const strengthEstimative = getStrength({ value, unit });

  if (!value)
    return { timeEstimative: "less than one second", strengthEstimative };

  if (unit == UnitOfTime.Year && value > 1_000_000_000_000)
    return { timeEstimative: "more than 1T years", strengthEstimative };

  return {
    timeEstimative: unitOfTimeString(unit, value),
    strengthEstimative: getStrength({ value, unit }),
  };
};

function getStrength(timeEstimated: { value: number; unit: UnitOfTime }) {
  const STRENGTHS = {
    veryWeak: (timeEstimated: { value: number; unit: UnitOfTime }) =>
      timeEstimated.value <= 0 && timeEstimated.unit == UnitOfTime.Second,
    weak: (timeEstimated: { value: number; unit: UnitOfTime }) =>
      timeEstimated.value > 0,
    medium: (timeEstimated: { value: number; unit: UnitOfTime }) =>
      timeEstimated.value > 1 && timeEstimated.unit == UnitOfTime.Year,
    strong: (timeEstimated: { value: number; unit: UnitOfTime }) =>
      timeEstimated.value > 5 && timeEstimated.unit == UnitOfTime.Year,
    veryStrong: (timeEstimated: { value: number; unit: UnitOfTime }) =>
      timeEstimated.value > 10 && timeEstimated.unit == UnitOfTime.Year,
  };

  return (
    _.findLastKey(STRENGTHS, (checker) => checker(timeEstimated)) || "medium"
  );
}

function getEstimatedTime(totalSecondsToBreak: number): {
  value: number;
  unit: UnitOfTime;
} {
  const conversionFactors: { [key: string]: number } = {
    year: 3600 * 24 * 365,
    month: 3600 * 24 * 30,
    day: 3600 * 24,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const unit in conversionFactors) {
    const estimatedValue = Math.floor(
      totalSecondsToBreak / conversionFactors[unit]
    );

    if (estimatedValue) {
      return { value: estimatedValue, unit: unit as UnitOfTime };
    }
  }

  return { value: 0, unit: UnitOfTime.Second };
}

function unitOfTimeString(unitOfTime: UnitOfTime, time: number) {
  let result = `${Intl.NumberFormat("en", { notation: "compact" }).format(
    time
  )} ${unitOfTime}`;

  if (time > 1) result = result.concat("s");

  return result;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    const { length, hasUppercase, hasLowercase, hasNumber, hasSymbol } =
      req.query;

    if (!length) {
      res.status(400).send(undefined);
      return;
    }

    const options = {
      hasUppercase: hasUppercase === "true",
      hasLowercase: hasLowercase === "true",
      hasNumber: hasNumber === "true",
      hasSymbol: hasSymbol === "true",
    };

    if (_.every(options, (e) => !e)) {
      res.status(400).send(undefined);
      return;
    }
    const password = passwordGenerator(_.toInteger(length), options);

    const estimates = getEstimates(password, options);

    res.status(200).json({
      password,
      estimative: estimates.timeEstimative,
      strength: estimates.strengthEstimative,
    });
  }
}
