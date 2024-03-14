"use client";

import React, { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  BoxButton,
  Button,
  Card,
  CardHeader,
  CardContent,
  Flex,
  FlexItem,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
  FormMessage,
  FormDescription,
} from "component";
import { RegistrationFormValues } from "./RegistrationScreen.types";
import { NavigationPath } from "../../constants";
import { useCreateProfile } from "mutations";

export const RegistrationScreen = React.memo(function RegistrationScreen() {
  const router = useRouter();

  const { mutateAsync: createProfile } = useCreateProfile();

  const searchParams = useSearchParams();
  const userType = searchParams.get("type") || "";

  const registrationFormSchema = z
    .object({
      firstName: z.string().min(1, {
        message: "First Name is Required.",
      }),
      lastName: z.string().min(1, {
        message: "Last Name is Required.",
      }),
      phone: z.string().min(1, {
        message: "Phone Number is Required.",
      }),
      email: z.string().min(1, {
        message: "Email is Required.",
      }),
      linkedInProfile: z.string().optional(),
      picture: z.instanceof(FileList).optional(),
      resume: z
        .instanceof(FileList)
        .refine((file) => file?.length === 1, "Resume is required."),
      password: z.string().min(8, {
        message: "Password must have 8 characters.",
      }),
    })
    .refine(
      (data) => {
        const { picture, linkedInProfile } = data;
        return picture?.length !== 1 && !linkedInProfile ? false : true;
      },
      {
        message: "Either Picture or LinkedIn Profile is required.",
        path: ["picture"],
      }
    );

  const registrationForm = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      linkedInProfile: "",
    },
  });

  const pictureFileRef = registrationForm.register("picture");
  const resumeFileRef = registrationForm.register("resume");

  const onNextClick = React.useCallback(
    async (registrationFormValues: RegistrationFormValues) => {
      const {
        firstName,
        lastName,
        phone,
        email,
        password,
        picture,
        linkedInProfile,
        resume,
      } = registrationFormValues;

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("picture", picture?.[0]);
      formData.append("linkedInProfile", linkedInProfile);
      formData.append("resume", resume?.[0]);
      formData.append("userType", userType);

      try {
        const createdProfile = await createProfile(formData);

        if (createdProfile) {
          router.push(NavigationPath.Login);
        }
      } catch (error) {
        console.error("Error creating profile:", error);
      }
    },
    [createProfile, router, userType]
  );

  const onBackClick = React.useCallback(() => {
    router.push(NavigationPath.SignUp);
  }, [router]);

  const onPreview = React.useCallback((fieldValue: string | FileList) => {
    if (!fieldValue) return;
    if (typeof fieldValue === "string") {
      window.open(fieldValue, "_blank");
    } else if (typeof fieldValue === "object") {
      const file = fieldValue?.[0];
      const url = URL.createObjectURL(file);
      window.open(url, "_blank");
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <Text className="text-xl text-primaryGray" weight="bold">
          {`Create Your ${userType} Account`}
        </Text>
      </CardHeader>
      <CardContent>
        <Flex flexDirection="column" gap="md">
          <FlexItem>
            <Form {...registrationForm}>
              <Flex flexDirection="column" gap="md">
                <FlexItem>
                  <Grid gap="md" columns={2}>
                    <GridItem>
                      <FormField
                        control={registrationForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <Text className="text-primaryGray font-bold">
                                First Name
                              </Text>
                            </FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </GridItem>
                    <GridItem>
                      <FormField
                        control={registrationForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <Text className="text-primaryGray font-bold">
                                Last Name
                              </Text>
                            </FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </GridItem>
                  </Grid>
                </FlexItem>
                <FlexItem>
                  <FormField
                    control={registrationForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <Text className="text-primaryGray font-bold">
                            Phone Number
                          </Text>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FlexItem>
                <FlexItem>
                  <FormField
                    control={registrationForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <Text className="text-primaryGray font-bold">
                            Email
                          </Text>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FlexItem>
                <FlexItem>
                  <Grid
                    gap="md"
                    columns={3}
                    justifyItems="center"
                    alignItems="center"
                  >
                    <GridItem>
                      <FormField
                        control={registrationForm.control}
                        name="picture"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <Text className="text-primaryGray font-bold">
                                Picture
                              </Text>
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="picture"
                                type="file"
                                accept="image/*"
                                {...pictureFileRef}
                              />
                            </FormControl>
                            <FormDescription>
                              <Button
                                variant={"secondary"}
                                onClick={() => onPreview(field.value)}
                              >
                                Preview
                              </Button>
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </GridItem>
                    <GridItem>
                      <Text className="text-primaryGray">Or</Text>
                    </GridItem>
                    <GridItem>
                      <FormField
                        control={registrationForm.control}
                        name="linkedInProfile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <Text className="text-primaryGray font-bold">
                                LinkedIn Profile
                              </Text>
                            </FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormDescription>
                              <Button
                                variant={"secondary"}
                                onClick={() => onPreview(field.value)}
                              >
                                Preview
                              </Button>
                            </FormDescription>
                          </FormItem>
                        )}
                      />
                    </GridItem>
                  </Grid>
                </FlexItem>
                <FlexItem>
                  <FormField
                    control={registrationForm.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <Text className="text-primaryGray font-bold">
                            Resume
                          </Text>
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="resume"
                            type="file"
                            accept=".pdf"
                            {...resumeFileRef}
                          />
                        </FormControl>
                        <FormDescription>
                          <Button
                            variant={"secondary"}
                            onClick={() => onPreview(field.value)}
                          >
                            Preview
                          </Button>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FlexItem>
                <FlexItem>
                  <FormField
                    control={registrationForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <Text className="text-primaryGray font-bold">
                            Password
                          </Text>
                        </FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FlexItem>
                <FlexItem>
                  <Text className="text-primaryGray">
                    By initialing below, you agree to LAWCLERK’s{" "}
                    <Text className="font-bold text-primaryBlue hover:cursor-pointer">
                      Terms of Service.
                    </Text>
                  </Text>
                </FlexItem>
              </Flex>
            </Form>
          </FlexItem>
          <FlexItem>
            <Grid alignItems="center" gap="md" columns={2}>
              <GridItem>
                <Button
                  onClick={onBackClick}
                  className="text-xl text-primaryGray w-full"
                  variant="link"
                >
                  Back
                </Button>
              </GridItem>
              <GridItem>
                <BoxButton
                  className="text-primaryGray font-bold w-full"
                  onClick={registrationForm.handleSubmit(onNextClick)}
                >
                  SIGN UP
                </BoxButton>
              </GridItem>
            </Grid>
          </FlexItem>
        </Flex>
      </CardContent>
    </Card>
  );
});
