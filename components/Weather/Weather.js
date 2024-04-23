import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import { useEffect } from "react";
import styled from "styled-components";

export default function Weather() {
  const [iconUrl, setIconUrl] = useState(null);

  const { data, error } = useSWR(
    `https://api.weatherapi.com/v1/current.json?key=c80c6332a90342899b771837241904&q=hamburg&aqi=no`
  );

  useEffect(() => {
    if (data && data.current && data.current.condition) {
      const newIconUrl = `https:${data.current.condition.icon}`;
      setIconUrl(newIconUrl);
    }
  }, [data]);

  if (error) return <h2>Error fetching weather data</h2>;
  if (!data) return <h2>Loading...</h2>;

  return (
    <ContainerWeather>
      {iconUrl && (
        <span>
          <Image
            src={iconUrl}
            width={50}
            height={50}
            alt={data.current.condition.text}
          />
        </span>
      )}
      <TextTemperatur>{`${data.current.temp_c} °C`}</TextTemperatur>
    </ContainerWeather>
  );
}

const ContainerWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  position: relative;

  border-radius: 20%;
  padding: 4px;
`;

const TextTemperatur = styled.div`
  position: absolute;
  top: 41px;
  color: black;
`;
