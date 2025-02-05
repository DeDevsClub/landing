import { Divider } from "@heroui/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Text from "../text";

export const Statistics = () => {
	return (
		<>
			<Box
				className="px-6"
				style={{
					paddingTop: "$20",
					paddingBottom: "$16",
				}}
			>
				<Flex style={{ flexDirection: "column", alignItems: "center" }}>
					<Text
						className="h3"
						style={{
							textAlign: "center",
						}}
					>
						Over 0 courses created.
					</Text>
					<Text
						className="span"
						style={{
							maxWidth: "800px",
							textAlign: "center",
						}}
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
						provident omnis deleniti temporibus pariatur corporis aperiam
					</Text>
				</Flex>
				<Flex
					// className="flex flex-wrap justify-center gap-16 pt-16"
					className="sm:gap-10rem"
					style={{
						flexWrap: "wrap",
						justifyContent: "center",
						flexDirection: "row",
						gap: "4rem",
						paddingTop: "$16",
					}}
				>
					<Flex style={{ flexDirection: "column" }}>
						<Text className="h2" style={{ color: "$blue600" }}>
							10+
						</Text>
						<Text
							className="span"
							style={{ textAlign: "center" }}
							weight={"normal"}
						>
							Members
						</Text>
					</Flex>
					<Flex style={{ flexDirection: "column" }}>
						<Text className="h2" style={{ color: "$blue600" }}>
							10+
						</Text>
						<Text
							className="span"
							style={{ textAlign: "center" }}
							weight={"normal"}
						>
							Products
						</Text>
					</Flex>
					<Flex style={{ flexDirection: "column" }}>
						<Text className="h2" style={{ color: "$blue600" }}>
							10+
						</Text>
						<Text
							className="span"
							style={{ textAlign: "center" }}
							weight={"normal"}
						>
							Tools
						</Text>
					</Flex>
					<Flex style={{ flexDirection: "column" }}>
						<Text className="h2" style={{ color: "$blue600" }}>
							10+
						</Text>
						<Text
							className="span"
							style={{ textAlign: "center" }}
							weight={"normal"}
						>
							Resources
						</Text>
					</Flex>
				</Flex>
			</Box>

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
