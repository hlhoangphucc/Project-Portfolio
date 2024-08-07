'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+84) 336 755 724',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'hlhoangphucc@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Ho Chi Minh City, Viet Nam',
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbxBfvTNDFkZOCx4foE1T7Jp4nQ0YCDmzxb_SsXAJC4OBHiHZ2PPPJqxEzAUUuhnBDLrIg/exec',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setModalMessage('Sent successfully');
      } else {
        setModalMessage('Failed to send message');
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setModalMessage(error.response ? error.response.data : error.message);
      } else {
        setModalMessage('Unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
            >
              <h3 className='text-4xl text-accent'>Let&apos;s work together</h3>
              <p className='text-white/60'>
                Create impressive user interfaces, providing great user
                experiences. Cooperating with you is our pleasure.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='text'
                  name='firstname'
                  placeholder='Firstname'
                  onChange={handleChange}
                  required
                />
                <Input
                  type='text'
                  name='lastname'
                  placeholder='Lastname'
                  onChange={handleChange}
                  required
                />
                <Input
                  type='email'
                  name='email'
                  placeholder='Email address'
                  onChange={handleChange}
                  required
                />
                <Input
                  type='text'
                  name='phone'
                  placeholder='Phone number'
                  onChange={handleChange}
                  required
                />
              </div>

              <Select
                name='service'
                onValueChange={handleSelectChange}
                required
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='Web Developer'>Web Developer</SelectItem>
                    <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                    <SelectItem value='Mobile Developer'>
                      Mobile Developer
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name='message'
                className='h-[200px]'
                placeholder='Type your message here'
                onChange={handleChange}
                required
              />

              <Button
                type='submit'
                size='md'
                className='max-w-40'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 '>
          <div className='bg-primary p-8 rounded-xl relative'>
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-black'
            >
              x
            </button>
            <h2 className='text-2xl mb-4 text-accent'>{modalMessage}</h2>
            <div className='bg-white/80 text-black p-4 border border-white rounded-md max-w-lg break-words'>
              <p className='text-left'>
                <span>
                  Dear{' '}
                  <span className='capitalize inline'>{formData.lastname}</span>
                  ,
                </span>
                <br />
                Thank you very much for taking the time to contact us. Your
                interest is a great honor for us. <br />
                We have received your information and would like to assure you
                that your request will be carefully and thoroughly considered.
                We will respond as soon as possible. Once again, thank you very
                much for your trust and choosing our services. We look forward
                to cooperating and serving you in the future. <br /> Wishing you
                a good day and success.
                <br />
                Best regards,
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
