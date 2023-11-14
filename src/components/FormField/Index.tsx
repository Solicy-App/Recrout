import { FC } from "react";
import { Field, ErrorMessage } from 'formik';
import { InputType } from "zlib";
import { useTranslation } from '../../app/i18n/client';

type FormFieldType = {
    type: InputType,
    fieldName: string;
    lang: string;
}

const FormField:FC<FormFieldType> = ({ fieldName, lang, type }): JSX.Element => {
    const { t } = useTranslation(lang, 'common');

    return <>
            <Field type={type} name={fieldName}/>
        <ErrorMessage name={fieldName} component="div" />
        </>
}

export default FormField
