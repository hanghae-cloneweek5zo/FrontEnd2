import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginModal from '../LoginModal/LoginModal';
import SignUpModal from '../SignUpModal/SignUpModal';

const ProfileModal = (props) => {
  const { open, close } = props;

  const navigate = useNavigate();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const token = localStorage.getItem('Authorization');

  //로그아웃
  const logOut = () => {
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-email');
    alert('로그아웃 되었습니다.');
    window.location.reload();
  };

  //회원가입 모달
  const openSignupModal = (e) => {
    setSignupModalOpen(true);
  };
  const closeSignupModal = (e) => {
    e.stopPropagation();
    setSignupModalOpen(false);
  };

  //로그인 모달
  const openLoginModal = (e) => {
    setLoginModalOpen(true);
  };
  const closeLoginModal = (e) => {
    e.stopPropagation();
    setLoginModalOpen(false);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openProfileModal profileModal' : 'profileModal'}>
      {open && !token ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>

          <main>
            <div onClick={openSignupModal}>
              {signupModalOpen && (
                <SignUpModal
                  openSignUpModal={openSignupModal}
                  closeSignUpModal={closeSignupModal}
                />
              )}
              <span>회원 가입</span>
            </div>
            <div onClick={openLoginModal}>
              {loginModalOpen && (
                <LoginModal
                  openSignInModal={openLoginModal}
                  closeSignInModal={closeLoginModal}
                />
              )}
              <span>로그인</span>
            </div>
          </main>
          <footer></footer>
        </section>
      ) : open && token ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div onClick={logOut}>
              <span>로그아웃</span>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default ProfileModal;
