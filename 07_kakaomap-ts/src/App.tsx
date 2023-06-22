import React, { useEffect, useRef, useState } from "react";
import "./App.css";

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  const mapRef = useRef<HTMLDivElement>(null);
  // 지도는 렌더링에 영향을 주거나 받지 않으므로 ref로 사용하는 것이 좋을듯
  // const [map, setMap] = useState<any>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=aef3abaefb061efe91b76c22380204dc&autoload=false";
    // head에 스크립트를 추가해줘야 한다.
    document.head.appendChild(script);

    // script가 load되었을 때 map이 실행될 수 있도록
    script.onload = () => {
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          // console.log(mapRef.current);
          var options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          map.current = new window.kakao.maps.Map(mapRef.current, options);
        }
      });
    };
    return () => script.remove();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <input
        type="range"
        min="1"
        max="20"
        onChange={(event) => {
          map.current.setLevel(event.currentTarget.value, { animate: true });
        }}
      />
      <button
        onClick={() => {
          map.current.setCenter(
            new window.kakao.maps.LatLng(37.514575, 127.0495556)
          );
        }}
      >
        서울로
      </button>
      <button
        onClick={() => {
          map.current.setCenter(
            new window.kakao.maps.LatLng(35.16001944, 129.1658083)
          );
        }}
      >
        부산로
      </button>
      <div ref={mapRef} style={{ width: 300, height: 300 }}></div>
    </div>
  );
}

export default App;
