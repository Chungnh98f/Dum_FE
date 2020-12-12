import React from "react";
import { Card } from "antd";

import { CardContainer } from "./card.styles";

function VideoCard(props) {
  const { username } = props;
  return (
    <CardContainer>
      <Card
        className="cam-card"
        hoverable
        cover={
          <img
            className="image"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <h3>{username}</h3>
      </Card>
    </CardContainer>
  );
}

export default VideoCard;
