"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardContent,
  Input,
  Button,
  Flex,
  FlexItem,
  Text,
  Checkbox,
  Tabs,
  TabsList,
  TabsTrigger,
  BoxButton,
  Grid,
  GridItem,
  Container,
} from "component";
import { NavigationPath, UserType } from "../../constants";

export const LoginScreen = React.memo(function LoginScreen() {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = React.useState<string>(
    UserType.HiringAttorney
  );
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onCreateAnAccountClick = React.useCallback(() => {
    router.push(NavigationPath.SignUp);
  }, [router]);

  const loginButtonText = React.useMemo(
    () => `LOGIN AS A ${selectedTab.toUpperCase()}`,
    [selectedTab]
  );

  return (
    <Card>
      <CardHeader>
        <Flex gap="md" flexDirection="column">
          <FlexItem>
            <Text className="text-xl text-primaryGray" weight="bold">
              Welcome back!
            </Text>
          </FlexItem>
          <FlexItem>
            <Text className="text-primaryGray">
              Select the type of account you are using, then type in your email
              and password credentials to login.
            </Text>
          </FlexItem>
        </Flex>
      </CardHeader>
      <CardContent>
        <Flex flexDirection="column" gap="md">
          <FlexItem>
            <Tabs
              defaultValue={UserType.HiringAttorney}
              onValueChange={setSelectedTab}
            >
              <TabsList>
                <TabsTrigger value={UserType.HiringAttorney}>
                  {UserType.HiringAttorney.toUpperCase()}
                </TabsTrigger>
                <TabsTrigger value={UserType.RemoteAssociate}>
                  {UserType.RemoteAssociate.toUpperCase()}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </FlexItem>
          <FlexItem>
            <Flex flexDirection="column" gap="sm">
              <FlexItem>
                <Text className="text-primaryGray" weight="semibold">
                  Email
                </Text>
              </FlexItem>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Flex>
          </FlexItem>
          <FlexItem>
            <Flex flexDirection="column" gap="sm">
              <FlexItem>
                <Text className="text-primaryGray" weight="semibold">
                  Password
                </Text>
              </FlexItem>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Flex>
          </FlexItem>
          <FlexItem>
            <Grid gap="md" columns={2} alignItems="center">
              <GridItem>
                <Flex gap="xs">
                  <FlexItem>
                    <Checkbox id="remember-me" />
                  </FlexItem>
                  <FlexItem>
                    <Text className="text-primaryGray">Remember Me</Text>
                  </FlexItem>
                </Flex>
              </GridItem>
              <GridItem className="ml-auto">
                <Button
                  className="text-base text-primaryGold font-bold"
                  variant={"link"}
                >
                  Forgot your Password?
                </Button>
              </GridItem>
            </Grid>
          </FlexItem>
          <FlexItem>
            <Flex flexDirection="column" gap="md" alignItems="center">
              <FlexItem>
                <BoxButton className="text-primaryGray font-bold">
                  {loginButtonText}
                </BoxButton>
              </FlexItem>
              <FlexItem>
                <Flex gap="xs" alignItems="center">
                  <FlexItem>
                    <Text className="text-primaryGray">New to LAWCLERK?</Text>
                  </FlexItem>
                  <FlexItem>
                    <Button
                      className="text-base text-primaryGold font-bold"
                      variant={"link"}
                      onClick={onCreateAnAccountClick}
                    >
                      Create an Account
                    </Button>
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </CardContent>
    </Card>
  );
});
