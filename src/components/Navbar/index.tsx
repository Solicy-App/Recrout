'use client';
import React, { memo, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from '../image/Image';
import Button from '../Button/Index';
import ProfileImage from '@/components/ProfileImage';
import NotificationCard from '../NotificationCard/Index';
import './index.scss';

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropDown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = (): void => {
    setShowDropDown(prev => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showDropdown]);

  return (
    <nav>
      <div className="navbar">
        <Link href="/" className="navbar-logo">
          <Image name={'logo.jpg'} width={250} height={50} />
        </Link>
        <div className="navbar__left">
          <Button className="navbar__left-btn" title="Upgrade" />
          <div className="navbar__left__dropdown">
            <div
              onClick={toggleDropDown}
              className="navbar__left__dropdown-btn flex items-center justify-between"
            >
              <ProfileImage
                notificationCount={5}
                height={44}
                width={44}
                name="profile.svg"
              />
              <span className="navbar__left__dropdown-name">Alan Geni</span>
              <Image
                className={`navbar__left__dropdown-arrow ${
                  showDropdown ? 'active' : ''
                }`}
                name="arrow.svg"
              />
            </div>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="navbar__left__dropdown__content"
              >
                <div className="navbar__left__dropdown__content-cards">
                  <NotificationCard
                    image="profile.svg"
                    message="Lorem ipsum dolor sit amet consectetur"
                    senderName="Jane Jiler"
                    time="now"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
