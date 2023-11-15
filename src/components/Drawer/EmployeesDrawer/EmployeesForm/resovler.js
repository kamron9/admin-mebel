import * as yup from "yup";

export const schema = yup.object().shape({
    firstName: yup.string().required("Your Full Name is Required!"),
    lastName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
})