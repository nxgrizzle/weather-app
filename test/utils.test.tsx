import dayjs from "dayjs";
import {
  celsiusToFahrenheit,
  convertTo12Hour,
  displayDateOrHour,
} from "../src/app/utils";
import { expect, test, describe } from "@jest/globals";

describe("utils", () => {
  describe("celsiusToFahrenheit", () => {
    it("should convert celsius to fahrenheit", () => {
      expect(celsiusToFahrenheit(0)).toBe(32);
      expect(celsiusToFahrenheit(100)).toBe(212);
    });
  });
  describe("convertTo12Hour", () => {
    it("should convert 24 hour time to 12 hour time", () => {
      expect(convertTo12Hour("00:00")).toBe("12 AM");
      expect(convertTo12Hour("12:00")).toBe("12 PM");
      expect(convertTo12Hour("13:00")).toBe("1 PM");
      expect(convertTo12Hour("23:00")).toBe("11 PM");
    });
  });
  describe("displayDateOrHour", () => {
    it("should return the date if the date is not today", () => {
      expect(displayDateOrHour(new Date("2021-01-01"), "2021-01-02")).toBe(
        "Saturday"
      );
    });
    it("should return the hour if the date is today", () => {
      expect(
        displayDateOrHour(dayjs("2021-01-01").toDate(), "2021-01-01")
      ).toBe("Friday 12:00 AM");
    });
  });
});
