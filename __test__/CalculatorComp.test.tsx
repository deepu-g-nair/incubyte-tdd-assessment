import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Calculator from "../components/Calculator";

it("renders all components", () => {
    const { getByText, getByTestId } = render(<Calculator />);

    expect(getByTestId("display")).toBeTruthy();
    expect(getByTestId("1")).toBeTruthy();
    expect(getByTestId(".")).toBeTruthy();
    expect(getByTestId("+")).toBeTruthy();
    expect(getByTestId("=")).toBeTruthy();
    expect(getByTestId("AC")).toBeTruthy();
});

it("updates display when numbers are pressed", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByTestId("1"));
    fireEvent.press(getByTestId("2"));
    expect(getByTestId("display").props.children).toBe("12");
});

it("performs addition", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByTestId("1"));
    fireEvent.press(getByTestId("+"));
    fireEvent.press(getByTestId("2"));
    fireEvent.press(getByTestId("="));
    expect(getByTestId("display").props.children).toBe("3");
});

it("clears display", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByTestId("5"));
    fireEvent.press(getByTestId("AC"));
    expect(getByTestId("display").props.children).toBe("");
});

it("delete last typed number/operator", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByTestId("9"));
    fireEvent.press(getByTestId("2"));
    fireEvent.press(getByTestId("-"));
    expect(getByTestId("display").props.children).toBe("9");
});