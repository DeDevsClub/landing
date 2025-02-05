import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Text from "../text";
import { Grid, GridContainer } from "../grid";

export const Plans = () => {
	return (
		<>
			<Flex
				style={{
					paddingTop: "$20",
					gap: "1rem",
					paddingLeft: "$6",
					paddingRight: "$6",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
				// wrap={'wrap'}
			>
				<Flex
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Text className="span" style={{ color: "$blue600" }}>
						Memberships
					</Text>
					<Text className="h2">Membership Plans</Text>
				</Flex>

				<Flex
					style={{
						gap: "2rem",
						width: "100%",
						overflow: "wrap",
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					<Card style={{ padding: "$6", maxWidth: "400px" }}>
						<CardHeader>
							<GridContainer style={{ paddingLeft: "$6" }}>
								<Grid sm={12}>
									<Text className="h4" style={{ lineHeight: "$xs" }}>
										DeDevs Club
									</Text>
								</Grid>
								<Grid sm={12}>
									<Text className="span" style={{ color: "$accents8" }}>
										Enhance your career prospects through industry insights,
										technical skill development, and community support in
										blockchain and AI engineering.
									</Text>
								</Grid>
							</GridContainer>
						</CardHeader>
						<CardBody className="py-4">
							<Text className="span h2" style={{ display: "contents" }}>
								$0{" "}
							</Text>
							<Text
								className="span"
								style={{ display: "contents", color: "$accents8" }}
							>
								/mo
							</Text>

							<a
								href="https://whop.com/dedevs"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="mt-7 mb-12">Get Started</Button>
							</a>
							<Divider />
							<Box as={"ul"}>
								<Flex
									// as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
									// align={"center"}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										Community Chat
									</Text>
								</Flex>
								<Flex
									// as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
									// align={"center"}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										Community Chat
									</Text>
								</Flex>
								<Flex
									// as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
									// align={"center"}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										Community Forum
									</Text>
								</Flex>
								<Flex
									// as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										Private Discord
									</Text>
								</Flex>
								<Flex
									// as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										Request Board
									</Text>
								</Flex>
							</Box>
						</CardBody>
					</Card>
					<Card style={{ padding: "$6", maxWidth: "400px" }}>
						<CardHeader>
							<GridContainer style={{ paddingLeft: "$6" }}>
								<Grid sm={12}>
									<Text className="h4" style={{ lineHeight: "$xs" }}>
										DeDevs Academy
									</Text>
								</Grid>
								<Grid sm={12}>
									<Text className="span" style={{ color: "$accents8" }}>
										Join to access courses that provide practical applications
										for building decentralized agents, LLMs, AI bots, websites,
										and more. Our courses are designed to grow your portfolio.
									</Text>
								</Grid>
							</GridContainer>
						</CardHeader>
						<CardBody className="py-4">
							<Text className="span h2" style={{ display: "contents" }}>
								$50{" "}
							</Text>
							<Text
								className="span"
								style={{ display: "contents", color: "$accents8" }}
							>
								/mo
							</Text>
							<a
								href="https://whop.com/dedevs-academy"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="mt-7 mb-12">Get Started</Button>
							</a>
							<Divider />
							<Box as={"ul"}>
								<Flex
									// as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										Exclusive Masterclasses
									</Text>
								</Flex>
								<Flex
									as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										20+ DevTools
									</Text>
								</Flex>
								<Flex
									as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										Coding Templates
									</Text>
								</Flex>
								<Flex
									as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										100+ Resources
									</Text>
								</Flex>
								<Flex
									as={"li"}
									style={{ paddingTop: "$2", gap: "$2", alignItems: "center" }}
								>
									<CheckIcon />
									<Text className="span" style={{ color: "$accents8" }}>
										+ Club Benefits
									</Text>
								</Flex>
							</Box>
						</CardBody>
					</Card>
				</Flex>
			</Flex>

			<Divider
				style={{
					position: "absolute",
					inset: "0p",
					left: "0",
					marginTop: "$5",
				}}
			/>
		</>
	);
};
