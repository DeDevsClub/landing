import { Divider } from "@heroui/react";
import Text from "../text";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
// import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features1 = () => {
	return (
		<>
			<Flex
				// className="flex flex-col gap-4 pt-20 justify-center items-center pl-6"
				className="sm:justify-around sm:px-32 sm:flex-row md:px-64"
				style={{
					flexDirection: "column",
					gap: "1rem",
					paddingTop: "$20",
					justifyContent: "center",
					alignItems: "center",
					paddingLeft: "$6",
					// "@sm": {
					// 	justifyContent: "space-around",
					// 	px: "$32",
					// 	flexDirection: "row",
					// },
					// "@md": {
					// 	px: "$64",
					// },
				}}
			>
				<Flex style={{ flexDirection: "column" }}>
					<Text className="span" color="primary">
						Awesome Feature
					</Text>
					<Text className="h3">Your title here</Text>
					<Text
						className="span"
						style={{
							maxWidth: "400px",
							color: "$accents8",
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl, nec
						tincidunt nisl lorem eu nunc. Sed euismod, nisl ut aliquam lacinia,
					</Text>

					<Flex
						style={{
							paddingTop: "$10",
							gap: "$5",
						}}
					>
						<BoxIcon />
						<Flex style={{ flexDirection: "column" }}>
							<Text className="h4" weight={"normal"}>
								Your title here
							</Text>
							<Text
								className="span"
								style={{
									maxWidth: "400px",
									color: "$accents8",
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
							</Text>
						</Flex>
					</Flex>
					<Flex
						style={{
							paddingTop: "$10",
							gap: "$5",
						}}
					>
						<BoxIcon />
						<Flex style={{ flexDirection: "column" }}>
							<Text className="h4" weight={"normal"}>
								Your title here
							</Text>
							<Text
								className="span"
								style={{
									maxWidth: "400px",
									color: "$accents8",
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
							</Text>
						</Flex>
					</Flex>
					<Flex
						style={{
							paddingTop: "$10",
							gap: "$5",
						}}
					>
						<BoxIcon />
						<Flex style={{ flexDirection: "column" }}>
							<Text className="h4" weight={"normal"}>
								Your title here
							</Text>
							<Text
								className="span"
								style={{
									maxWidth: "400px",
									color: "$accents8",
								}}
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex style={{ alignItems: "center" }}>
					<FeatureIcon />
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
