import React from "react";
import fallbackImage from "../assets/fallbackImage.png";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더가 폴백 UI를 표시하도록 상태를 업데이트합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    /// 오류 보고 서비스에 오류를 기록할 수도 있습니다
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      /// 사용자 지정 폴백 UI를 렌더링할 수 있습니다
      //   return <h1>Something went wrong.</h1>;
      return (
        <div
          style={{
            display: "flex-box",
            textAlign: "center",
            // justifyContent: "center",
          }}
        >
          <h1 style={{ display: "block" }}>무언가 오류가 있어요.</h1>
          <img src={fallbackImage} alt="fallback" />;
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
