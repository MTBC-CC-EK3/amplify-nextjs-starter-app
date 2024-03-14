"use client";
import React from "react";
import Image from "next/image";
import { RootLayout } from "layouts";
import {
  Users,
  FileText,
  FileStack,
  Handshake,
  CheckSquare2,
} from "lucide-react";
import {
  Container,
  Text,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  BoxButton,
  AspectRatio,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
  CardFooter,
  Button,
  CardTitle,
  CardHeader,
} from "component";

export const HomeScreen = React.memo(function HomeScreen() {
  return (
    <RootLayout>
      <Container paddingX="lg" paddingY="lg">
        <Grid columns={1} gap="lg" className="lg:grid-cols-2">
          <GridItem>
            <Flex
              justifyContent="center"
              alignItems="center"
              className="h-full"
            >
              <FlexItem>
                <Flex gap="md" flexDirection="column">
                  <FlexItem>
                    <Flex flexDirection="column">
                      <FlexItem>
                        <Text
                          inline
                          size="xxl"
                          weight="bold"
                          className="text-primaryGold"
                        >
                          TENNEX Helps Law Firms
                        </Text>
                      </FlexItem>
                      <FlexItem>
                        <Text
                          inline
                          size="xxl"
                          weight="bold"
                          className="text-primaryBlue"
                        >
                          Get Work Done
                        </Text>
                      </FlexItem>

                      <FlexItem>
                        <Text className="text-primaryBlue">
                          Thousands of law firms rely on our talented freelance
                          lawyers and part-time associates to bill more hours,
                          reduce overhead and increase profit.
                        </Text>
                      </FlexItem>
                    </Flex>
                  </FlexItem>
                  <FlexItem>
                    <Flex gap="sm" alignItems="center">
                      <FlexItem>
                        <BoxButton>START HIRING</BoxButton>
                      </FlexItem>
                      <FlexItem>
                        <BoxButton variant="outline">
                          TALK TO AN EXPERT
                        </BoxButton>
                      </FlexItem>
                    </Flex>
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          </GridItem>
          <GridItem>
            <Image
              src="/assets/backgrounds/bg-4.png"
              alt=""
              width={1000}
              height={560}
              className="w-full h-full object-cover"
            />
          </GridItem>
        </Grid>
      </Container>
      <Container maxWidth="2xl" paddingX="lg" paddingY="lg">
        <Flex flexDirection="column" gap="lg">
          <FlexItem>
            <Flex justifyContent="center">
              <FlexItem className="self-center">
                <Text size="xl" weight="bold" className="text-primaryBlue">
                  How To Use TENNEX
                </Text>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem>
            <Grid columns={3}>
              {[].map(({}, key) => (
                <Card key={key}></Card>
              ))}
            </Grid>
          </FlexItem>
        </Flex>
      </Container>
      <Container
        maxWidth="2xl"
        paddingX="lg"
        paddingY="lg"
        className="bg-gray-100"
      >
        <Flex flexDirection="column" gap="lg">
          <FlexItem>
            <Flex flexDirection="column">
              <FlexItem>
                <Flex justifyContent="center">
                  <FlexItem>
                    <Text weight="semibold" className="text-primarySkyblue">
                      HOW IT WORKS
                    </Text>
                  </FlexItem>
                </Flex>
              </FlexItem>
              <FlexItem>
                <Flex justifyContent="center">
                  <FlexItem>
                    <Text size="xl" weight="bold" className="text-primaryBlue">
                      Subscription Opportunities
                    </Text>
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem>
            <Flex justifyContent="between" className="flex-col lg:flex-row">
              {[
                {
                  label: "Apply For an Opportunity",
                  icon: <Users size={150} className="text-primaryGray" />,
                },
                {
                  label: "Get Work Done",
                  icon: <FileText size={150} className="text-primaryGray" />,
                },
                {
                  label: "Let Us Take Care Of The Admin",
                  icon: <FileStack size={150} className="text-primaryGray" />,
                },
                {
                  label: "Get Paid and Repeat",
                  icon: <Handshake size={150} className="text-primaryGray" />,
                },
              ].map(({ label, icon }, key) => (
                <FlexItem key={key}>
                  <Flex flexDirection="column" alignItems="center" gap="lg">
                    <FlexItem>{icon}</FlexItem>
                    <FlexItem>
                      <Text weight="medium">{label}</Text>
                    </FlexItem>
                  </Flex>
                </FlexItem>
              ))}
            </Flex>
          </FlexItem>
          <FlexItem>
            <Flex justifyContent="center">
              <FlexItem>
                <Text size="md" weight="light">
                  Work with your Dedicated TENNEX Expert to help you get started
                  on the ideal legal opportunity for you.
                </Text>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </Container>
      <Container maxWidth="2xl" paddingX="lg" paddingY="lg">
        <Flex flexDirection="column" gap="lg">
          <FlexItem>
            <Flex justifyContent="center">
              <FlexItem className="self-center">
                <Text size="xl" weight="bold" className="text-primaryBlue">
                  Benefits of the Subscription Program
                </Text>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem>
            <Flex
              gap="xxl"
              justifyContent="center"
              className="flex-col lg:flex-row"
            >
              <FlexItem>
                <Flex flexDirection="column" gap="sm">
                  {[
                    "Choose the type of work you want.",
                    "Get secured on time payments.",
                    "Build your legal career & reputation.",
                  ].map((label, key) => (
                    <FlexItem key={key}>
                      <Flex alignItems="center" gap="sm">
                        <FlexItem>
                          <CheckSquare2 className="text-primaryGray" />
                        </FlexItem>
                        <FlexItem>
                          <Text weight="light">{label}</Text>
                        </FlexItem>
                      </Flex>
                    </FlexItem>
                  ))}
                </Flex>
              </FlexItem>
              <FlexItem>
                <Flex flexDirection="column" gap="sm">
                  {[
                    "Apply for opportunities from anywhere.",
                    "Work with people you enjoy working with.",
                    "Expand your practice expertise.",
                  ].map((label, key) => (
                    <FlexItem key={key}>
                      <Flex alignItems="center" gap="sm">
                        <FlexItem>
                          <CheckSquare2 className="text-primaryGray" />
                        </FlexItem>
                        <FlexItem>
                          <Text weight="light">{label}</Text>
                        </FlexItem>
                      </Flex>
                    </FlexItem>
                  ))}
                </Flex>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </Container>
      <Container color="blue" maxWidth="2xl" paddingX="lg" paddingY="lg">
        <Flex flexDirection="column" gap="lg">
          <FlexItem>
            <Flex flexDirection="column">
              <FlexItem>
                <Flex justifyContent="center">
                  <FlexItem>
                    <Text
                      inline
                      weight="semibold"
                      className="text-primarySkyblue"
                    >
                      HOW TO PRICE OPPORTUNITIES
                    </Text>
                  </FlexItem>
                </Flex>
              </FlexItem>
              <FlexItem>
                <Flex justifyContent="center">
                  <FlexItem>
                    <Text
                      size="xl"
                      weight="semibold"
                      className="text-center text-white"
                    >
                      Features and Pricing
                    </Text>
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem>
            <Grid gap="xxl" columns={1} className="grid-cols-1 lg:grid-cols-3">
              <GridItem className="bg-white rounded-xl px-6 py-20">
                <Flex flexDirection="column" gap="xxl">
                  <FlexItem>
                    <Text
                      size="lg"
                      weight="bold"
                      className="text-center text-primaryGray"
                    >
                      Select Level Of Work
                    </Text>
                  </FlexItem>
                  <FlexItem>
                    <Flex gap="md" flexDirection="column">
                      {[
                        {
                          description: "Junior Level Work",
                          price: "$60 - $80",
                        },
                        {
                          description: "Mid Level Work",
                          price: "$80 - $100",
                        },
                        { description: "Senior Level Work", price: "$110+" },
                      ].map(({ description, price }, key) => (
                        <FlexItem key={key}>
                          <Flex
                            gap="xs"
                            flexDirection="column"
                            alignItems="center"
                          >
                            <FlexItem>
                              <Text
                                weight="medium"
                                className="text-primaryBlue"
                              >
                                {description}
                              </Text>
                            </FlexItem>
                            <FlexItem>
                              <Text
                                size="xl"
                                weight="semibold"
                                className="text-primaryBlue"
                              >
                                {price}
                              </Text>
                            </FlexItem>
                            <FlexItem>
                              <Text
                                weight="medium"
                                className="text-primaryBlue"
                              >
                                Per Hour
                              </Text>
                            </FlexItem>
                          </Flex>
                        </FlexItem>
                      ))}
                    </Flex>
                  </FlexItem>
                </Flex>
              </GridItem>
              <GridItem className="bg-white rounded-xl px-6 py-20">
                <Flex flexDirection="column" gap="xxl">
                  <FlexItem>
                    <Text
                      size="lg"
                      weight="bold"
                      className="text-center text-primaryGray"
                    >
                      Build Your Resume
                    </Text>
                  </FlexItem>
                  <FlexItem>
                    <Flex gap="lg" flexDirection="column">
                      {[
                        "Quickly gain experience on different practice areas.",
                        "Strictly legal work, spend less time searching.",
                        "No long term commitment, month to month with at least two-week cancelation.",
                      ].map((description, key) => (
                        <FlexItem key={key}>
                          <Text
                            weight="medium"
                            className="text-primaryBlue text-center"
                          >
                            {description}
                          </Text>
                        </FlexItem>
                      ))}
                    </Flex>
                  </FlexItem>
                </Flex>
              </GridItem>
              <GridItem className="bg-white rounded-xl px-6 py-20">
                <Flex flexDirection="column" gap="xxl">
                  <FlexItem>
                    <Text
                      size="lg"
                      weight="bold"
                      className="text-center text-primaryGray"
                    >
                      Billing & Time Keeping
                    </Text>
                  </FlexItem>
                  <FlexItem>
                    <Flex gap="lg" flexDirection="column">
                      {[
                        "Get paid based on hours you log.",
                        "Receive weekly direct payments for your subscription work.",
                        "You always have access to your time records for easier tracking",
                      ].map((description, key) => (
                        <FlexItem key={key}>
                          <Text
                            weight="medium"
                            className="text-primaryBlue text-center"
                          >
                            {description}
                          </Text>
                        </FlexItem>
                      ))}
                    </Flex>
                  </FlexItem>
                </Flex>
              </GridItem>
            </Grid>
          </FlexItem>
          <FlexItem>
            <Text
              size="lg"
              weight="semibold"
              className="text-center text-white"
            >
              Need More Guidance?
            </Text>
          </FlexItem>
          <FlexItem>
            <Flex justifyContent="center">
              <FlexItem>
                <BoxButton>TALK TO AN EXPERT</BoxButton>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </Container>
      <Container color="blue">
        <Grid columns={2} className="grid-cols-1 lg:grid-cols-2">
          <GridItem>
            <AspectRatio ratio={1 / 0.65}>
              <Image
                src="/assets/backgrounds/bg-1.jpg"
                alt=""
                width={1500}
                height={900}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </GridItem>
          <GridItem>
            <Flex
              justifyContent="center"
              alignItems="center"
              className="h-full p-12"
            >
              <FlexItem>
                <Flex gap="sm" flexDirection="column">
                  <FlexItem>
                    <Flex flexDirection="column">
                      {[
                        "Join The Best",
                        "Lawyer to Lawyer",
                        "Hiring Platform",
                      ].map((label, key) => (
                        <FlexItem key={key}>
                          <Text
                            size="xxl"
                            weight="semibold"
                            className="text-white [text-shadow:_0px_0px_10px_black]"
                          >
                            {label}
                          </Text>
                        </FlexItem>
                      ))}
                    </Flex>
                  </FlexItem>
                  <FlexItem>
                    <Flex gap="md">
                      <FlexItem>
                        <BoxButton>JOIN FOR FREE</BoxButton>
                      </FlexItem>
                      <FlexItem>
                        <BoxButton variant="outline" textVariant="white">
                          TALK TO AN EXPERT
                        </BoxButton>
                      </FlexItem>
                    </Flex>
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </RootLayout>
  );
});
