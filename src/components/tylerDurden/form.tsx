import React from "react";
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from "yup";

const UserForm = () => {

    const initialValues = {
        fullName: "",
        phone: "",
        email: "",
        userName: "",
    };

    const validationSchema = Yup.object({
        fullName: Yup.string()
            .min(3, "Must be greater then 3 characters")
            .required("Full Name is Required!"),

        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
            .required("Phone Number is required!"),
        email: Yup.string().email().required("Email is Required!"),
        userName: Yup.string().required("Username is Required!"),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: () => {
            let values = { ...formik.values };
            console.log(values);
        },
    });


    const {
        values,
        errors,
        handleChange,
        handleBlur,
        touched,
        handleSubmit,
        setFieldValue
    } = formik;

    return (
        <>
            <div className="grid grid-cols-1 gap-8">
                <div className="col-span-5 xl:col-span-3">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                        <div className="p-7">
                            <FormikProvider value={formik}>
                                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>

                                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="fullName"
                                            >
                                                Full Name
                                            </label>

                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                onBlur={handleBlur}
                                                value={values.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="w-full sm:w-1/2">
                                            <label
                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                htmlFor="phone"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5.5">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="email"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                            name="email"
                                            type="email"
                                            id="email"
                                            onBlur={handleBlur}
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-5.5">
                                        <label
                                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                                            htmlFor="userName"
                                        >
                                            Username
                                        </label>
                                        <input
                                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                            type="text"
                                            name="userName"
                                            id="userName"
                                            onBlur={handleBlur}
                                            value={values.userName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="flex justify-end gap-4.5">
                                        <button
                                            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                                            type="submit"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>

                                </Form>
                            </FormikProvider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserForm;
