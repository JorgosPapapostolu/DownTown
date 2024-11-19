import { useRef, useEffect } from "react";

export default function CreateVideo({ peer }) {
  const videoref = useRef();
  console.log("create video for: ", peer);

  useEffect(() => {
    const setFeed = () => {
      videoref.current.srcObject = peer.userVideoStream;
    };
    peer && setFeed();
  }, [peer]);

  return (
    <>
      <video ref={videoref} autoPlay />
    </>
  );
}
