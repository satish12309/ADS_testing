"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import styles from "./CourseThankYou.module.css";

import {
  dataScience,
  fullStackD,
  nonTechD,
  placementProject,
  viewAllD,
} from "./CourseThankYouData";

function CourseThankYou() {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [oneYearD, setOneYearD] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    // <div className="containerWidth">
    <div className={styles.Course} id="course">
      <div className={styles.coursesM}>
        <div className={styles.listPanel}>
          <div
            className={oneYearD ? styles.coursesM : styles.notcoursesM}
            onClick={() => {
              setViewAll(false);
              setOneYearD(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
          >
            <p>Data Science Syllabus</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {oneYearD ? (
            <div className={styles.gridPanel}>
              {dataScience.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={Stack ? styles.coursesM : styles.notcoursesM}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
          >
            <p>DSA & Cloud Computing Syllabus</p>
            <p>
              <FaChevronDown className="Icons" style={{ fontWeight: "600" }} />
            </p>
          </div>
          {Stack ? (
            <div className={styles.gridPanel}>
              {fullStackD.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={Guarantee ? styles.coursesM : styles.notcoursesM}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
          >
            <p>E&ICT Academy of IIT Guwahati</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {Guarantee ? (
            <div className={styles.gridPanel}>
              {placementProject.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={nonTech ? styles.coursesM : styles.notcoursesM}
            onClick={() => {
              setViewAll(false);
              setOneYearD(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
          >
            <p>Data Science Master in CS</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {nonTech ? (
            <div className={styles.gridPanel}>
              {nonTechD.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className={styles.line}></div>
          <div
            className={viewAll ? styles.coursesM : styles.notcoursesM}
            onClick={() => {
              setViewAll(true);
              setOneYearD(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
          >
            <p>Domain Courses Syllabus</p>
            <p>
              <FaChevronDown className="Icons" />
            </p>
          </div>
          {viewAll ? (
            <div className={styles.gridPanel}>
              {viewAllD.map((viewAllData) => {
                const { id, title, link1 } = viewAllData;
                return (
                  <>
                    <Link href={link1}>
                      <div className={styles.leftSide} key={id}>
                        <p className={styles.Ptopp}>{title}</p>
                        <div className={styles.btnWrapper}>
                          <button className={styles.Button}>
                            <FaDownload className="Icons" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.coursesD}>
        <div className={styles.listPanel}>
          <span
            className={oneYear ? styles.isCoursed : styles.notCoursed}
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
          >
            Data Science Syllabus
          </span>
          <div className={styles.line}></div>
          <span
            className={Stack ? styles.isCoursed : styles.notCoursed}
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
          >
            DSA & Cloud Computing Syllabus
          </span>
          <div className={styles.line}></div>
          <span
            className={Guarantee ? styles.isCoursed : styles.notCoursed}
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
          >
            E&ICT Academy of IIT Guwahati
          </span>
          <div className={styles.line}></div>
          <span
            className={nonTech ? styles.isCoursed : styles.notCoursed}
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
          >
            Master's Degree Syllabus
          </span>
          <div className={styles.line}></div>
          <span
            className={viewAll ? styles.isCoursed : styles.notCoursed}
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
          >
            Domain Courses Syllabus
          </span>
        </div>
        {viewAll ? (
          <div className={styles.gridPanel}>
            {viewAllD.map((viewAllData) => {
              const { id, title, link1 } = viewAllData;
              return (
                <>
                  <Link href={link1}>
                    <div className={styles.leftSide} key={id}>
                      <p className={styles.Ptopp}>{title}</p>
                      <div className={styles.btnWrapper}>
                        <button className={styles.Button}>
                          <FaDownload className="Icons" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.gridPanel}>
            {dataScience.map((viewAllData) => {
              const { id, title, link1 } = viewAllData;
              return (
                <>
                  <Link href={link1}>
                    <div className={styles.leftSide} key={id}>
                      <p className={styles.Ptopp}>{title}</p>
                      <div className={styles.btnWrapper}>
                        <button className={styles.Button}>
                          <FaDownload className="Icons" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {Guarantee ? (
          <div className={styles.gridPanel}>
            {placementProject.map((viewAllData) => {
              const { id, title, link1 } = viewAllData;
              return (
                <>
                  <Link href={link1}>
                    <div className={styles.leftSide} key={id}>
                      <p className={styles.Ptopp}>{title}</p>
                      <div className={styles.btnWrapper}>
                        <button className={styles.Button}>
                          <FaDownload className="Icons" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            {fullStackD.map((viewAllData) => {
              const { id, title, link1 } = viewAllData;
              return (
                <>
                  <Link href={link1}>
                    <div className={styles.leftSide} key={id}>
                      <p className={styles.Ptopp}>{title}</p>
                      <div className={styles.btnWrapper}>
                        <button className={styles.Button}>
                          <FaDownload className="Icons" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            {nonTechD.map((viewAllData) => {
              const { id, title, link1 } = viewAllData;
              return (
                <>
                  <Link href={link1}>
                    <div className={styles.leftSide} key={id}>
                      <p className={styles.Ptopp}>{title}</p>
                      <div className={styles.btnWrapper}>
                        <button className={styles.Button}>
                          <FaDownload className="Icons" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    // </div>
  );
}

export default CourseThankYou;
