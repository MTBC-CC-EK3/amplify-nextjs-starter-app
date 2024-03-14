"use client";
import React from "react";
import Link from "next/link";
import { useBooleanState } from "hooks";
import { Menu, LogIn } from "lucide-react";
import { NavigationPath } from "../../constants";
import { Container } from "../Container";
import { Text } from "../Text";
import { Flex } from "../Flex";
import { FlexItem } from "../FlexItem";
import { BoxButton } from "../BoxButton";

export const Header = React.memo(function Header() {
  const [isMenuVisible, showMenu, hideMenu, toggleMenu] =
    useBooleanState(false);

  return (
    <Container
      color="blue"
      maxWidth="2xl"
      paddingX="lg"
      paddingY="xs"
      className="shadow-xl sticky z-10 top-0 lg:static"
    >
      <Flex justifyContent="between" alignItems="center">
        <FlexItem>
          <Flex gap="sm" alignItems="center">
            <FlexItem>
              <Link href={NavigationPath.Home}>
                <Text size="xl" className="text-white tracking-[10px]">
                  Tennex
                </Text>
              </Link>
            </FlexItem>
          </Flex>
        </FlexItem>
        <FlexItem className="lg:hidden relative p-3">
          <Menu className="text-white" onClick={toggleMenu} />
          {isMenuVisible && (
            <Flex
              flexDirection="column"
              className="bg-primaryBlue shadow-popover-foreground shadow-md absolute right-0 rounded py-3 my-6"
            >
              <FlexItem>
                <Link
                  href={NavigationPath.RemoteAssociates}
                  className="text-white font-medium whitespace-nowrap inline-block p-3"
                  onClick={hideMenu}
                >
                  Looking For Work
                </Link>
              </FlexItem>
              <FlexItem>
                <Flex gap="xs" alignItems="center" className="p-3">
                  <FlexItem>
                    <LogIn className="text-white" />
                  </FlexItem>
                  <FlexItem>
                    <Link
                      href={NavigationPath.Login}
                      className="text-white font-medium inline-block"
                      onClick={hideMenu}
                    >
                      Login
                    </Link>
                  </FlexItem>
                </Flex>
              </FlexItem>
              <FlexItem>
                <Link href={NavigationPath.SignUp}>
                  <BoxButton className="whitespace-nowrap" onClick={hideMenu}>
                    JOIN TODAY
                  </BoxButton>
                </Link>
              </FlexItem>
            </Flex>
          )}
        </FlexItem>
        <FlexItem className="hidden lg:block">
          <Flex gap="xxl" alignItems="center">
            <FlexItem>
              <Link
                href={NavigationPath.RemoteAssociates}
                className="text-white font-medium"
              >
                Looking For Work
              </Link>
            </FlexItem>
            <FlexItem>
              <Flex gap="md" alignItems="center">
                <FlexItem>
                  <Flex gap="xs" alignItems="center">
                    <FlexItem>
                      <LogIn className="text-white" />
                    </FlexItem>
                    <FlexItem>
                      <Link
                        href={NavigationPath.Login}
                        className="text-white font-medium inline-block p-3"
                        onClick={hideMenu}
                      >
                        Login
                      </Link>
                    </FlexItem>
                  </Flex>
                </FlexItem>
                <FlexItem>
                  <Link href={NavigationPath.SignUp}>
                    <BoxButton>JOIN TODAY</BoxButton>
                  </Link>
                </FlexItem>
              </Flex>
            </FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
    </Container>
  );
});
