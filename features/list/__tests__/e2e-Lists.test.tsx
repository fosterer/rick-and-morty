import { screen, render, waitFor } from "@testing-library/react";
import apolloClient from "@/lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { ListCharacters, ListEpisodes, ListLocations } from "@/features/list";

test("ListCharacters renders inline with snapshot", async () => {
  const { container } = render(
    <ApolloProvider client={apolloClient}>
      <ListCharacters />
    </ApolloProvider>
  );

  await waitFor(() => screen.getByText("TEST"));
  expect(container).toMatchSnapshot();
});

test("ListEpisodes renders inline with snapshot", async () => {
  const { container } = render(
    <ApolloProvider client={apolloClient}>
      <ListEpisodes />
    </ApolloProvider>
  );

  await waitFor(() => screen.getByText("TEST"));
  expect(container).toMatchSnapshot();
});

test("ListLocations renders inline with snapshot", async () => {
  const { container } = render(
    <ApolloProvider client={apolloClient}>
      <ListLocations />
    </ApolloProvider>
  );

  await waitFor(() => screen.getByText("TEST"));
  expect(container).toMatchSnapshot();
});
