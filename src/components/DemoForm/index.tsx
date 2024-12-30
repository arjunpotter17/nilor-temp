import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormField } from "./FormComponents/FormField";
import { Input } from "./FormComponents/Input";
import { CustomSelect } from "./FormComponents/CustomSelect";
import {
  INDUSTRIES,
  COUNTRIES,
  BUSINESS_TYPES,
  INITIAL_DATA,
} from "./utils/constants";
import { FormData } from "./types/form";
import { validateField } from "./utils/validations";
import { motion } from "framer-motion";

interface formProps {
  formClasses?: string;
  hiddenFields?: Array<keyof FormData>;
}

export default function ContactForm({
  formClasses,
  hiddenFields = [],
}: formProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [isFormValid, setIsFormValid] = useState(false);

  const isFieldHidden = (field: keyof FormData) => hiddenFields.includes(field);

  const handleBlur = (field: keyof FormData) => {
    if (!touched[field]) {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const error = validateField(field, formData[field]);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const newErrors: Partial<FormData> = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      if (!isFieldHidden(key)) {
        newErrors[key] = validateField(key, formData[key]);
      }
    });

    const isValid = !Object.values(newErrors).some((error) => error !== "");
    setIsFormValid(isValid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};
    const allTouched: Partial<Record<keyof FormData, boolean>> = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      if (!isFieldHidden(key)) {
        newErrors[key] = validateField(key, formData[key]);
        allTouched[key] = true;
      }
    });

    setErrors(newErrors);
    setTouched(allTouched);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      console.log("Form submitted:", formData);
      setFormData(INITIAL_DATA);
      setErrors({});
      setTouched({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        {!isFieldHidden("name") && (
          <FormField label="Name" error={errors.name} touched={touched.name}>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              error={!!errors.name && touched.name}
              placeholder="Enter your name"
              className={`${formClasses}`}
            />
          </FormField>
        )}

        {!isFieldHidden("phone") && (
          <FormField label="Phone" error={errors.phone} touched={touched.phone}>
            <PhoneInput
              country="us"
              value={formData.phone}
              onChange={(phone) => handleChange("phone", phone)}
              onBlur={() => handleBlur("phone")}
              containerClass="phone-input-container"
              inputClass={`!w-full !bg-gray-800 !py-2 !pl-12 !rounded-lg !border ${
                formClasses ? formClasses : "!text-nilor-white"
              } ${
                errors.phone && touched.phone
                  ? "!border-red-500"
                  : "!border-gray-600"
              }`}
              buttonClass={`!focus:outline-none ${
                formClasses ? formClasses : "!bg-gray-800"
              } ${
                errors.phone && touched.phone
                  ? "!border-red-500"
                  : "!border-gray-600"
              }`}
              dropdownClass="!text-nilor-black rounded"
              searchClass="!bg-gray-700 !text-white"
              disableSearchIcon
              countryCodeEditable={false}
            />
          </FormField>
        )}

        {!isFieldHidden("email") && (
          <FormField label="Email" error={errors.email} touched={touched.email}>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              error={!!errors.email && touched.email}
              placeholder="Enter a work email"
              className={`${formClasses}`}
            />
          </FormField>
        )}

        {!isFieldHidden("company") && (
          <FormField
            label="Company"
            error={errors.company}
            touched={touched.company}
          >
            <Input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              onBlur={() => handleBlur("company")}
              placeholder="What's your company called?"
              error={!!errors.company && touched.company}
              className={`${formClasses}`}
            />
          </FormField>
        )}

        {!isFieldHidden("industry") && (
          <FormField
            label="Industry"
            error={errors.industry}
            touched={touched.industry}
          >
            <CustomSelect
              value={formData.industry}
              onChange={(value) => handleChange("industry", value)}
              onBlur={() => handleBlur("industry")}
              error={!!errors.industry && touched.industry}
              options={INDUSTRIES}
              placeholder="Industry"
              className={`${formClasses}`}
            />
          </FormField>
        )}

        {!isFieldHidden("country") && (
          <FormField
            label="Country"
            error={errors.country}
            touched={touched.country}
          >
            <CustomSelect
              value={formData.country}
              onChange={(value) => handleChange("country", value)}
              onBlur={() => handleBlur("country")}
              error={!!errors.country && touched.country}
              options={COUNTRIES}
              placeholder="Country"
              className={`${formClasses}`}
            />
          </FormField>
        )}

        {!isFieldHidden("businessType") && (
          <FormField
            label="Business Type"
            error={errors.businessType}
            touched={touched.businessType}
          >
            <CustomSelect
              value={formData.businessType}
              onChange={(value) => handleChange("businessType", value)}
              onBlur={() => handleBlur("businessType")}
              error={!!errors.businessType && touched.businessType}
              options={BUSINESS_TYPES}
              placeholder="Business Type"
              className={`${formClasses}`}
            />
          </FormField>
        )}

        {!isFieldHidden("comments") && (
          <FormField
            label="Comments"
            error={errors.comments}
            touched={touched.comments}
          >
            <Input
              type="text"
              value={formData.comments}
              onChange={(e) => handleChange("comments", e.target.value)}
              onBlur={() => handleBlur("comments")}
              placeholder="Drop a message or a query"
              error={!!errors.comments && touched.comments}
              className={`${formClasses}`}
            />
          </FormField>
        )}

        <div className="flex justify-end items-center">
          {isFormValid && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              type="submit"
              className="text-nilor-white rounded-full px-7 py-3 font-bold bg-nilor-accent transform hover:scale-95 transition-all duration-200"
            >
              Submit
            </motion.button>
          )}
        </div>
      </div>
    </form>
  );
}
