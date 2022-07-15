import { Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "../Error404";
import { Login } from "./Login/Login";
import { NewPassword } from "../NewPassword";
import { PasswordRecovery } from "../PasswordRecovery";
import { Registration } from "../Registration";
import "./form.scss";
import { formPath } from "./path/form-path";

export const Forms = () => (
    <div className="form">
        <div className="form__container">
            <Routes>
                <Route path={formPath.LOGIN} element={<Login />} />
                <Route path={formPath.REGISTRATION} element={<Registration />} />
                <Route path={formPath.PASS_RECOVERY} element={<PasswordRecovery />} />
                <Route path={formPath.NEW_PASS} element={<NewPassword />} />
                <Route path="*" element={<Navigate to={'404'} />} />
                <Route path="/" element={<div></div>} />
                <Route path={formPath.ERROR404} element={<Error404 />} />
            </Routes>
        </div>
    </div>

)