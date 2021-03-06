import React, { useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

export const useInput = (defaultValue: any = null) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange];
};

interface Ivalue {
  initValue?: string | null;
}

const Signup = () => {
  const [id, onChangeId] = useInput("");
  const [nickName, onChangeNickName] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [term, setTerm] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    []
  );

  const onChangeTerm = useCallback((e: CheckboxChangeEvent) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      console.log({
        id,
        nickName,
        password,
        passwordCheck,
        term
      });
    },
    [password, passwordCheck, term]
  );

  return (
    <Form onSubmit={onSubmit} style={{ padding: 10 }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-nick">닉네임</label>
        <br />
        <Input
          name="user-nick"
          value={nickName}
          required
          onChange={onChangeNickName}
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          required
          onChange={onChangePassword}
        />
      </div>
      <div>
        <label htmlFor="user-password-check">비밀번호체크</label>
        <br />
        <Input
          name="user-password-check"
          type="password"
          value={passwordCheck}
          required
          onChange={onChangePasswordCheck}
        />
        {passwordError && (
          <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
        )}
      </div>
      <div>
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
          제로초 말을 잘 들을 것을 동의합니다.
        </Checkbox>
        {termError && (
          <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
        )}
      </div>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </div>
    </Form>
  );
};

export default Signup;
