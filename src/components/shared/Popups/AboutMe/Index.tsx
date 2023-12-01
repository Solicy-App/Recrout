'use client';

import React, { FC, useState, SyntheticEvent, useEffect } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import FormField from '@/components/FormField/Index';
import { initialValues, validation } from './form';
import { InputType } from '@/core/enum/inputType';
import { ITranslate } from '@/core/interface/translate';
import DropDown from '@/components/Dropdown';
import RadioButton from '@/components/RadioGroup/Index';
import Level from '@/components/Level/Index';
import ActionButton from '@/components/ActionButton/Index';
import {
  phoneValues,
  days,
  months,
  years,
  radioButtons,
  languageValues,
  socialNetwork,
  top100Films,
} from '@/core/constants/aboutMePopUpConstants';
import Button from '@/components/Button/Index';
import { Checkbox, Autocomplete, TextField } from '@mui/material';
import { ISocialNetwork, UserProfile } from '@/core/interface/aboutMe';

import './Index.scss';

const AboutMePopUp: FC<ITranslate> = ({ t }): JSX.Element => {
  const [socialNetworks, setSocialNetworks] = useState<ISocialNetwork[]>([]);
  const handleSubmit = (
    values: object,
    actions: FormikHelpers<UserProfile>,
  ) => {
    console.log(values, actions);
  };
  const handleSelect = () => {};

  const handleRadioChane = (checkedValue: string) => {
    console.log(checkedValue);
    console.log(checkedValue);
  };

  const handleLevelClick = (level: number) => {
    console.log(level);
  };

  const handleCheckbox = (e: SyntheticEvent) => {
    console.log((e.target as HTMLInputElement).checked);
  };

  const handleNetwork = (selected: string, item: ISocialNetwork) => {
    item.network = selected;
  };
  const handleUrlChange = (
    e: React.FormEvent<HTMLInputElement>,
    item: ISocialNetwork,
  ) => {
    item.url = (e.target as HTMLInputElement).value;
  };

  const handleAddSocialMedia = () => {
    const newNetwork: ISocialNetwork = { network: '', url: '' };
    setSocialNetworks(prev => [...prev, newNetwork]);
  };

  useEffect(() => {
    console.log(socialNetworks);
  }, [socialNetworks]);

  return (
    <div className="about__popup">
      <Formik
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        initialValues={initialValues}
        validationSchema={validation(t)}
      >
        <Form>
          <div className="names">
            <div className="names__first">
              <span className="label">First name</span>
              <FormField
                inputClassName="about-input"
                fieldName="first_name"
                type={InputType.text}
                placeholder="First name"
              />
            </div>
            <div className="names__first">
              <span className="label">Last name</span>
              <FormField
                inputClassName="about-input"
                fieldName="last_name"
                type={InputType.text}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="pitch">
            <span className="label">Pitch</span>
            <FormField
              inputClassName="about-input pitch"
              fieldName="pitch"
              type={InputType.text}
              placeholder="pitch"
            />
          </div>
          <div className="headline">
            <span className="label">Headline</span>
            <FormField
              inputClassName="about-input"
              fieldName="headline"
              type={InputType.text}
              placeholder="headline"
            />
          </div>
          <div className="contact">
            <div className="phone">
              <span className="label"> Contact info</span>

              <DropDown
                className="phone_dropdown"
                defaultValue="+374"
                items={phoneValues}
                selectedValue={handleSelect}
              />
            </div>
            <div className="phone contact__val">
              <span className="label">Contact Value</span>
              <FormField
                inputClassName="about-input contact-value"
                fieldName="contact_value"
                type={InputType.text}
                placeholder="000000000"
              />
            </div>
          </div>
          <div className="birthday">
            <span className="label">Birthday</span>
            <div className="fields">
              <DropDown
                className="birthday_dropdown day"
                defaultValue="Day"
                items={days}
                selectedValue={handleSelect}
              />
              <DropDown
                className="birthday_dropdown"
                defaultValue="November"
                items={months}
                selectedValue={handleSelect}
              />
              <DropDown
                className="birthday_dropdown"
                defaultValue="2000"
                items={years}
                selectedValue={handleSelect}
              />
            </div>
          </div>

          <div className="gender">
            <span className="label">Gender</span>
            <RadioButton buttons={radioButtons} onChange={handleRadioChane} />
          </div>
          <div className="language">
            <div className="content">
              <div className="left">
                <span className="label">Language</span>
                <DropDown
                  className="language__dropdown dropdown"
                  defaultValue="English"
                  items={languageValues}
                  selectedValue={handleSelect}
                />
              </div>
              <div className="right">
                <span className="label">Proficiency</span>

                <Level
                  onClick={handleLevelClick}
                  isReadonly={false}
                  level={0}
                />
              </div>
            </div>
            <div className="autocomplete">
              <span className="label">Home Town</span>

              <Autocomplete
                freeSolo
                options={top100Films.map(option => option.title)}
                renderInput={params => (
                  <TextField {...params} label="freeSolo" />
                )}
              />
            </div>
            <div className="network">
              {socialNetworks.map((item, index) => (
                <div key={index} className="dropdowns">
                  <div className="select">
                    {index === 0 && (
                      <span className="label">Social network</span>
                    )}
                    <DropDown
                      className="dropdown network"
                      selectedValue={selected => handleNetwork(selected, item)}
                      items={socialNetwork}
                    />
                  </div>
                  <div className="url">
                    {index === 0 && <span className="label">Profile URL</span>}

                    <input
                      onInput={e => handleUrlChange(e, item)}
                      className="about-input"
                      type="text"
                    />
                  </div>
                </div>
              ))}

              <div className="action_button">
                <ActionButton
                  iconName="plus.svg"
                  onClick={handleAddSocialMedia}
                />
                <span onClick={handleAddSocialMedia} className="label">
                  Add Social network
                </span>
              </div>
              <div className="rss">
                <span className="label">Blog RSS URL</span>
                <FormField
                  inputClassName="about-input contact-value"
                  fieldName="blog_rss"
                  placeholder="Blog RSS"
                  type={InputType.text}
                />
                <div className="checkbox">
                  <Checkbox onChange={handleCheckbox} color="secondary" />
                  <span className="checkbox-label">
                    Show it on your profile?
                  </span>
                </div>
              </div>
              <div className="interests">
                <div className="left">
                  <span className="label">Interests</span>

                  <FormField
                    inputClassName="about-input"
                    fieldName="interests"
                    placeholder="Football, soccer, horsing"
                    type={InputType.text}
                  />
                </div>
                <div className="right">
                  <span className="label">Premium code</span>

                  <FormField
                    inputClassName="about-input"
                    fieldName="premium_code"
                    placeholder="xx.xx.xx.xx"
                    type={InputType.text}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button type="submit" className="save-btn" title="save" />
        </Form>
      </Formik>
    </div>
  );
};

export default AboutMePopUp;
