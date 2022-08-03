import axios from 'axios'
import {USER_REGISTER} from '../../constant/common';

export const userSignup = async (body) => {
    console.log(body)
    try {
        return await axios.post(`${USER_REGISTER}`, {
          name: body.name,
          email: body.email,
          mobile: body.mobile,
          password: body.password,
          technology: body.technology
        });
      }
    catch (error) {
      throw error;
    }
  };