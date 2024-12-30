import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FormField } from '../../../../components/DemoForm/FormComponents/FormField';
import { Input } from '../../../../components/DemoForm/FormComponents/Input';
import { CustomSelect } from '../../../../components/DemoForm/FormComponents/CustomSelect';
import { INDUSTRIES, COUNTRIES, INITIAL_DATA } from '../../../../lib/utils';
import { FormData } from '../../../../lib/types';
import { validateField } from '../../../../lib/validations';
import { motion } from 'framer-motion';

export default function ContactUsForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleBlur = (field: keyof FormData) => {
    // Only validate if the field is being touched for the first time
    if (!touched[field]) {
      setTouched(prev => ({ ...prev, [field]: true }));
      const error = validateField(field, formData[field]);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Only validate if the field has been touched
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const newErrors: Partial<FormData> = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });

    const isValid = !Object.values(newErrors).some((error) => error !== '');
    setIsFormValid(isValid);
  };


  // Rest of the component remains the same...
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Partial<FormData> = {};
    const allTouched: Partial<Record<keyof FormData, boolean>> = {};
    
    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
      allTouched[key] = true;
    });

    setErrors(newErrors);
    setTouched(allTouched);

    if (!Object.values(newErrors).some(error => error !== '')) {
      console.log('Form submitted:', formData);
      setFormData(INITIAL_DATA);
    setErrors({});
    setTouched({});
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
        <FormField
          label="Name"
          error={errors.name}
          touched={touched.name}
        >
          <Input
            type="text"
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            error={!!errors.name && touched.name}
            placeholder='Enter your name'
          />
        </FormField>

        <FormField
          label="Phone"
          error={errors.phone}
          touched={touched.phone}
        >
          <PhoneInput
            country={'us'}
            value={formData.phone}
            onChange={phone => handleChange('phone', phone)}
            onBlur={() => handleBlur('phone')}
            containerClass="phone-input-container"
            inputClass={`!w-full !bg-gray-800 !text-white !py-2 !pl-12 !rounded-lg !border ${
              errors.phone && touched.phone ? '!border-red-500' : '!border-gray-600'
            }`}
            buttonClass="!bg-gray-800 !border-gray-600 !rounded-l-lg !focus:outline-none"
            dropdownClass="!text-nilor-black rounded"
            searchClass="!bg-gray-700 !text-white"
            disableSearchIcon
            countryCodeEditable={false}
          />
        </FormField>

        <FormField
          label="Email"
          error={errors.email}
          touched={touched.email}
        >
          <Input
            type="email"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            error={!!errors.email && touched.email}
            placeholder='Enter a work email'
          />
        </FormField>

        <FormField
          label="Company"
          error={errors.company}
          touched={touched.company}
        >
          <Input
            type="text"
            value={formData.company}
            onChange={e => handleChange('company', e.target.value)}
            onBlur={() => handleBlur('company')}
            placeholder="What's your company called?"
            error={!!errors.company && touched.company}
          />
        </FormField>

        <FormField
          label="Industry"
          error={errors.industry}
          touched={touched.industry}
        >
          <CustomSelect
            value={formData.industry}
            onChange={value => handleChange('industry', value)}
            onBlur={() => handleBlur('industry')}
            error={!!errors.industry && touched.industry}
            options={INDUSTRIES}
            placeholder="Industry"
          />
        </FormField>

        <FormField
          label="Country"
          error={errors.country}
          touched={touched.country}
        >
          <CustomSelect
            value={formData.country}
            onChange={value => handleChange('country', value)}
            onBlur={() => handleBlur('country')}
            error={!!errors.country && touched.country}
            options={COUNTRIES}
            placeholder="This is not changing brooo"
          />
        </FormField>

        <FormField
          label="Message"
          error={errors.businessType}
          touched={touched.businessType}
        >
          <Input
            type="text"
            value={formData.company}
            onChange={e => handleChange('company', e.target.value)}
            onBlur={() => handleBlur('company')}
            placeholder="What's your company called?"
            error={!!errors.businessType && touched.businessType}
          />
        </FormField>

        <div className="flex justify-end items-center">
          {isFormValid && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              type="submit"
              className="text-nilor-white rounded-full px-7 py-3 font-bold bg-nilor-accent transform hover:scale-95 transition-all duration-200">
            
             
              Submit
            </motion.button>
          )}
        </div>
      </div>
    </form>
  );
}