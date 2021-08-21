import React, { useState } from "react";
import classNames from "classnames";

import { RestaurantContent } from "@data/fake.data";

import Image from "@General/Image";
import Flexbox from "@General/Flexbox";

const RestaurantCard: React.FC<RestaurantContent> = ({
  image,
  name,
  description,
  follower,
  isFollowing,
}) => {
  const [currentFollower, setCurrentFollower] = useState<number>(follower);
  const [currentFollowingStatus, setCurrentFollowingStatus] =
    useState<boolean>(isFollowing);

  const clickFollowHandler = () => {
    const nextFollower = currentFollowingStatus
      ? currentFollower - 1
      : currentFollower + 1;
    const nextFollowingStatus = !currentFollowingStatus;
    setCurrentFollower(nextFollower);
    setCurrentFollowingStatus(nextFollowingStatus);
  };

  return (
    <li
      className={classNames(
        "mb-4",
        "last:mb-0",
        "border-2",
        "border-solid",
        "rounded-xl",
        "border-gray-400",
        "overflow-hidden"
      )}
    >
      <Image
        src={image}
        className={classNames(
          "border-b-2",
          "border-solid",
          "border-gray-400",
          "h-40"
        )}
      />
      <div className={classNames("p-4")}>
        <h3
          className={classNames(
            "font-bold",
            "mb-2",
            "text-xl",
            "text-gray-800"
          )}
        >
          {name}
        </h3>
        <p className={classNames("text-gray-600", "mb-2")}>{description}</p>
        <Flexbox align={"center"}>
          <p className={classNames("text-sm", "text-gray-400")}>
            {currentFollower}人在追蹤
          </p>
          <FollowButton
            isFollowing={currentFollowingStatus}
            clickFollowHandler={clickFollowHandler}
          />
        </Flexbox>
      </div>
    </li>
  );
};

export default React.memo(RestaurantCard);

interface FollowButtonProps extends Pick<RestaurantContent, "isFollowing"> {
  clickFollowHandler: () => void;
}
const FollowButton: React.FC<FollowButtonProps> = ({
  isFollowing,
  clickFollowHandler,
}) => {
  return (
    <button
      onClick={clickFollowHandler}
      className={classNames(
        "w-20",
        "bg-red-700",
        "py-2",
        "text-white",
        "ml-auto",
        "rounded",
        { "bg-opacity-75": isFollowing }
      )}
    >
      {isFollowing ? "追蹤中" : "追蹤"}
    </button>
  );
};
