import Link from 'next/link';

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/hlhoangphucc' },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/phuc-hoang-6a7619295/',
  },
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/profile.php?id=100028906190717&locale=vi_VN',
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
