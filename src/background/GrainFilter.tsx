import filmNoise from "../assets/grain_noise.gif";

export default function GrainFilter() {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${filmNoise})`,
        backgroundSize: "cover",
        backgroundColor: "#000000CC",
        backgroundBlendMode: "color-burn",
        zIndex: -1,
        opacity: 0.5,
      }}
    />
  );
}
