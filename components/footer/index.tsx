import { Divider } from "@heroui/react";
import React from "react";
import { AcmeLogo } from "../navbar/logo";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Text from "../text";

export const Footer = () => {
	return (
		<Flex className="py-20 px-6">
			<Box as={"footer"} style={{ width: "100%" }}>
				<Flex
					style={{
						// flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "$10",
						// "&  ul": {
						// 	margin: 0,
						// },
						// "@sm": {},
					}}
				>
					<Flex
						style={{
							gap: "$5",
							width: "250px",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<AcmeLogo />
						<Box as={"ul"} style={{ gap: "$5", listStyle: "none" }}>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									First Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Second Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Third Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Forth Link
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex
						style={{
							gap: "$5",
							width: "250px",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<Text className="h5">Resources</Text>
						<Box as={"ul"} style={{ gap: "$5", listStyle: "none" }}>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									First Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Second Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Third Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Forth Link
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex
						style={{
							gap: "$5",
							width: "250px",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<Text className="h5">Contact</Text>
						<Box as={"ul"} style={{ gap: "$5", listStyle: "none" }}>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									First Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Second Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Third Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Forth Link
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex
						style={{
							gap: "$5",
							width: "250px",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<Text className="h5">Legal</Text>
						<Box as={"ul"} style={{ gap: "$5", listStyle: "none" }}>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									First Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Second Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Third Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Forth Link
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex
						style={{
							gap: "$5",
							width: "250px",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<Text className="h5">Press</Text>
						<Box as={"ul"} style={{ gap: "$5", listStyle: "none" }}>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									First Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Second Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Third Link
								</Text>
							</Box>
							<Box as={"li"}>
								<Text className="span" style={{ color: "$accents8" }}>
									Forth Link
								</Text>
							</Box>
						</Box>
					</Flex>
				</Flex>
				<Box className="px-$10 md:px-$56">
					<Divider
						style={{
							marginTop: "$14",
							display: "flex",
							justifyContent: "center",
						}}
					/>
					<Flex
						className="md:justify-between"
						style={{
							paddingTop: "$8",
							gap: "$10",
							justifyContent: "center",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<Flex
							style={{
								gap: "$10",
								flexWrap: "wrap",
							}}
						>
							<AcmeLogo />
							<AcmeLogo />
							<AcmeLogo />
							<AcmeLogo />
						</Flex>
						<Flex
							style={{
								gap: "$6",
							}}
						>
							<Text className="span" style={{ color: "$accents8" }}>
								Terms of Service
							</Text>
							<Text className="span" style={{ color: "$accents8" }}>
								Privacy Policy
							</Text>
						</Flex>
						<Flex
							style={{
								gap: "$6",
							}}
						>
							<Text className="span" style={{ color: "$accents8" }}>
								© Copyright 2025 DeDevs.
							</Text>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};
