"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { memo, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./Form.module.css";
import Button from "../button/Button";
import { getFormFields, getValidation } from "./FormFunctions";
const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  DSAdownloadBrochure,
  brochurePdfLink,
  platform,
  isCyberSecurity,//for button type manipulation
}) => {
  //form submission end point
  const formEndPoint =
    "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";

  //for redirect to thank you page
  const router = useRouter();

  //for fetching the current path
  const currentUrl = usePathname();

  //for generating dynamic form fields
  const [formFields, setFormFields] = useState(getFormFields(platform));

  //for phone input storing
  const [value, setValue] = useState();

  //for validation response
  const [error, setError] = useState();

  // State to track form submission
  const [submitting, setSubmitting] = useState(false);

  //form data state
  const [formEntries, setFormEntries] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    WorkExperience: "",
    dateTime: "",
    currentDesignation: "",
    url: currentUrl,
  });

  //setting button text as per the downloadBrochure value
  let btnText = "Apply For Counselling";
  if (downloadBrochure) {
    btnText = "Download Now";
  }
  else if(DSAdownloadBrochure){
    btnText = "Book Session";

  }

  //onchange function
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormEntries((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;
    setFormEntries((prevState) => ({
      ...prevState,
      phone: formattedPhone,
    }));
  };

  //fetch location
  const fetchLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=bc89c2010abac0"
      );
      if (!response.ok) {
        console.log(
          `Failed to fetch location: ${response.status} ${response.statusText}`
        );

        throw new Error(
          `Failed to fetch location: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log("API Response:", data);
      const { country, region, city } = data;

      // If city is not available, provide a default value
      const finalCountry = country ? country : "Unknown";
      const finalRegion = region ? region : "Unknown";
      const finalCity = city ? city : "Unknown";

      return { country: finalCountry, region: finalRegion, city: finalCity };
    } catch (error) {
      console.error("Error fetching location:", error.message);
      // If there's an error fetching location data, return default or placeholder values
      return {
        country: "Country Undefined",
        region: "Region Undefined",
        city: "City Undefined",
      };
    }
  };

  //form submit function
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true

    // Run validation
    const validationError = getValidation(formEntries);
    if (validationError) {
      setError(validationError);
      setSubmitting(false); // Stop submitting if there's a validation error
      return;
    }

    const formData = new FormData();
    Object.entries(formEntries).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const locationData = await fetchLocation();
      formData.append("country", locationData.country);
      formData.append("city", locationData.city);
      formData.append("region", locationData.region);
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }

    try {
      const endPoint = formEndPoint;

      //   setError(getValidation(radio, Domain, interstedInHide, formEntries));
      //   const validation = getValidation(radio, Domain, interstedInHide, formEntries);

      if (endPoint) {
        // console.log("FormData before submission:");
        // for (const [key, value] of formData.entries()) {
        //   console.log(`${key}: ${value}`);
        // }
        const sendData = await fetch(endPoint, {
          method: "POST",
          body: formData,
        });

        setFormEntries({
          name: "",
          email: "",
          phone: "",
          platform: "",
          WorkExperience: "",
          dateTime: "",
          currentDesignation: "",
          url: router.asPath,
        });

        if (popup) {
          setTrigger(false);
        }

        //redirect to thank you page
        if (sendData.status === 200) {
          router.push("/Thank-you");
        }
      }
      setSubmitting(false); // Set submitting state to false after form submission
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const downloadFileAtUrl = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.download = url.split("/").pop();
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <div className={styles.App}>
      <form onSubmit={handleFormSubmit}>
        <>
          {formFields.map(
            (field) =>
              field.showField && (
                <div key={field.name} className={styles.formWrapper}>
                  {field.type === "phone" ? (
                    <PhoneInput
                      inputStyle={field.inputStyle}
                      containerStyle={field.containerStyle}
                      name={field.name}
                      inputProps={field.inputProps}
                      country="in"
                      placeholder={field.placeholder}
                      value={formEntries.phone}
                      onChange={handlePhoneChange}
                      required={field.required}
                      className={styles.PhoneInput}
                    />
                  ) : field.type === "select" ? (
                    <select
                      name={field.name}
                      required={field.required}
                      value={formEntries[field.name]}
                      className=""
                      onChange={handleOnChange}
                    >
                      {field.options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          hidden={option.hidden}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className={styles.InputWrapper}>
                      <label
                        htmlFor={field.name}
                        className={`${styles.FloatingLabel} ${
                          formEntries[field.name] ? styles.Active : ""
                        }`}
                      >
                        {field.placeholder}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        className={styles.EmailInputs}
                        required={field.required}
                        // placeholder={field.placeholder}
                        value={formEntries[field.name]}
                        onChange={handleOnChange}
                      />
                    </div>
                  )}
                </div>
              )
          )}
          {error && (
            <div className={styles.errorContainer}>
              <p>{error}</p>
            </div>
          )}
          <p className={styles.FormText}>
            By submitting the form, you agree to our Terms and Conditions and
            our Privacy Policy.
          </p>
          <div className={styles.submitContainer}>
            <Button
              text={submitting ? "Submitting..." : btnText}
              OrangeButton={!isCyberSecurity}
              buttonType="submit"
            />
            {/* <button
              type="submit"
              disabled={submitting}
              className={styles.requestBtn}
            >
              {submitting ? "Submitting..." : btnText}
            </button> */}
          </div>
        </>
      </form>
    </div>
  );
};

export default memo(Form);
