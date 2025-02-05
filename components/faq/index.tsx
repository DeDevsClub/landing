import { Divider } from "@heroui/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
// import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Text from "../text";

export const Faq = () => {
	return (
		<>
			<Flex
				style={{
					paddingTop: "$20",
					gap: "$18",
					paddingLeft: "$6",
					paddingRight: "$6",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Flex 
					style={{
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Text className="span" size="small" color="primary" weight="bold">
						FAQs
					</Text>
					<Text className="h2">Frequently Asked</Text>
					<Text
						className="span"
						size="small"
						color="secondary"
						weight="normal"
						style={{
							maxWidth: "700px",
							textAlign: "center",
						}}
					>
						Questions we are commonly asked by our community.
					</Text>
				</Flex>

				<Flex
					className="lg:px-64"
					style={{
						gap: "$10",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Flex style={{ gap: "$5", justifyContent: "center" }}>
						<BoxIcon />
						<Flex 
							style={{ 
								gap: "$3",
								display: "flex",
								flexDirection: "column",
							}}>
							<Text className="h3">What is DeDevs Academy?</Text>
							<Text
								className="span"
								size="small"
								color="secondary"
								weight="normal"
								style={{
									color: "$accents8",
								}}
							>
								A premium plan designed for developers who are interested in
								advancing their career and skillset via self-paced courses, live
								streams, and collaboration.
							</Text>
						</Flex>
					</Flex>
					<Flex style={{ gap: "$5", justifyContent: "center" }}>
						<BoxIcon />
						<Flex 
							style={{ 
								gap: "$3",
								display: "flex",
								flexDirection: "column",
							}}>
							<Text className="h3">Do I need to be an expert?</Text>
							<Text
								className="span"
								size="small"
								color="secondary"
								weight="normal"
								style={{
									color: "$accents8",
								}}
							>
								No, many of our members are experts in just one field or are
								simply enthusiasts looking to expand their knowledge. aliquet
							</Text>
						</Flex>
					</Flex>
					<Flex style={{ gap: "$5", justifyContent: "center" }}>
						<BoxIcon />
						<Flex 
							style={{ 
								gap: "$3",
								display: "flex",
								flexDirection: "column",
							}}>
							<Text className="h3">What makes DeDevs unique?</Text>
							<Text
								className="span"
								size="small"
								color="secondary"
								weight="normal"
								style={{
									color: "$accents8",
								}}
							>
								Our community specifically focuses on the intersection of
								blockchain and AI and we emphasize practical skill development.
							</Text>
						</Flex>
					</Flex>
					<Flex style={{ gap: "$5", justifyContent: "center" }}>
						<BoxIcon />
						<Flex 
							style={{ 
								gap: "$3",
								display: "flex",
								flexDirection: "column",
							}}>
							<Text className="h3">
								How can I collaborate with other members?
							</Text>
							<Text
								className="span"
								size="small"
								color="secondary"
								weight="normal"
								style={{
									color: "$accents8",
								}}
							>
								Members can participate in forums, join project teams, and
								participate in open source projects via our GitHub Org:
								DeDevsClub
							</Text>
						</Flex>
					</Flex>
					<Flex style={{ gap: "$5", justifyContent: "center" }}>
						<BoxIcon />
						<Flex 
							style={{ 
								gap: "$3",
								display: "flex",
								flexDirection: "column",
							}}>
							<Text className="h3">What do I get?</Text>
							<Text
								className="span"
								size="small"
								color="secondary"
								weight="normal"
								style={{
									color: "$accents8",
								}}
							>
								Technical workshops, networking opportunities, collaborative
								projects, learning resources, and curated industry updates.
							</Text>
						</Flex>
					</Flex>
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
