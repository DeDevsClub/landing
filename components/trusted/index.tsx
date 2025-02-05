import { Divider } from "@heroui/react";
import React from "react";
import { AcmeLogo } from "../navbar/logo";
import { Flex } from "../styles/flex";
import Text from "../text";
import { Grid, GridContainer } from "../grid";

export const Trusted = () => {
	return (
		<>
			<Flex className="pt-20 px-6 md:px-64 direction-column items-center">
				<Text className="h2" style={{ textAlign: "center" }}>
					Trusted by over 10,000+ customers
				</Text>
				<Text
					style={{
						color: "$accents8",
						maxWidth: "800px",
						textAlign: "center",
					}}
					weight="normal"
					size={"large"}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
				<GridContainer
					gap={6}
					alignItems="center"
					className="sm:w-full span whitespace-pre"
					justify="center"
					style={{
						width: "100%",
						// "@sm": {
						// 	width: "100%",
						// },
						// "&  span": {
						// 	whiteSpace: "pre",
						// },
					}}
				>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center", justifyContent: "center" }}>
							<AcmeLogo />
							<Text weight={"bold"} className="span" size={"large"}>
								Company 1
							</Text>
						</Flex>
					</Grid>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center" }}>
							<AcmeLogo />{" "}
							<Text weight={"bold"} className="span" size={"large"}>
								Company 2
							</Text>
						</Flex>
					</Grid>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center" }}>
							<AcmeLogo />{" "}
							<Text weight={"bold"} className="span" size={"large"}>
								Company 3
							</Text>
						</Flex>
					</Grid>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center" }}>
							<AcmeLogo />{" "}
							<Text weight={"bold"} className="span" size={"large"}>
								Company 4
							</Text>
						</Flex>
					</Grid>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center" }}>
							<AcmeLogo />{" "}
							<Text weight={"bold"} className="span" size={"large"}>
								Company 5
							</Text>
						</Flex>
					</Grid>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center" }}>
							<AcmeLogo />{" "}
							<Text weight={"bold"} className="span" size={"large"}>
								Company 6
							</Text>
						</Flex>
					</Grid>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center" }}>
							<AcmeLogo />{" "}
							<Text weight={"bold"} className="span" size={"large"}>
								Company 7
							</Text>
						</Flex>
					</Grid>
					<Grid sm={3} justify="center">
						<Flex style={{ alignItems: "center" }}>
							<AcmeLogo />{" "}
							<Text weight={"bold"} className="span" size={"large"}>
								Company 8
							</Text>
						</Flex>
					</Grid>
				</GridContainer>
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
