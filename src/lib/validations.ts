import { FormData } from './types';

export const validateField = (name: keyof FormData, value: string): string => {
  switch (name) {
    case 'name':
      return value.trim() === '' ? 'Name is required' : '';
    case 'phone':
      return value.length < 10 ? 'Invalid phone number' : '';
    case 'email':
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
    case 'company':
      return value.trim() === '' ? 'Company name is required' : '';
    case 'industry':
      return value === '' ? 'Please select an industry' : '';
    case 'country':
      return value === '' ? 'Please select a country' : '';
    case 'businessType':
      return value === '' ? 'Please select a business type' : '';
    default:
      return '';
  }
};