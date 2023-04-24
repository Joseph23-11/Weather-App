import React from "react";
import logoImg from "../assets/images/login-img.png";
import arrowRight from "../assets/icons/arrow-right.png";
import userIcon from "../assets/icons/user.png";
import lockIcon from "../assets/icons/lock.png";
import eyeSlashIcon from "../assets/icons/eye-slash.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="login-page">
        <div className="row">
          <div className="col-sm-4">
            <div className="background">
              <h1>Selamat Datang!!</h1>
              <img src={logoImg} alt="Login" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="input-data">
              <h1>Sistem Penutupan Ruang Jemuran</h1>
              <p>Isi data Anda</p>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1" className="form-input-label">
                    Email
                  </label>
                  <div className="box-input d-flex align-items-center">
                    <img src={userIcon} alt="user-icon" />
                    <input
                      type="email"
                      class="form-control border-0"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="jojo@gmail.com"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="form-input-label"
                  >
                    Kata Sandi
                  </label>
                  <div className="box-input d-flex align-items-center">
                    <img src={lockIcon} alt="lock-icon" />
                    <input
                      type="password"
                      class="form-control border-0"
                      id="exampleInputPassword1"
                      placeholder="*************"
                    />
                    <img src={eyeSlashIcon} alt="eye-slash" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    {" "}
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Ingat akun
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center forgot-password">
                    <Link to="/">Lupa kata sandi ?</Link>
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  class="btn btn-primary d-flex align-content-center flex-wrap justify-content-center button"
                >
                  Submit <img src={arrowRight} alt="arrow-right" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
