/**
 * @jest-environment jsdom
 */

import { screen, render, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import apolloClient from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";

test("Home renders inline with snapshot", async () => {
  const { container } = render(
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  );

  await waitFor(() => screen.getByText("TEST Sanchez"));
  expect(container).toMatchSnapshot();
});
