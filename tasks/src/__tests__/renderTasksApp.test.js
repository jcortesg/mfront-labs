import React from "react";
import { render, screen } from "@testing-library/react";

import renderTasksApp from "../index";

describe("renderTasksApp", () => {
  it("renders the Tasks app with the heading 'Tasks'", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    renderTasksApp(container);

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Tasks");
  });
});
