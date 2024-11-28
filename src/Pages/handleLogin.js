import * as api from "../componant/SignIn";
import { AUTH } from "../componant/const";

export const handleLogin =
  (values, setSubmitting, navigate, setLoading) => async (dispatch) => {
    try {
      // const {data} = await handleLogin(values);
      const { data } = await api.handleLogin(values);

      // console.log(data)

      dispatch({ type: AUTH, data });
      setSubmitting(false);
      setLoading(false);
      console.log("User Data:", values);
      navigate("/Cards");
    } catch {
      setSubmitting(false);
      setLoading(false);
    }
  };
