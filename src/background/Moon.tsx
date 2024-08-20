import moonTexture from "../assets/moon_texture.jpg";
import flowersTexture from "../assets/flowers_texture.jpg";
import microscopeTexture from "../assets/microscope_texture.jpg";
import { useRecoilValue } from "recoil";
import { currentPageAtom } from "../state";

export default function Moon() {
  const currentPage = useRecoilValue(currentPageAtom);

  return (
    <svg
      style={{
        position: "absolute",
        margin: "auto",
        transition: "right 2s, left 2s, height 2s, width 2s, bottom 2s",
        zIndex: -2,
        ...(currentPage === ""
          ? {
              height: "90%",
              width: "90%",
              left: 0,
              right: 0,
              bottom: 0,
            }
          : currentPage === "sources"
          ? {
              height: "180%",
              width: "180%",
              left: 0,
              right: "-100%",
              bottom: "-40%",
            }
          : currentPage === "live"
          ? {
              height: "180%",
              width: "180%",
              left: "-100%",
              right: 0,
              bottom: "-40%",
            }
          : {}),
      }}
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern
          id="moon-texture"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <image href={moonTexture} x="-50" y="-50" width="200" height="200" />
          <rect x="-50" y="-50" width="200" height="200" fill="#E7ECB288" />
        </pattern>
        <pattern
          id="flowers-texture"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <image
            href={flowersTexture}
            x="-50"
            y="-50"
            width="200"
            height="200"
          />
          <rect x="-50" y="-50" width="200" height="200" fill="#B5564155" />
        </pattern>
        <pattern
          id="microscope-texture"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <image
            href={microscopeTexture}
            x="15"
            y="15"
            width="70"
            height="70"
          />
          <rect x="-50" y="-50" width="200" height="200" fill="#CCCCCC44" />
        </pattern>
      </defs>
      <mask id="surface-mask">
        <polygon
          stroke="white"
          strokeWidth="5"
          fill="transparent"
          points="89.50753362380551,
                56.25737860160923 85.64026096753472,
                68.15961998958187 78.2842712474619,
                78.2842712474619 68.15961998958187,
                85.64026096753472 56.25737860160924,
                89.50753362380551 43.74262139839077,
                89.50753362380551 31.840380010418134,
                85.64026096753472 21.7157287525381,
                78.2842712474619 14.359739032465285,
                68.15961998958187 10.492466376194493,
                56.25737860160924 10.492466376194486,
                43.74262139839077 14.359739032465292,
                31.840380010418116 21.71572875253809,
                21.7157287525381 31.840380010418123,
                14.359739032465285 43.74262139839076,
                10.492466376194493 56.257378601609226,
                10.492466376194486 68.15961998958187,
                14.359739032465285 78.2842712474619,
                21.71572875253809 85.64026096753472,
                31.840380010418123 89.5075336238055,
                43.74262139839075"
        >
          {" "}
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="60s"
            repeatCount="indefinite"
          />
        </polygon>
      </mask>
      <mask id="inner-mask">
        <polygon
          stroke="white"
          strokeWidth="4"
          fill="black"
          points="78.53169548885461,
              59.27050983124842 67.6335575687742,
              74.27050983124843 50,80 32.366442431225806,
              74.27050983124843 21.468304511145394,
              59.270509831248425 21.46830451114539,
              40.72949016875158 32.366442431225806,
              25.72949016875158 49.99999999999999,
              20 67.6335575687742,
              25.729490168751575 78.53169548885461,
              40.72949016875157"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="120s"
            repeatCount="indefinite"
          />
        </polygon>
      </mask>
      <mask id="core-mask">
        <polygon
          stroke="white"
          strokeWidth="3"
          fill="black"
          points="68.47759065022574,
              57.6536686473018 57.6536686473018,
              68.47759065022574 42.34633135269821,
              68.47759065022574 31.522409349774264,
              57.6536686473018 31.522409349774264,
              42.34633135269821 42.34633135269819,
              31.52240934977427 57.6536686473018,
              31.522409349774268 68.47759065022572,
              42.34633135269819"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="180s"
            repeatCount="indefinite"
          />
        </polygon>
      </mask>

      <circle
        cx="50"
        cy="50"
        r="50"
        fill="url(#moon-texture)"
        mask="url(#surface-mask)"
      />

      <circle
        cx="50"
        cy="50"
        r="50"
        fill="url(#flowers-texture)"
        mask="url(#inner-mask)"
      />

      <circle
        cx="50"
        cy="50"
        r="50"
        fill="url(#microscope-texture)"
        mask="url(#core-mask)"
      />
    </svg>
  );
}
