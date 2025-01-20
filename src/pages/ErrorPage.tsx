import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Hopla!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Diese Seite existiert nicht."
            : "Ein unerwarteter Fehler ist aufgetreten"}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
