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

import { motion } from 'framer-motion';
import { ChangeEvent, FormEvent, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

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
    try {
      await axios.post(
        'https://script.google.com/macros/s/AKfycbxGimYFtcwd1bXnV3ny9Zb6q1b49mUWei4fF4QAI4U/dev',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Message sent successfully');
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Error sending message:',
          error.response ? error.response.data : error.message
        );
      } else {
        console.error('Unexpected error:', error);
      }
      alert('Failed to send message');
    }
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
          {/* form */}
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
                />
                <Input
                  type='text'
                  name='lastname'
                  placeholder='Lastname'
                  onChange={handleChange}
                />
                <Input
                  type='email'
                  name='email'
                  placeholder='Email address'
                  onChange={handleChange}
                />
                <Input
                  type='text'
                  name='phone'
                  placeholder='Phone number'
                  onChange={handleChange}
                />
              </div>

              <Select name='service' onValueChange={handleSelectChange}>
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
              />

              <Button type='submit' size='md' className='max-w-40'>
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
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
    </motion.section>
  );
};

export default Contact;
