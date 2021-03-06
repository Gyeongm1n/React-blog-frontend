// 컴퍼넌트 파일명은 항상 대문자 시작!
import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import { Helmet } from 'react-helmet-async';
const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>로그인 - Blog</title>
      </Helmet>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
