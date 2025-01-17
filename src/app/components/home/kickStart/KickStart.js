"use client";
import React from "react";
import styles from "./KickStart.module.css";

const KickStart = () => {
  const SvgRightMark = [
    <svg
      height="28"
      width="42"
      fill="none"
      viewBox="0 0 42 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        height="28"
        id="mask0_137_3933"
        style={{ maskType: "alpha" }}
        width="42"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <rect height="28" width="42" fill="url(#pattern0_137_3933)" />
      </mask>
      <g mask="url(#mask0_137_3933)">
        <rect height="28" width="42" fill="#04C988" y="-2.24023" />
      </g>
      <defs>
        <pattern
          height="1"
          id="pattern0_137_3933"
          width="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(0.00666667 0 0 0.01 0.166667 0)"
            xlinkHref="#image0_137_3933"
          />
        </pattern>
        <image
          height="100"
          id="image0_137_3933"
          width="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>,
  ];
  const SvgRightMarkMbl = [
    <svg
      height="17"
      width="25"
      fill="none"
      viewBox="0 0 25 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        height="17"
        id="mask0_137_4093"
        style={{ maskType: "alpha" }}
        width="25"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <rect
          height="15.7561"
          width="23.6342"
          fill="url(#pattern0_137_4093)"
          x="0.542969"
          y="0.740234"
        />
      </mask>
      <g mask="url(#mask0_137_4093)">
        <rect
          height="15.7561"
          width="23.6342"
          fill="#04C988"
          x="0.542969"
          y="-0.52002"
        />
      </g>
      <defs>
        <pattern
          height="1"
          id="pattern0_137_4093"
          width="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(0.00666667 0 0 0.01 0.166667 0)"
            xlinkHref="#image0_137_4093"
          />
        </pattern>
        <image
          height="100"
          id="image0_137_4093"
          width="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHFklEQVR4nO3bb0xT5x4H8MMc4p8gQ8MUGTKFqCB/VlqgQPFAS9sDPaeUyUGgQvlzyl2Wa9ybvVv278X2Yi/c3rgty7JlNzdL3IK6KQMRKOJYwQJtgVpb2lN4sRm8d4szm3JdfW5qMnXEKaV9eHrK80m+70j7/fXHgXMeAkFgGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhUQwQMR083Wb0MV2cj/68w6MpRF1pzXoDvPEUxzNfGH0M+DMcT/s5nnkFdbc1yeijjz+8jL8uhvkgsDDUHdcMzke/9nfLuB+e+crAkxtQd4163Jymxcgzd5+4kHtLofuPuqgtqDtHLeOcVsvxzJ1lLePB7xX7P+Y1Kai7Rx2jlyaNPuZWMMt46Erxtnu1+1DPEDU652tyOJ75eUXLePA75b9GX00J6lkEr21Os4fj6R9DWsb90L9wPmY36pkEq81FJRl9tDM8y7i/lOOo5xKkoy5qC8cz4+Fdxr10oZ5NcI66qLjALSuEZQDOR7+Kej5BYQG7LvBQB2cZjBU/LAYpcOwBYxmBW99OX21ysH3WNI5n3oJyZfDMdfwcEiSOp1+CcmX46F+5OY042D5rWidP64w8/QeEZSxyXo0a9XyC0slXV3A++rbRR4NwhuM1fm6OqUc9n6B0eJhczlv9C8drQLhj9GqOoZ5PUDpdVHq7t+pah7cahDvtnuq3Uc9HtLurdO2equPts+pXO+ZVW4kI1ulTJ7fNVnnbPVUAQj5GOx0gYlrd1GdtsxT4M62z6oU2DyUjIlCnpzKh1U1ZH+4brrS61V2BB0ukAxrcyjdb3SqwNAa38rbBpdITEYSdl25sdauGHtU31BjcKhPyp3CDW6UzuCr9rW4leGRcyruBhRERgAXsula38uu/7RpCDC6lvWlOk4h0wDaXPMtwVXHD4KoET0rL1cpPOy3iWGRlARFjcCk+WU7XYNPiqvToHWq0RyLNDsW2ZqdituWqAiw7Tnlf4Oc3kr5O+TtBdV1mmp3yBf2VCrR/mg18px9xlg80OyvACjLVPF25azX7NjvLX15h18fmiLPiV71Dnk+gpneUnzhypRyEkB9XaxC9g2zUO0h/iH0fEXJR76hQEagdmSbb9A4ShJ6DN/WOcg3MrvqZcoV+5uDt8PR9kKYZ0q+fOYj+SKRhRlbUNFO22DRTBsIT2Z2maZkRRtfG6bLCphnZzfB1fZBGh+xlIhI0TJUONU6XgrBnquSdwF1QuHo22ov3N0yVXIfRtWGq9C0iUhy2S28enioGUGKXfkm5qLhQO7KT0pR6u9QHqeeHRCSptxVN1tulAFpsRSPshCxppf1YiziBtUmtMLqxdulp9iTiI5Gl6q0F6jproZ+1FQJosRY6D0+J04PtRlvEm1hr4fcwOtXZCgYoV0bIVy8U7GRBbZ1V8ludVQLgRfyfQ7b8smV3OsmuO2QVd8HocmhSYq+ZzHuGiGS1Ey8UvDgh+unQRD6AlvH823XjooYnlgFEzIsT+Z/C6SHysKMFOwghYCfzUmotosnacRGAFovobu246LEHk7px0Xsw3ltnES3orLl7CSHRXtoXr7PkntNZ8gDkfEIOkk8vfX/d5bx/wnm/3Bu1lhz0RyIrEfigtGPZJ2ou5wCY0Y5l91DmjPv/iaQdzdZrx3L84X+fnEXmcraSEDrt2IFjzOgBv3bsAICXLFutOec5rTlbox3LuhPu17/XfzSLJaIFM5pZz4xm3WJGswCs0ObMecac+RuU1x7NfImINtU/ZBZVm/dd05j3AyGl2rz/dSJaMea9u6tG9jqqf9gLBJIPiWinGd6VSI1kDFSNZIBIDjWScYo9SUTWkQjMOzDqUvpH1KV0EJEZ3jNAdUfokQhM6uHnj6ku7varh3eDSIlq+HkbOZgW2UciMCmHd7HKobTflRfTAPIMpc2Sg2nCOBKBSWHaWawwpS5UDqUCVFGYUhcUF3cK60gEpor+1HS5KeWKwpQCVjvywZQbCtNOEerPIOKoep7bKh9MNskHk8FqpWJwx6LclCz8IxFYAnc35f3b/1Xevx3ADtm//Q/ywo461DNHPkDEkH1Jb5J9SXfJC0kAWvqSjqIeVVDKehIPy3q33io7vw2EPb1bX0M9nyDJehNLS3sSr8t6E0G4UtqbeAL1XIIm7dmSUdKTcLW0JwGEmpLvtqydIxGYCvrit0nPxV8s7o4HK420O36A6ibW3pEILFQ3EVd0dtO/pec2g6BzdpONPJWwdo9EoAFETOG3G98tOrsRLD8bpop7Nz+LunpUK/x2Q4vkTNyNgm/iwOMi+Wb9d3mnCHxlrAbJqQ2p4jOx74tPx16TnIkFD+V/ktOx58Vn1tesShFsCUDESL6O2yPqerr4hdPrs3J7ic1LvwTDMAzDMAzDMAzDMAzDMAzDMAzDMIwQvP8Dydh40gekcT8AAAAASUVORK5CYII="
        />
      </defs>
    </svg>,
  ];
  return (
    <div className="containerWidth">
      <div className={styles.continer}>
        <h3>
          Kickstart your career with <span>our programs</span>
        </h3>
        <p className={styles.desktopText}>
          Our programs have helped thousands launch careers in tech
        </p>
        <p className={styles.mobileText}>
          Our immersive training programs have empowered thousands to
          successfully transition into tech careers.
        </p>
      </div>
      <div className={styles.spantags}>
        <span key="1">{SvgRightMark} 200-400 hours of learning</span>
        <span key="2">{SvgRightMark} Live, interactive sessions</span>
        <span key="3">{SvgRightMark} Hybrid training mode</span>
      </div>

      <div className={styles.spantagsMbl}>
        <div className={styles.MblTop}>
          {" "}
          <span key="4">{SvgRightMarkMbl} 200-400 hours of learning</span>
          <span key="5">{SvgRightMarkMbl} Live, interactive sessions</span>
        </div>
        <div className={styles.MblDown}>
          <span>{SvgRightMarkMbl} Hybrid training mode</span>
        </div>
      </div>
    </div>
  );
};

export default KickStart;
