import React, { FC } from "react";
import { ICertifications } from "@/core/interface/certifications";

const Certifications: FC<ICertifications> = ({ title, desc }): JSX.Element => {
    return <div className="tab__bottom__content__items">
        <span className="tab__bottom__content__items-title">{title}</span>
        <span className="tab__bottom__content__items-desc">{desc}</span>
    </div>
}

export default Certifications;
