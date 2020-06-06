import React from "react";
import { View } from "react-native";
import { Feather,MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Values,
  Divider,
  Date,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        {/* <Title>Activitie</Title> */}
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você </Bold>
            pagou a<Bold> @matheuslucas</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <Username>Matheus Lucas</Username>
        </CardBody>
        <CardFooter>
          <Details>
            <Values>R$ 18,00</Values>
            <Divider />
              <Feather name="lock" color="#fff"/>
            <Date> há 2 anos</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  );
}
