import { Button, Card, CardBody, Divider } from "@heroui/react";
import React from "react";
import { QuotesIcon } from "../icons/QuotesIcon";
import { Flex } from "../styles/flex";
import Text from "../text";

export const Testimonials = () => {
	return (
		<>
			<Flex
				className="px-6 py-20 sm:px-32 sm:justify-around sm:flex-row-reverse md:px-64 direction-column"
				style={{
					gap: "1rem",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column-reverse",
				}}
			>
				<Flex className="direction-column" style={{ gap: "1.5rem" }}>
					<Card>
						<CardBody>
							<Flex className="py-10 gap-5">
								<QuotesIcon />
								<Flex className="direction-column" style={{ gap: "0.5rem" }}>
									<Text
										// className="max-w-400px"
										className="span"
										style={{
											maxWidth: "400px",
											color: "$accents8",
										}}
									>
										{" "}
										An absolute game changer for anyone looking to advance their
										career in blockchain and Al engineering. The wealth of
										industry insights provided is unparalleled, keeping me
										up-to-date with the latest trends and breakthroughs.
									</Text>
									<Text
										className="span"
										weight={"bold"}
										style={{
											maxWidth: "400px",
											display: "contents",
											color: "$accents9",
										}}
									>
										0xFrenzy{" "}
									</Text>
									<Text
										className="span"
										style={{
											display: "contents",
											color: "$accents8",
										}}
									>
										- Developer (Student)
									</Text>
								</Flex>
							</Flex>
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
