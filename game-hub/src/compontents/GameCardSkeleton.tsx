import { CardBody, Skeleton, SkeletonText, Card } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} width={"300px"} overflow={"hidden"}>
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
