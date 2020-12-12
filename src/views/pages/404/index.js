import React from "react";
import { useHistory } from "react-router-dom";
import { Result, Button } from "antd";
import HomeLayout from "./../../../layouts/Home";
import WithAuth from "./../../../HOC/WithAuth";

function NotFound(props) {
  const history = useHistory();
  return (
    <HomeLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              history.push("/");
            }}
          >
            Back to Home
          </Button>
        }
      />
    </HomeLayout>
  );
}

export default WithAuth(NotFound);
