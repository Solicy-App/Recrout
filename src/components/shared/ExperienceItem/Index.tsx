import React,{ FC } from "react";
import { ExperienceItem } from "@/core/interface/experienceItem";
import Image from "@/components/image/Image";
import './Index.scss';

const ExperienceItem: FC<ExperienceItem> = ({ icon, title }): JSX.Element => {
    return <div className="item">
        <span className="item__icon">
            <Image className="item__icon-icon" name={icon}/>
        </span>
        <span className="item__title">{title}</span>
    </div>
}

export default ExperienceItem
