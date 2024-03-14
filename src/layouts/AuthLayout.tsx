"use client";
import React from "react";
import { Grid, GridItem, Container, Header, Flex, FlexItem } from "component";

type AuthLayoutProps = React.PropsWithChildren;

export const AuthLayout = React.memo(function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <Container color="blue" className="min-h-screen">
      <Flex flexDirection="column">
        <FlexItem>
          <Header />
        </FlexItem>
        <FlexItem>
          <Flex justifyContent="center">
            <FlexItem>
              <Container
                paddingX="xs"
                paddingY="md"
                className="max-w-screen-sm"
              >
                {children}
              </Container>
            </FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
    </Container>
  );
});
