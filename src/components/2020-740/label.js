import PropTypes from 'prop-types';
import QRCode from 'react-qr-code';
import { DelegatingActText } from './delegatingActText';
import { RightArrows } from './rightArrows';
import { RightArrowsText } from './rightArrowsText';
import { LeftArrows } from './leftArrows';
import { LeftArrowsText } from './leftArrowsText';
import { RainIcon } from './rainIcon';
import { GasIcon } from './gasIcon';
import { EuEnergLogo } from './euEnerg';
import { RightIconPicker } from './rightIconPicker';
import { LeftIconPicker } from './leftIconPicker';
import Footer from './footer';

const styles = `
  .cls-1,
  .cls-14,
  .cls-16,
  .cls-18,
  .cls-2,
  .cls-25,
  .cls-27,
  .cls-28,
  .cls-29,
  .cls-30,
  .cls-32,
  .cls-33,
  .cls-34,
  .cls-35,
  .cls-36,
  .cls-37,
  .cls-43,
  .cls-44,
  .cls-45,
  .cls-46,
  .cls-47,
  .cls-53,
  .cls-55,
  .cls-8 {
      fill: none;
  }

  .cls-14,
  .cls-16,
  .cls-18,
  .cls-2,
  .cls-25,
  .cls-27,
  .cls-28,
  .cls-29,
  .cls-30,
  .cls-53,
  .cls-55,
  .cls-8 {
      stroke: #231f20;
  }

  .cls-2,
  .cls-37 {
      stroke-width: 0.5px;
  }

  .cls-3,
  .cls-4,
  .cls-5,
  .cls-52 {
      font-size: 8px;
  }

  .cls-3,
  .cls-31,
  .cls-4,
  .cls-40,
  .cls-41,
  .cls-42,
  .cls-48,
  .cls-5,
  .cls-50,
  .cls-6 {
      fill: #231f20;
  }

  .cls-3,
  .cls-41,
  .cls-48,
  .cls-49,
  .cls-50 {
      font-family: Verdana-Bold, Verdana;
  }

  .cls-13,
  .cls-14,
  .cls-15,
  .cls-16,
  .cls-17,
  .cls-18,
  .cls-24,
  .cls-3,
  .cls-41,
  .cls-48,
  .cls-49,
  .cls-51 {
      font-weight: 700;
  }

  .cls-4,
  .cls-40,
  .cls-42,
  .cls-5,
  .cls-52,
  .cls-6 {
      font-family: Verdana, Verdana;
  }

  .cls-5 {
      letter-spacing: 0em;
  }

  .cls-6 {
      font-size: 4.63px;
  }

  .cls-7 {
      fill: #abe1fa;
  }

  .cls-14,
  .cls-16,
  .cls-18,
  .cls-32,
  .cls-33,
  .cls-34,
  .cls-35,
  .cls-36,
  .cls-43,
  .cls-44,
  .cls-45,
  .cls-46,
  .cls-47,
  .cls-8 {
      stroke-miterlimit: 10;
  }

  .cls-8 {
      stroke-width: 0.15px;
  }

  .cls-9 {
      fill: #75bee9;
  }

  .cls-10 {
      fill: #4ba6dd;
  }

  .cls-11 {
      fill: #0080c6;
  }

  .cls-12 {
      fill: #0066b3;
  }

  .cls-13,
  .cls-14 {
      font-size: 15.55px;
  }

  .cls-13,
  .cls-15,
  .cls-17,
  .cls-24,
  .cls-26 {
      fill: #fff;
  }

  .cls-13,
  .cls-14,
  .cls-15,
  .cls-16,
  .cls-17,
  .cls-18,
  .cls-24 {
      font-family: Calibri-Bold, Calibri;
  }

  .cls-14 {
      stroke-width: 0.11px;
  }

  .cls-15,
  .cls-16 {
      font-size: 15.7px;
  }

  .cls-16 {
      stroke-width: 0.11px;
  }

  .cls-17,
  .cls-18 {
      font-size: 15.22px;
  }

  .cls-18 {
      stroke-width: 0.11px;
  }

  .cls-19 {
      fill: #ed1c24;
  }

  .cls-20 {
      fill: #fdb913;
  }

  .cls-21 {
      fill: #fff200;
  }

  .cls-22 {
      fill: #9aca3c;
  }

  .cls-23 {
      fill: #00a651;
  }

  .cls-24 {
      font-size: 20.03px;
  }

  .cls-27,
  .cls-28,
  .cls-29,
  .cls-30,
  .cls-37,
  .cls-53 {
      stroke-linecap: round;
      stroke-linejoin: round;
  }

  .cls-27 {
      stroke-width: 0.8px;
  }

  .cls-28 {
      stroke-width: 0.8px;
  }

  .cls-29 {
      stroke-width: 0.8px;
  }

  .cls-30 {
      stroke-width: 0.8px;
  }

  .cls-32,
  .cls-33,
  .cls-34,
  .cls-35,
  .cls-36,
  .cls-37,
  .cls-43,
  .cls-44,
  .cls-45,
  .cls-46,
  .cls-47 {
      stroke: #fff;
  }

  .cls-32 {
      stroke-width: 0.34px;
  }

  .cls-33 {
      stroke-width: 0.34px;
  }

  .cls-34 {
      stroke-width: 0.33px;
  }

  .cls-35 {
      stroke-width: 0.33px;
  }

  .cls-36 {
      stroke-width: 0.33px;
  }

  .cls-38 {
      fill: #034ea2;
  }

  .cls-39 {
      fill: #e6e7e8;
  }

  .cls-40,
  .cls-41 {
      font-size: 3.92px;
  }

  .cls-42,
  .cls-48 {
      font-size: 10px;
  }

  .cls-42 {
      letter-spacing: 0em;
  }

  .cls-43 {
      stroke-width: 0.33px;
  }

  .cls-44 {
      stroke-width: 0.33px;
  }

  .cls-45 {
      stroke-width: 0.33px;
  }

  .cls-46 {
      stroke-width: 0.33px;
  }

  .cls-47 {
      stroke-width: 0.32px;
  }

  .cls-49,
  .cls-50 {
      font-size: 12px;
  }

  .cls-53 {
      stroke-width: 1.15px;
  }

  .cls-54 {
      clip-path: url(#clip-path);
  }

  .cls-55 {
      stroke-width: 0.18px;
  }

  .cls-56 {
      clip-path: url(#clip-path-19);
  }

  .cls-57 {
      font-size: 8px;
      text-align: end;
      text-anchor: end;
      fill: #231f20;
      font-family: Verdana, Verdana;
  }

  .cls-58 {
      font-size: 8px;
      text-anchor: end;
      fill: #231f20;
      font-family: Verdana, Verdana;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export function Label({
  producer,
  typeIdentifier,
  size,
  tyreClass,
  fuelEfficiency,
  wetGrip,
  rollNoise,
  noiseLevel,
  snowGrip,
  iceGrip,
  eprelId,
}) {
  return (
    <div style={{
      position: 'relative',
      width: '75mm',
    }}
    >
      <div style={{
        position: 'absolute',
        width: '43px',
        height: '43px',
        top: '9px',
        right: '9px',
      }}
      >
        <QRCode value={`https://eprel.ec.europa.eu/qr/${eprelId}`} size={43} fgColor="#484848" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="75mm" height="110mm" viewBox="0 0 205.08427 312.41585">
        <defs>
          <style>{styles}</style>
          <clipPath transform="translate(-8.5 -8.5)" id="clip-path">
            <polygon
              id="polygon4839"
              points="161.14,283.79 163.69,292.47 165.56,285.21 167.09,287.71 169.25,280.89 180.28,300.39 148.23,300.39 157.7,283.58 159.89,287.02 "
              className="cls-1"
              style={{ fill: 'none' }}
            />
          </clipPath>
          <clipPath transform="translate(-8.5 -8.5)" id="clip-path-19">
            <polygon
              id="polygon4842"
              points="134.98,283.79 137.53,292.47 139.4,285.21 140.93,287.71 143.08,280.89 154.12,300.39 122.07,300.39 131.53,283.58 133.73,287.02 "
              className="cls-1"
              style={{ fill: 'none' }}
            />
          </clipPath>
          <clipPath id="clipPath2159" clipPathUnits="userSpaceOnUse">
            <path id="path2157" d="m 148.21,11.424 h 8.891 l -0.687,14.564 z" />
          </clipPath>
          <clipPath id="clipPath2171" clipPathUnits="userSpaceOnUse">
            <path id="path2169" d="m 148.21,11.424 h 10.501 l -0.773,16.398 -0.261,0.408 z" />
          </clipPath>
          <clipPath id="clipPath2183" clipPathUnits="userSpaceOnUse">
            <path id="path2181" d="m 148.21,11.424 h 12.11 l -0.645,13.675 -1.998,3.131 z" />
          </clipPath>
          <clipPath id="clipPath2195" clipPathUnits="userSpaceOnUse">
            <path id="path2193" d="m 148.21,11.424 h 13.721 l -0.778,16.486 -0.031,0.107 -1.248,-3.229 -2.197,3.442 z" />
          </clipPath>
          <clipPath id="clipPath2207" clipPathUnits="userSpaceOnUse">
            <path id="path2205" d="m 148.21,11.424 h 15.33 l -0.47,9.968 -1.948,6.625 -1.248,-3.229 -2.197,3.442 z" />
          </clipPath>
          <clipPath id="clipPath2219" clipPathUnits="userSpaceOnUse">
            <path
              id="path2217"
              d="m 148.21,11.424 h 16.94 l -0.544,11.539 -0.934,-3.619 -2.55,8.673 -1.248,-3.229 -2.197,3.442 z"
            />
          </clipPath>
          <clipPath id="clipPath2231" clipPathUnits="userSpaceOnUse">
            <path
              id="path2229"
              d="m 148.21,11.424 h 18.549 l -0.674,14.293 -0.542,0.883 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 z"
            />
          </clipPath>
          <clipPath id="clipPath2243" clipPathUnits="userSpaceOnUse">
            <path
              id="path2241"
              d="m 148.21,11.424 h 20.159 l -0.689,14.6 -0.606,-1.918 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 z"
            />
          </clipPath>
          <clipPath id="clipPath2255" clipPathUnits="userSpaceOnUse">
            <path
              id="path2253"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.467,-16.806 h 21.769 l -0.898,19.033 z"
            />
          </clipPath>
          <clipPath id="clipPath2267" clipPathUnits="userSpaceOnUse">
            <path
              id="path2265"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.467,-16.806 h 23.378 l -0.789,16.724 -1.57,2.775 z"
            />
          </clipPath>
          <clipPath id="clipPath2279" clipPathUnits="userSpaceOnUse">
            <path
              id="path2277"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.467,-16.806 h 24.988 l -0.642,13.621 -3.327,5.878 z"
            />
          </clipPath>
          <clipPath id="clipPath2291" clipPathUnits="userSpaceOnUse">
            <path
              id="path2289"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.467,-16.806 h 26.598 l -0.496,10.519 -5.083,8.98 z"
            />
          </clipPath>
          <clipPath id="clipPath2303" clipPathUnits="userSpaceOnUse">
            <path
              id="path2301"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.467,-16.806 h 28.208 l -0.35,7.416 -6.839,12.083 z"
            />
          </clipPath>
          <clipPath id="clipPath2315" clipPathUnits="userSpaceOnUse">
            <path
              id="path2313"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.467,-16.806 h 29.817 l -0.203,4.314 -8.595,15.185 z"
            />
          </clipPath>
          <clipPath id="clipPath2327" clipPathUnits="userSpaceOnUse">
            <path
              id="path2325"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.467,-16.806 h 31.427 l -0.057,1.211 -10.351,18.288 z"
            />
          </clipPath>
          <clipPath id="clipPath2339" clipPathUnits="userSpaceOnUse">
            <path
              id="path2337"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -9.305,-16.52 0.013,-0.286 h 31.881 l -11.037,19.499 z"
            />
          </clipPath>
          <clipPath id="clipPath2351" clipPathUnits="userSpaceOnUse">
            <path
              id="path2349"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -7.82,-13.883 0.138,-2.923 h 30.271 l -11.037,19.499 z"
            />
          </clipPath>
          <clipPath id="clipPath2363" clipPathUnits="userSpaceOnUse">
            <path
              id="path2361"
              d="m 167.074,24.106 -1.531,2.494 -1.871,-7.256 -2.55,8.673 -1.248,-3.229 -2.197,3.442 -6.335,-11.246 0.262,-5.56 h 28.662 l -11.037,19.499 z"
            />
          </clipPath>
        </defs>
        <rect fill="white" height="100%" width="100%" />

        {/* LOGO */}

        <EuEnergLogo />

        <path
          style={{
            fill: 'none',
            stroke: '#231f20',
            strokeWidth: '0.5px',
          }}
          className="cls-2"
          d="M 4.5571595,59.240431 H 200.14716 m -195.5900005,19.69 H 200.14716 M 4.5571595,244.73043 H 199.97716"
          id="path4849"
        />
        <text id="supplierName0" className="cls-3" x="4.5571594" y="48.470442" />
        <text y="55.970432" x="4.5571594" className="cls-3" id="supplierName1">{producer}</text>
        <text y="55.970432" x="200.2" className="cls-57" id="modelIdentifierText1">{typeIdentifier}</text>
        <text y="74.600433" x="200.1" className="cls-57" id="tyreClass">{tyreClass}</text>
        {/*  SIZE */}
        <text
          y="74.600433"
          x="4.5571594"
          style={{
            fontSize: '10px',
            fontFamily: 'Verdana, Verdana',
            letterSpacing: '0em',
            fill: '#231f20',
          }}
          className="cls-42"
          id="sizeText"
        >
          {size}
        </text>

        {/*  EU NUMBERS */}
        <DelegatingActText />

        {/* LEFT ARROWS */}
        <GasIcon />
        <LeftArrows />
        <LeftArrowsText />
        <LeftIconPicker char={fuelEfficiency} />

        {/* SEPARATE LINE */}
        <line
          id="line4971"
          y2="238.01044"
          x2="102.35716"
          y1="84.230431"
          x1="102.35716"
          className="cls-2"
          style={{
            fill: 'none',
            stroke: '#231f20',
            strokeWidth: '0.5px',
          }}
        />

        {/*  RIGHT ARROWS */}
        <RainIcon />
        <RightArrows />
        <RightArrowsText />
        <RightIconPicker char={wetGrip} />

        <Footer noiseDB={rollNoise} char={noiseLevel} isWinter={snowGrip} isIce={iceGrip} />
      </svg>
    </div>
  );
}

Label.propTypes = {
  producer: PropTypes.string.isRequired,
  typeIdentifier: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  tyreClass: PropTypes.string.isRequired,
  fuelEfficiency: PropTypes.oneOf(['A', 'B', 'C', 'D', 'E']).isRequired,
  wetGrip: PropTypes.oneOf(['A', 'B', 'C', 'D', 'E']).isRequired,
  rollNoise: PropTypes.number.isRequired,
  noiseLevel: PropTypes.oneOf(['A', 'B', 'C']).isRequired,
  snowGrip: PropTypes.bool,
  iceGrip: PropTypes.bool,
  eprelId: PropTypes.number.isRequired,
};

Label.defaultProps = {
  snowGrip: false,
  iceGrip: false,
};
