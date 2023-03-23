import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../DataProvider/DataProvider";
import "./form.css";
import "./Modal.css";
export interface Props {
  onClose: () => void;
  sendData?: (action: any) => boolean;
}
export const PassWordForm: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   const fromChildren = () => {
  //     props.sendData(false);
  //   };
  const onSubmit = async (data: any) => {
    const id = localStorage.getItem("id");
    try {
      console.log("in change password");
      await httpClient.put(`http://localhost:3001/changePassword/${id}`, {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });
      alert("Change password successfully yeahhhhh ");
      navigate("/myProfile");
    } catch (e: any) {
      setError(e.response.data.error.message);
    }
  };
  const password = watch("newPassword");
  return (
    <>
      <div className="modal-backdrop">
        <div className="modal">
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb">
                <label>Current Password</label>
                <br />
                <input
                  id="currentPassword"
                  type="password"
                  {...register("currentPassword", { required: true })}
                />
                <br />
                {errors.currentPassword && (
                  <p style={{ color: "red" }}>This is required</p>
                )}
                {error && <span style={{ color: "red" }}>{error}</span>}
              </div>
              <div className="mb">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="newPassword"
                  type="password"
                  {...register("newPassword", { required: true })}
                />
                <br />
                {errors.newPassword && (
                  <p style={{ color: "red" }}>This is required</p>
                )}
              </div>
              <div className="mb">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="error" style={{ color: "red" }}>
                    Passwords do not match
                  </span>
                )}
              </div>
              <div className="submit">
                <button className="button_submit" type="submit" value="Submit">
                  Submit
                </button>
                <button onClick={props.onClose}>Close</button>
              </div>
              {/* <input className="button_submit" type="submit" /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
