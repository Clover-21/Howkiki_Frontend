# 🤖 하우키키
> 고객의 상황을 반영한 응대와 주문 결제 자동화를 제공하는 휴먼터치 AI 챗오더
</br>

## ⚒️ 기술 스택
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?logo=styled-components&logoColor=white)

</br>

## 📄 프로젝트 구조
```bash
Howkiki_FE
│
src/
├── api/
├── assets/
├── components/                       
│   ├── chatbot/                
│   │   └── OrderCancelModal.jsx
│   │   └── (...)
│   ├── manager/                
│   │   └── AcceptModal.jsx
│   │   └── (...)
├── hooks/
│   ├── useModal.jsx
│   ├── (...)
├── pages/
│   ├── chatbot/
│       ├── chatBot.jsx
│       ├── (...) 
│   ├── manager/
│       ├── fullOrder.jsx
│       ├── (...)                  
├── styles/
│   ├── chatbot/
│       ├── chatBot.module.jsx
│       ├── (...) 
│   ├── components/
│       ├── acceptModal.module.jsx
│       ├── (...)
│   ├── manager/
│       ├── orderWaiting.module.jsx
│       ├── (...)
│   ├── globalStyles.jsx
│   ├── pagination.module.jsx
```
</br>

## ⚙️ 개발환경 설정
#### 1. 프로젝트 생성 (※ 클론한 경우 이 단계는 건너뛰어도 됩니다)</br>
CRA(Create React App)를 사용하여 프로젝트를 생성하려면 Node.js와 npm이 사전에 설치되어 있어야 합니다.</br>
* Node.js: v14.0.0 이상
* npm (Node Package Manager): v6.14.0 이상

위 소프트웨어가 설치되어 있다면, 아래 npx 명령어를 사용해 React 프로젝트를 생성하고 실행할 수 있습니다.

```bash
npx create-react-app my-app
cd my-app
npm start
```

#### 2. FE 프로젝트 clone
깃 클론을 진행하기 위해서는 컴퓨터에 Git이 설치되어 있어야 합니다.</br>
명령 프롬프트(또는 터미널) 창을 열고, 아래 명령어를 입력하여 프로젝트를 클론합니다.
```bash
git clone https://github.com/Clover-21/Howkiki_Frontend.git
```

클론이 완료되면 해당 프로젝트로 이동합니다.
```bash
cd Howkiki_Frontend
```

React 프로젝트 실행을 위해 의존성 패키지를 설치합니다.
```bash
npm install
```

패키지 설치가 완료된 후에는 아래 명령어를 통해 프로젝트를 실행합니다.
```bash
npm start
```

#### 3. 라이브러리 설치 및 설정
프로젝트에 필요한 라이브러리를 사용하기 위해서는 다음 명령어들을 통해 라이브러리를 설치해야 합니다.</br>
명령 프롬프트(또는 터미널)에 아래 명령어를 입력합니다.
```bash
npm install react-router-dom         // useNavigate, useParams를 사용하기 위해 설치
npm install axios                    // API 호출을 위해 설치
npm install event-source-polyfill    //SSE 연결을 하기 위해 설치
```

#### 4. 추가적인 UI 라이브러리 설치
추가적으로 스타일을 위한 라이브러리를 설치합니다.
```bash
npm install styled-components
```

#### 5. 환경변수 설정

**5.1 .env 파일 생성** </br>
root 폴더(Howkiki_Frontend)에 해당 파일(.env) 생성

**5.2 .env 파일 내용 작성**</br>
아래 형식에 맞춰 키 값을 작성합니다.</br>
각 키 값은 교수님께 전달해드렸습니다.

```bash
REACT_APP_CHAT_HTTPS_URL=""
REACT_APP_HTTPS_URL=""
REACT_APP_PORTONE_MERCHANT_CODE=""
```
</br>

## 🎬 하우키키 DEMO
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white&style=flat)](https://www.youtube.com/watch?v=7vHkNP8n9T8)
