import { Divider } from "@heroui/react";
import React from "react";
import Text from "../text";
// import {CheckIcon} from '../icons/CheckIcon';
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Image from "next/image";
export const Hero = () => {
	// const showCheckmarks = false;
	// const title = "DeDevs";
	const subtitle =
		"Boost your career with insights, skill development, and support in emergent blockchain and AI technologies.";

	return (
		<>
			<Flex
				className="sm:flex-row sm:mt-20 justify-center items-center"
				style={{
					gap: "$3",
					paddingLeft: "$6",
					paddingRight: "$6",
					display: "flex",
					flexDirection: "column",
					alignContent: "center",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					// "@sm": {
					// 	flexDirection: "row",
					// 	mt: "$20",
					// },
				}}
			>
				<Box
					style={{
						paddingTop: "$13",

						display: "flex",
						flexDirection: "column",
						gap: "$5",
					}}
				>
					<Box
						style={{
							maxWidth: "600px",
						}}
					>
						<Text
							className="h1"
							style={{
								display: "inline",
							}}
						>
							Welcome{" "}
						</Text>
						{/* <Text
                     h1
                     style={{
                        display: 'inline',
                     }}
                  >
                     to{' '}
                  </Text> */}
						<Text
							className="h1"
							style={{
								display: "inline",
								color: "#FEAEE0",
							}}
						>
							{"DeDevs"}
						</Text>
					</Box>

					<Text
						style={{
							color: "$accents8",
							maxWidth: "400px",
							paddingBottom: "16px",
						}}
						size={"large"}
						className="span"
					>
						{subtitle}
					</Text>

					{/* <Flex
                  style={{
                     gap: '$8',
                     pt: '$4',
 width: '100%',
                  }}
                  wrap={'wrap'}
               >
                  
                  <Button>Join (Free)</Button>
               </Flex> */}
				</Box>
				<Box
					style={{
						width: "775px",
						objectFit: "contain",
						// "& img": {
						// 	width: "775px",
						// 	objectFit: "contain",
						// },
					}}
				>
					<Image src="mock.png" alt="mock" width={775} height={775} />
				</Box>
			</Flex>
			<Divider
				style={{
					position: "absolute",
					inset: "0p",
					left: "0",
					marginTop: "10px",
				}}
			/>
		</>
	);
};
