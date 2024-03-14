"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Container, Text, Flex, FlexItem, Grid, GridItem } from "component";

export const Footer = React.memo(function Footer() {
  return (
    <React.Fragment>
      <Container maxWidth="2xl" paddingX="sm" paddingY="sm">
        <Grid columns={8} gap="xxl" className="grid-cols-1 lg:grid-cols-8">
          <GridItem columnSpan={6}>
            <Grid columns={4} gap="md" className="grid-cols-1 lg:grid-cols-4">
              {[
                {
                  title: "MARKETPLACE",
                  links: [
                    { label: "FAQ - Hiring Attorneys", href: "#" },
                    { label: "FAQ - Freelance Attorneys", href: "#" },
                    { label: "FAQ - Hourly Associates", href: "#" },
                  ],
                },
                {
                  title: "USEFUL LINKS",
                  links: [
                    {
                      label: "Ultimate Guide To Legal Outsourcing",
                      href: "#",
                    },
                    { label: "Strategic Hiring Worksheet", href: "#" },
                    { label: "Business of Law & Ethics", href: "#" },
                    { label: "UPL Ethics Whitepaper", href: "#" },
                    { label: "Tutorials", href: "#" },
                  ],
                },
                {
                  title: "SUPPORT",
                  links: [
                    { label: "Contact Us / Need Help", href: "#" },
                    { label: "Terms and Conditions", href: "#" },
                    { label: "Security", href: "#" },
                    { label: "Legal Research Resources", href: "#" },
                  ],
                },
                {
                  title: "COMPANY",
                  links: [{ label: "Blog", href: "#" }],
                },
              ].map(({ title, links }, key) => (
                <GridItem key={key}>
                  <Flex gap="md" flexDirection="column">
                    <FlexItem>
                      <Text size="sm" weight="semibold">
                        {title}
                      </Text>
                    </FlexItem>
                    <FlexItem>
                      <Flex gap="sm" flexDirection="column">
                        {links.map(({ label, href }, key) => (
                          <React.Fragment key={key}>
                            <FlexItem>
                              <Link href={href}>
                                <Text size="sm" weight="light">
                                  {label}
                                </Text>
                              </Link>
                            </FlexItem>
                            <FlexItem className="border-b border-b-primaryGray" />
                          </React.Fragment>
                        ))}
                      </Flex>
                    </FlexItem>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
          <GridItem columnSpan={2}>
            <Flex gap="md" flexDirection="column">
              <FlexItem>
                <Text size="sm" weight="semibold">
                  ABOUT TENNEX
                </Text>
              </FlexItem>
              <FlexItem>
                <Flex gap="xs" flexDirection="column">
                  <FlexItem>
                    <Text size="sm" weight="light">
                      TENNEX is an online marketplace.
                    </Text>
                  </FlexItem>
                  <FlexItem>
                    <Text size="sm" weight="light">
                      TENNEX is not a law firm and does not provide legal
                      services.
                    </Text>
                  </FlexItem>
                </Flex>
              </FlexItem>
              <FlexItem>
                <Flex gap="md" alignItems="center">
                  {[
                    { Icon: Facebook, href: "#" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Linkedin, href: "#" },
                    { Icon: Instagram, href: "#" },
                    { Icon: Youtube, href: "#" },
                  ].map(({ Icon, href }, key) => (
                    <FlexItem key={key}>
                      <Link href={href}>
                        <Icon className="text-primaryGray" />
                      </Link>
                    </FlexItem>
                  ))}
                </Flex>
              </FlexItem>
              <FlexItem>
                <Flex gap="xs" flexDirection="column">
                  <FlexItem>
                    <Image
                      src="/assets/images/image-1.png"
                      alt=""
                      width={98}
                      height={30}
                    />
                  </FlexItem>
                  <FlexItem>
                    <Image
                      src="/assets/images/image-2.png"
                      alt=""
                      width={98}
                      height={30}
                    />
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
      <Container color="blue" paddingY="sm">
        <Flex justifyContent="center">
          <FlexItem>
            <Text weight="light" className="text-white">
              Copyright 2024 TENNEX
            </Text>
          </FlexItem>
        </Flex>
      </Container>
    </React.Fragment>
  );
});
