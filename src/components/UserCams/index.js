import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";

import { CamsContainer, StyledVideo } from "./usercams.styles";
import Video from "./VideoCard";

import { Button } from "antd";
import { AudioMutedOutlined, PhoneOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const UserCams = (props) => {
  const history = useHistory();
  const { roomId } = props;
  const [peers, setPeers] = useState([]);
  const [userCam, setUserCam] = useState({
    muted: true,
    autoPlay: false,
    playsInline: false,
  });
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    socketRef.current = io.connect("https://test-xdum.herokuapp.com/");
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit("join room", roomId);
        socketRef.current.on("all users", (users) => {
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socketRef.current.on("user joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });
          console.log(payload);
          setPeers((users) => [...users, peer]);
        });

        socketRef.current.on("receiving returned signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  return (
    <CamsContainer>
      <StyledVideo
        muted={userCam.muted}
        ref={userVideo}
        autoPlay
        playsInline={userCam.playsInline}
      />
      {peers.map((peer, index) => {
        return <Video key={index} peer={peer} />;
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            setUserCam((prevState) => ({
              ...prevState,
              muted: !prevState.muted,
            }));
          }}
          style={{ margin: "15px" }}
          type={userCam.muted ? "primary" : "dashed"}
          shape="circle"
          icon={<AudioMutedOutlined />}
        />
        <Button
          onClick={() => {
            history.push("/");
            window.location.reload();
          }}
          style={{ margin: "15px" }}
          type="primary"
          danger
          shape="circle"
          icon={<PhoneOutlined />}
        />
      </div>
    </CamsContainer>
  );
};

export default UserCams;
