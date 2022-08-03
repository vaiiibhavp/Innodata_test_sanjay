import React, { useState } from 'react'
import { Formik } from "formik";
import { notification, Select } from "antd";
import { userSignup } from '../Graphs/User/register';

const Index = () => {

    const [email, setEmail] = useState(true)
    const [mobile, setMobile] = useState(true)

    const { Option } = Select;

    const technology = [];

    const tech = [
        'C++',
        'Java',
        'Python',
        'Angular',
        'Laravel',
        'ReactJS',
        'NextJS'
    ];

    tech.map((tech) =>
        technology.push(<Option key={tech}>{tech}</Option>)
    )

    const validateForm = (values) => {
        const errors = {};

        if (values.user_id == '') {
            errors.user_id = "Please enter something";
            setEmail(true);
            setMobile(true);
        }
        else if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(String(values.user_id).toLowerCase())) {
            setEmail(false);
            setMobile(true);
            values.email = values.user_id
        }
        else if (/^((?:[1-9][0-9 ().-]{5,28}[0-9])|(?:(00|0)( ){0,1}[1-9][0-9 ().-]{3,26}[0-9])|(?:(\+)( ){0,1}[1-9][0-9 ().-]{4,27}[0-9]))$/.test(values.user_id)) {
            setEmail(true);
            setMobile(false);
            values.mobile = values.user_id
        }
        if (values.name == '') {
            errors.name = "Please provide name";
        }
        if (values.password == '') {
            errors.password = "Please provide Password";
        }
        console.log('errors', errors);
        return errors;
    }

    const onChangeHandle = (value, setFieldValue) => {
        setFieldValue('technology', value);
    }

    const handleSubmit = async (values) => {
        validateForm(values);

        // console.log(values);
        await userSignup(values)
            .then((res) => {
                if (res.status === 200) {
                    notification["success"]({
                        message: "Registration done Successfully",
                    });
                } else {
                    notification["error"]({
                        message: "Registration Failed",
                    });
                }
            }).catch((err) => {
                notification["error"]({
                    message: "Something went wrong!",
                });
                console.log("error",err);
            })
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobile: '',
                    password: '',
                    technology: '',
                }}
                validate={validateForm}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    setFieldTouched,
                    isSubmitting,
                }) => {
                    return (
                        <div className="flex items-center justify-center min-h-screen bg-gray-100">
                            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                                <h3 className="text-2xl font-bold text-center">Register</h3>
                                <div className="mt-4">
                                    <label className="block">User ID</label>
                                    <input type="text" placeholder="Mobile/Email" id="user_id"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.user_id}
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    {errors.user_id && touched.user_id ? (
                                        <p
                                            style={{
                                                color: "red",
                                                fontSize: "small",
                                                margin: "0",
                                            }}
                                        >
                                            {errors.user_id}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <label className="block" htmlFor="Name">Name</label>
                                        <input type="text" placeholder="Name" id="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    {errors.name && touched.name ? (
                                        <p
                                            style={{
                                                color: "red",
                                                fontSize: "small",
                                                margin: "0",
                                            }}
                                        >
                                            {errors.name}
                                        </p>
                                    ) : null}
                                </div>
                                {email &&
                                    <div className="mt-4">
                                        <label className="block">Email</label>
                                        <input type="text" placeholder="Please enter Email" id="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                        {errors.email && touched.email ? (
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontSize: "small",
                                                    margin: "0",
                                                }}
                                            >
                                                {errors.email}
                                            </p>
                                        ) : null}
                                    </div>}
                                {mobile &&
                                    <div className="mt-4">
                                        <label className="block">Mobile</label>
                                        <input type="text" placeholder="Please enter Mobile" id="mobile"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mobile}
                                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                        {errors.mobile && touched.mobile ? (
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontSize: "small",
                                                    margin: "0",
                                                }}
                                            >
                                                {errors.mobile}
                                            </p>
                                        ) : null}
                                    </div>}
                                <div className="mt-4">
                                    <label className="block">Password</label>
                                    <input type="password" placeholder="Please enter Password" id="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    {errors.password && touched.password ? (
                                        <p
                                            style={{
                                                color: "red",
                                                fontSize: "small",
                                                margin: "0",
                                            }}
                                        >
                                            {errors.password}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="mt-4">
                                    <label className="block">Technology</label>
                                    <Select
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        id="message"
                                        mode="tags"
                                        style={{
                                            width: '100%'
                                        }}
                                        onChange={(e) => onChangeHandle(e, setFieldValue)}
                                        tokenSeparators={[',']}
                                        showArrow={true}
                                        size="large"
                                        showSearch
                                        allowClear
                                    >
                                        {technology}
                                    </Select>
                                </div>

                                <div className="mt-6 text-center">
                                    <button type="submit" className='bg-red-500 text-white py-3 px-10 rounded-lg' onClick={handleSubmit}>Register</button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Formik>
        </>
    )
}

export default Index