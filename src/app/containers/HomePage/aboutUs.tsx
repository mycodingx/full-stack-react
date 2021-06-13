import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive/index";

import JeepImg from "../../../assets/images/jeep.png";

const AboutContainer = styled.div`
  ${tw`
  w-full
  flex
  flex-wrap
  items-center
  justify-center
  pt-4
  pb-4
  pr-7
  pl-7
  md:pl-0
  md:pr-0
  bg-white
  `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  ${tw``}

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
    `}
`;

const Title = styled.h1`
  ${tw`
  text-black
  text-2xl
  md:text-5xl
  font-extrabold
  md:font-black
  md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
  md:max-w-2xl
  text-sm
  md:text-base
  text-gray-500
  font-normal
  mt-4
  `}
`;

export function AboutUs() {
  return (
    <AboutContainer>
      <CarContainer>
        <img src={JeepImg} alt="img" />
      </CarContainer>
      <InfoContainer>
        <Title>Everything You Wanted to Know</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui
          mauris, mattis sed convallis sed, vulputate vel leo. Praesent commodo
          placerat nisl. Vivamus dignissim lorem sed nunc commodo, eget posuere
          libero sagittis. Pellentesque tempus viverra placerat. Sed vulputate
          massa tincidunt, laoreet ipsum eget, facilisis purus. Vivamus feugiat
          rhoncus turpis, in pretium leo varius vitae. Nunc vestibulum enim
          libero. Mauris ac ligula erat. Morbi blandit sollicitudin libero in
          mattis. Mauris quis justo varius, suscipit turpis sed, varius quam.
        </InfoText>
      </InfoContainer>
    </AboutContainer>
  );
}
