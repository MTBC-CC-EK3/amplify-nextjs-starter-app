"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Flex,
  FlexItem,
  Text,
  BoxButton,
} from "component";
import { NavigationPath, UserType } from "../../constants";

export const SignUpScreen = React.memo(function SignUpScreen() {
  const router = useRouter();

  const [selectedAccount, setSelectedAccount] = React.useState<string>("");

  const onLoginHereClick = React.useCallback(() => {
    router.push(NavigationPath.Login);
  }, [router]);

  const onJoinClick = React.useCallback(() => {
    router.push(`${NavigationPath.Registration}?type=${selectedAccount}`);
  }, [router, selectedAccount]);

  return (
    <Card>
      <CardHeader>
        <Flex gap="md" flexDirection="column">
          <FlexItem>
            <Text
              className="text-xl text-primaryGray"
              weight="bold"
            >{`Sign up for free. It's easy!`}</Text>
          </FlexItem>
          <FlexItem>
            <Text className="text-primaryGray">
              Select the type of
              <span style={{ fontWeight: "bold" }}> Attorney Account </span>
              you&apos;re creating:
            </Text>
          </FlexItem>
        </Flex>
      </CardHeader>
      <CardContent>
        <Flex flexDirection="column" gap="md" alignItems="center">
          <FlexItem>
            <BoxButton
              className={
                selectedAccount === UserType.HiringAttorney
                  ? "bg-primaryGold text-primaryGray font-bold"
                  : "bg-white text-primaryGray"
              }
              onClick={() => setSelectedAccount(UserType.HiringAttorney)}
              variant={"outline"}
            >
              I WANT TO HIRE
            </BoxButton>
          </FlexItem>
          <FlexItem>
            <Text className="text-primaryGold">{"-OR-"}</Text>
          </FlexItem>
          <FlexItem>
            <BoxButton
              className={
                selectedAccount === UserType.RemoteAssociate
                  ? "bg-primaryGold text-primaryGray font-bold"
                  : "bg-white text-primaryGray"
              }
              onClick={() => setSelectedAccount(UserType.RemoteAssociate)}
              variant={"outline"}
            >
              I WANT TO WORK
            </BoxButton>
          </FlexItem>
          <FlexItem>
            <BoxButton
              className="text-primaryGray font-bold"
              onClick={onJoinClick}
              disabled={!selectedAccount}
            >
              JOIN
            </BoxButton>
          </FlexItem>
          <FlexItem>
            <Flex alignItems="center">
              <FlexItem>
                <Text className="text-primaryGray">
                  Already have an account?
                </Text>
              </FlexItem>
              <FlexItem>
                <Button
                  className="text-base text-primaryGold font-bold"
                  variant={"link"}
                  onClick={onLoginHereClick}
                >
                  Login Here
                </Button>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </CardContent>
    </Card>
  );
});
