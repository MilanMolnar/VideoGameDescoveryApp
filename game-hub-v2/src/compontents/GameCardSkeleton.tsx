import { CardBody, Skeleton, SkeletonText, Card } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"250px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
