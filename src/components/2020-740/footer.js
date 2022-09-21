import { NoiseIcon } from './noise';
import { SnowIcon } from './snow';
import { IceIcon } from './ice';

export default function Footer({
  isWinter = false, isIce = false, noiseDB, char,
}) {
  if (isWinter && isIce) {
    return (
      <>
        <NoiseIcon char={char} noiseDB={noiseDB} position={2} />
        <SnowIcon position={2} />
        <IceIcon />
      </>
    );
  }
  if (isWinter) {
    return (
      <>
        <NoiseIcon char={char} noiseDB={noiseDB} position={1} />
        <SnowIcon char={char} noiseDB={noiseDB} position={1} />
      </>
    );
  }

  return (
    <NoiseIcon char={char} noiseDB={noiseDB} position={0} />
  );
}
